Add-Type -AssemblyName System.Drawing

$file = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\lone-warrior.png"
$bmp = [System.Drawing.Bitmap]::FromFile($file)
$w = $bmp.Width
$h = $bmp.Height

$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($w * $h * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

# Erase bottom-right corner watermark star: x > 0.80 * w and y > 0.80 * h
for ($y = [int]($h * 0.80); $y -lt $h; $y++) {
    for ($x = [int]($w * 0.80); $x -lt $w; $x++) {
        $idx = ($y * $w + $x) * 4
        $bytes[$idx + 3] = 0
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$bmp.UnlockBits($data)

$cleanFile = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\lone-warrior-clean.png"
$bmp.Save($cleanFile, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Remove-Item $file -Force
Move-Item $cleanFile $file -Force
Write-Host "Watermark wiped successfully!"
