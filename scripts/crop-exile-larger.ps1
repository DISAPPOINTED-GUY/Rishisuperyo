Add-Type -AssemblyName System.Drawing

$src = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791627102501.png"
$dest = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\exile.png"

$orig = [System.Drawing.Bitmap]::FromFile($src)

# Precise boy bounds: X=390 to 640 avoids ball on right and feather on left!
# Let's inspect: Boy head is at Y=70, feet at Y=445
# X=375 to 645 covers boy width exactly
$cropX = 375
$cropY = 50
$cropW = 270
$cropH = 405

$cropBmp = New-Object System.Drawing.Bitmap $cropW, $cropH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($cropBmp)
$g.DrawImage($orig, [System.Drawing.Rectangle]::new(0, 0, $cropW, $cropH), $cropX, $cropY, $cropW, $cropH, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$orig.Dispose()

# Sample background color
$bgR = 68.0
$bgG = 14.0
$bgB = 90.0

$rect = [System.Drawing.Rectangle]::new(0, 0, $cropW, $cropH)
$data = $cropBmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($cropW * $cropH * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

for ($y = 0; $y -lt $cropH; $y++) {
    for ($x = 0; $x -lt $cropW; $x++) {
        $idx = ($y * $cropW + $x) * 4
        $b = [double]$bytes[$idx]
        $g = [double]$bytes[$idx + 1]
        $r = [double]$bytes[$idx + 2]

        # Check distance to purple background
        $dist = [Math]::Sqrt([Math]::Pow($r - $bgR, 2) + [Math]::Pow($g - $bgG, 2) + [Math]::Pow($b - $bgB, 2))

        # Check for purple tint in shadow (purple floor shadow has high R and B compared to G)
        $isPurpleFloor = ($r - $g -gt 30) -and ($b - $g -gt 35) -and ($y -gt $cropH * 0.7) -and ($dist -lt 75)

        if ($dist -lt 38 -or $isPurpleFloor) {
            $bytes[$idx + 3] = 0
        } elseif ($dist -lt 58) {
            $alphaRatio = ($dist - 38.0) / 20.0
            $bytes[$idx + 3] = [byte]($alphaRatio * 255.0)
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$cropBmp.UnlockBits($data)

# Upscale to 700x1050 for crisp presentation
$targetW = 700
$targetH = [int](700 * ($cropH / $cropW))

$finalBmp = New-Object System.Drawing.Bitmap $targetW, $targetH, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gFinal = [System.Drawing.Graphics]::FromImage($finalBmp)
$gFinal.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gFinal.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gFinal.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gFinal.DrawImage($cropBmp, 0, 0, $targetW, $targetH)
$gFinal.Dispose()
$cropBmp.Dispose()

$finalBmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$finalBmp.Dispose()

Write-Host "Successfully cleaned up exile.png - pure boy focus!"
