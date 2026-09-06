$categories = @("bakery", "confectionery", "meats", "poultry")
$src = "src\app\shop\dairy"

foreach ($cat in $categories) {
    $dest = "src\app\shop\$cat"
    if (-not (Test-Path $dest)) {
        New-Item -ItemType Directory -Force -Path $dest | Out-Null
    }
    Copy-Item -Path "$src\page.tsx" -Destination "$dest\page.tsx" -Force
    
    $content = Get-Content "$dest\page.tsx" -Raw
    
    $componentName = (Get-Culture).TextInfo.ToTitleCase($cat) + "Page"
    $titleText = (Get-Culture).TextInfo.ToTitleCase($cat)
    
    $content = $content -replace 'export default function DairyPage', "export default function $componentName"
    $content = $content -replace 'Dairy\r?\n', "$titleText`r`n"
    
    Set-Content -Path "$dest\page.tsx" -Value $content
    Write-Host "Created $dest"
}
