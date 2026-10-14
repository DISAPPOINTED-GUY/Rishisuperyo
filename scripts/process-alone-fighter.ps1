Add-Type -AssemblyName System.Drawing

$src = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791629366829.jpg"
$dest = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\alone-fighter.png"

Write-Host "Processing Alone Fighter image..."
$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height
$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($w * $h * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

# Black background removal with smooth edge transition
for ($i = 0; $i -lt $bytes.Length; $i += 4) {
    $b = [double]$bytes[$i]
    $g = [double]$bytes[$i + 1]
    $r = [double]$bytes[$i + 2]

    # Luminance / max brightness
    $maxVal = [Math]::Max($r, [Math]::Max($g, $b))

    if ($maxVal -lt 12) {
        $bytes[$i + 3] = 0
    } elseif ($maxVal -lt 32) {
        # Smooth anti-aliased edge
        $alphaRatio = ($maxVal - 12.0) / 20.0
        $bytes[$i + 3] = [byte]($alphaRatio * 255.0)
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$bmp.UnlockBits($data)
$bmp.Save($dest, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Successfully created alone-fighter.png with transparent background!"
