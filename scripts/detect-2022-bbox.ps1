Add-Type -AssemblyName System.Drawing

$src = "C:\Users\user\.gemini\antigravity-ide\brain\5bd3fabe-9a3e-4988-b3c0-bedde965fbab\.user_uploaded\media_1791627102501.png"
$bmp = [System.Drawing.Bitmap]::FromFile($src)
$w = $bmp.Width
$h = $bmp.Height

Write-Host "Source 2022 dimensions: $w x $h"

# Sample background color from top left
$cornerColor = $bmp.GetPixel(10, 10)
$bgR = $cornerColor.R
$bgG = $cornerColor.G
$bgB = $cornerColor.B
Write-Host "Sampled BG color: R=$bgR, G=$bgG, B=$bgB"

# Let's inspect horizontal spans
# The boy is in the center, feather is left (< 40% width), football is right (> 65% width)
# Let's find columns where pixels differ significantly from background
$colMin = $w
$colMax = 0
$rowMin = $h
$rowMax = 0

# We want the boy: centered horizontally
$centerX = [int]($w / 2)
# Check from 35% to 65% of width to find boy bounding box
$xStart = [int]($w * 0.35)
$xEnd = [int]($w * 0.65)

for ($y = 0; $y -lt $h; $y++) {
    for ($x = $xStart; $x -lt $xEnd; $x++) {
        $c = $bmp.GetPixel($x, $y)
        $dist = [Math]::Sqrt([Math]::Pow($c.R - $bgR, 2) + [Math]::Pow($c.G - $bgG, 2) + [Math]::Pow($c.B - $bgB, 2))
        if ($dist -gt 40) {
            if ($x -lt $colMin) { $colMin = $x }
            if ($x -gt $colMax) { $colMax = $x }
            if ($y -lt $rowMin) { $rowMin = $y }
            if ($y -gt $rowMax) { $rowMax = $y }
        }
    }
}

Write-Host "Boy bounding box: X=[$colMin .. $colMax] (width=$($colMax-$colMin)), Y=[$rowMin .. $rowMax] (height=$($rowMax-$rowMin))"
$bmp.Dispose()
