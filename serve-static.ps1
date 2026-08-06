$ErrorActionPreference = 'Stop'
$root = 'D:\Danaish-raza-projects\portfolio'
$prefix = 'http://127.0.0.1:8137/'
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Output "Serving $root at $prefix"

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $req = $ctx.Request
  $res = $ctx.Response

  $rel = $req.Url.AbsolutePath.TrimStart('/')
  if ([string]::IsNullOrWhiteSpace($rel)) { $rel = 'index.html' }
  $path = Join-Path $root $rel

  $mime = 'application/octet-stream'
  switch ([System.IO.Path]::GetExtension($path)) {
    '.html' { $mime = 'text/html; charset=utf-8' }
    '.css'  { $mime = 'text/css; charset=utf-8' }
    '.js'   { $mime = 'application/javascript; charset=utf-8' }
    '.json' { $mime = 'application/json; charset=utf-8' }
    '.xml'  { $mime = 'application/xml; charset=utf-8' }
    '.png'  { $mime = 'image/png' }
    '.jpg'  { $mime = 'image/jpeg' }
    '.jpeg' { $mime = 'image/jpeg' }
    '.ico'  { $mime = 'image/x-icon' }
    '.webp' { $mime = 'image/webp' }
    '.txt'  { $mime = 'text/plain; charset=utf-8' }
  }

  if (Test-Path $path) {
    $bytes = [System.IO.File]::ReadAllBytes($path)
    $res.ContentType = $mime
    $res.ContentLength64 = $bytes.Length
    $res.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $res.StatusCode = 404
    $msg = [System.Text.Encoding]::UTF8.GetBytes('404 Not Found')
    $res.ContentLength64 = $msg.Length
    $res.OutputStream.Write($msg, 0, $msg.Length)
  }
  $res.Close()
}
