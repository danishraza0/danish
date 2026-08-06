Add-Type -AssemblyName System.Drawing
$root = 'D:\Danaish-raza-projects\portfolio\assets'
$src = Join-Path $root 'logo.png'
$bmp = New-Object System.Drawing.Bitmap($src)
$w = $bmp.Width
$h = $bmp.Height

# --- 1) Knockout: logo-white.png (white -> transparent, soft edge) ---
$out = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    $p = $bmp.GetPixel($x, $y)
    $min = [Math]::Min($p.R, [Math]::Min($p.G, $p.B))
    $a = 255
    if ($min -gt 235) { $a = 0 }
    elseif ($min -gt 200) { $a = [int]((235 - $min) / 35 * 255) }
    $out.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, $p.R, $p.G, $p.B))
  }
}
$out.Save((Join-Path $root 'logo-white.png'), [System.Drawing.Imaging.ImageFormat]::Png)

# --- 2) Detect monogram extent via column analysis (left half of lockup) ---
function Get-ColInk($bmpIn, $x) {
  $count = 0
  for ($y = 0; $y -lt $bmpIn.Height; $y++) {
    $p = $bmpIn.GetPixel($x, $y)
    $min = [Math]::Min($p.R, [Math]::Min($p.G, $p.B))
    if ($min -lt 200) { $count++ }
  }
  return $count
}
# First inked column
$x = 0
while ($x -lt $w) {
  if ((Get-ColInk $bmp $x) -ge 3) { break }
  $x++
}
$start = $x
# Find first long empty gap after the monogram
$col = $start
$emptyRun = 0
$end = $w - 1
while ($col -lt [int]($w * 0.5)) {
  if ((Get-ColInk $bmp $col) -eq 0) { $emptyRun++ } else { $emptyRun = 0 }
  if ($emptyRun -ge 8) { $end = $col - $emptyRun; break }
  $col++
}
$monoW = $end - $start
Write-Output ("Monogram: start=" + $start + " end=" + $end + " width=" + $monoW)

# --- 3) Square icon canvas from monogram with padding ---
$pad = [int]($monoW * 0.10)
$side = $monoW + 2 * $pad
$icon = New-Object System.Drawing.Bitmap($side, $side, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($icon)
$g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
$g.Clear([System.Drawing.Color]::Transparent)
$g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$srcRect = New-Object System.Drawing.Rectangle($start, 0, $monoW, $h)
$dstRect = New-Object System.Drawing.Rectangle($pad, $pad, $monoW, $h)
$g.DrawImage($bmp, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

function Save-Scaled($srcBmp, $size, $path) {
  $res = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g2 = [System.Drawing.Graphics]::FromImage($res)
  $g2.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
  $g2.Clear([System.Drawing.Color]::Transparent)
  $g2.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceOver
  $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g2.DrawImage($srcBmp, 0, 0, $size, $size)
  $g2.Dispose()
  $res.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
}
Save-Scaled $icon 192 (Join-Path $root 'icon-192.png')
Save-Scaled $icon 512 (Join-Path $root 'icon-512.png')
Save-Scaled $icon 32 (Join-Path $root 'favicon-32.png')
Write-Output 'done'
