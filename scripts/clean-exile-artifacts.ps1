Add-Type -AssemblyName System.Drawing

$file = "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\exile.png"
$bmp = [System.Drawing.Bitmap]::FromFile($file)
$w = $bmp.Width
$h = $bmp.Height

$rect = [System.Drawing.Rectangle]::new(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$bytes = [byte[]]::new($w * $h * 4)
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)

# Erase bottom-left corner feather smudge (x < 0.25 * w and y > 0.75 * h)
# and wipe any stray floating pixels far from center body
for ($y = 0; $y -lt $h; $y++) {
    for ($x = 0; $x -lt $w; $x++) {
        $idx = ($y * $w + $x) * 4
        
        # Bottom left debris
        if ($x -lt ($w * 0.22) -and $y -gt ($h * 0.70)) {
            $bytes[$idx + 3] = 0
        }

        # Purple shadow on floor under feet (below y > 0.94)
        if ($y -gt ($h * 0.95)) {
            $b = $bytes[$idx]
            $g = $bytes[$idx + 1]
            $r = $bytes[$idx + 2]
            if ($r -gt $g -and $b -gt $g) {
                $bytes[$idx + 3] = 0
            }
        }
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $data.Scan0, $bytes.Length)
$bmp.UnlockBits($data)

$bmp.Save("c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\exile_clean.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Remove-Item $file
Move-Item "c:\Users\user\Documents\Dev\Rishisuperyo\public\characters\exile_clean.png" $file -Force
Write-Host "Successfully polished exile.png!"
