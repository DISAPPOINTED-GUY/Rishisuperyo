Add-Type -AssemblyName System.Drawing

$src1 = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791627075080.png"
$src2 = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791627102501.png"

$dest1 = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\origin.png"
$dest2 = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\exile.png"

Write-Host "Processing 2019 image - Green screen removal..."
$bmp1 = [System.Drawing.Bitmap]::FromFile($src1)
$w1 = $bmp1.Width
$h1 = $bmp1.Height
$rect1 = [System.Drawing.Rectangle]::new(0, 0, $w1, $h1)
$data1 = $bmp1.LockBits($rect1, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes1 = [byte[]]::new($w1 * $h1 * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data1.Scan0, $bytes1, 0, $bytes1.Length)

# Chroma key green screen removal on $bytes1
# Pixels are BGRA (byte 0: Blue, byte 1: Green, byte 2: Red, byte 3: Alpha)
for ($i = 0; $i -lt $bytes1.Length; $i += 4) {
    $b = [double]$bytes1[$i]
    $g = [double]$bytes1[$i + 1]
    $r = [double]$bytes1[$i + 2]

    # Green screen detection
    $maxRB = [Math]::Max($r, $b)
    $greenDiff = $g - $maxRB

    if ($greenDiff -gt 20 -and $g -gt 50) {
        if ($greenDiff -gt 40) {
            # Pure green background
            $bytes1[$i + 3] = 0
        } else {
            # Feathered edge: smooth transition
            $alphaRatio = 1.0 - (($greenDiff - 20.0) / 20.0)
            $newAlpha = [byte]([Math]::Max(0.0, [Math]::Min(255.0, $alphaRatio * 255.0)))
            $bytes1[$i + 3] = $newAlpha
            # Despill: clamp green to max(red, blue) to remove green halo
            $bytes1[$i + 1] = [byte]$maxRB
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes1, 0, $data1.Scan0, $bytes1.Length)
$bmp1.UnlockBits($data1)
$bmp1.Save($dest1, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp1.Dispose()
Write-Host "Successfully created origin.png with transparent background!"

Write-Host "Processing 2022 image - Purple downfall background removal..."
$bmp2 = [System.Drawing.Bitmap]::FromFile($src2)
$w2 = $bmp2.Width
$h2 = $bmp2.Height
$rect2 = [System.Drawing.Rectangle]::new(0, 0, $w2, $h2)
$data2 = $bmp2.LockBits($rect2, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes2 = [byte[]]::new($w2 * $h2 * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data2.Scan0, $bytes2, 0, $bytes2.Length)

# Sample background color from top-left corner
$bgB = [double]$bytes2[0]
$bgG = [double]$bytes2[1]
$bgR = [double]$bytes2[2]
Write-Host "2022 BG sampled color: R=$bgR, G=$bgG, B=$bgB"

for ($i = 0; $i -lt $bytes2.Length; $i += 4) {
    $b = [double]$bytes2[$i]
    $g = [double]$bytes2[$i + 1]
    $r = [double]$bytes2[$i + 2]

    # Color distance from purple background
    $dist = [Math]::Sqrt([Math]::Pow($r - $bgR, 2) + [Math]::Pow($g - $bgG, 2) + [Math]::Pow($b - $bgB, 2))

    if ($dist -lt 35) {
        $bytes2[$i + 3] = 0
    } elseif ($dist -lt 55) {
        # Edge antialiasing
        $alphaRatio = ($dist - 35.0) / 20.0
        $bytes2[$i + 3] = [byte]($alphaRatio * 255.0)
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes2, 0, $data2.Scan0, $bytes2.Length)
$bmp2.UnlockBits($data2)
$bmp2.Save($dest2, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp2.Dispose()
Write-Host "Successfully created exile.png with transparent background!"
