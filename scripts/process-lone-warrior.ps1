Add-Type -AssemblyName System.Drawing

$src = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791630462903.jpg"
$dest = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\lone-warrior.png"

$orig = [System.Drawing.Bitmap]::FromFile($src)
$w = $orig.Width
$h = $orig.Height

# Create a true 32bpp ARGB bitmap
$bmp = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($orig, 0, 0, $w, $h)
$g.Dispose()
$orig.Dispose()

$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($w * $h * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

# Black background removal & watermark removal
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $idx = ($y * $w + $x) * 4
        
        # Watermark star is in bottom-right (x > 80% and y > 80%)
        if ($x -gt ($w * 0.80) -and $y -gt ($h * 0.80)) {
            $bytes[$idx + 3] = 0
            continue
        }

        $b = [double]$bytes[$idx]
        $g = [double]$bytes[$idx + 1]
        $r = [double]$bytes[$idx + 2]

        # Luminance / max brightness
        $maxVal = [Math]::Max($r, [Math]::Max($g, $b))

        # Check black background threshold
        if ($maxVal -lt 16) {
            $bytes[$idx + 3] = 0
        } elseif ($maxVal -lt 40) {
            # Smooth feathering on dark edge
            $alphaRatio = ($maxVal - 16.0) / 24.0
            $bytes[$idx + 3] = [byte]($alphaRatio * 255.0)
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$bmp.UnlockBits($data)

if (Test-Path $dest) { Remove-Item $dest -Force }
$bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Successfully generated true transparent lone-warrior.png without watermark!"
