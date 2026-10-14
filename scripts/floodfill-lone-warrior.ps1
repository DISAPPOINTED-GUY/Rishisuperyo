Add-Type -AssemblyName System.Drawing

$src = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791630462903.jpg"
$dest = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\lone-warrior.png"

$orig = [System.Drawing.Bitmap]::FromFile($src)
$w = $orig.Width
$h = $orig.Height

$bmp = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($orig, 0, 0, $w, $h)
$g.Dispose()
$orig.Dispose()

$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($w * $h * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

# Visited array for BFS flood fill
$visited = New-Object 'bool[,]' $w, $h
$queue = New-Object System.Collections.Generic.Queue[System.Drawing.Point]

# Seed all 4 borders
for ($x = 0; $x -lt $w; $x++) {
    $queue.Enqueue([System.Drawing.Point]::new($x, 0))
    $queue.Enqueue([System.Drawing.Point]::new($x, $h - 1))
    $visited[$x, 0] = $true
    $visited[$x, $h - 1] = $true
}
for ($y = 0; $y -lt $h; $y++) {
    $queue.Enqueue([System.Drawing.Point]::new(0, $y))
    $queue.Enqueue([System.Drawing.Point]::new($w - 1, $y))
    $visited[0, $y] = $true
    $visited[$w - 1, $y] = $true
}

$dx = @(1, -1, 0, 0)
$dy = @(0, 0, 1, -1)

while ($queue.Count -gt 0) {
    $pt = $queue.Dequeue()
    $px = $pt.X
    $py = $pt.Y
    $idx = ($py * $w + $px) * 4

    # Remove watermark star in bottom right
    if ($px -gt ($w * 0.80) -and $py -gt ($h * 0.80)) {
        $bytes[$idx + 3] = 0
    }

    $b = [double]$bytes[$idx]
    $g = [double]$bytes[$idx + 1]
    $r = [double]$bytes[$idx + 2]
    $maxVal = [Math]::Max($r, [Math]::Max($g, $b))

    # Background threshold: outside dark space
    if ($maxVal -lt 24) {
        $bytes[$idx + 3] = 0

        # Expand to neighbors
        for ($i = 0; $i -lt 4; $i++) {
            $nx = $px + $dx[$i]
            $ny = $py + $dy[$i]
            if ($nx -ge 0 -and $nx -lt $w -and $ny -ge 0 -and $ny -lt $h) {
                if (-not $visited[$nx, $ny]) {
                    $visited[$nx, $ny] = $true
                    $queue.Enqueue([System.Drawing.Point]::new($nx, $ny))
                }
            }
        }
    } elseif ($maxVal -lt 48) {
        # Soft outer falloff on glow
        $alphaRatio = ($maxVal - 24.0) / 24.0
        $bytes[$idx + 3] = [byte]($alphaRatio * 255.0)
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$bmp.UnlockBits($data)

if (Test-Path $dest) { Remove-Item $dest -Force }
$bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Successfully generated flood-filled lone-warrior.png!"
