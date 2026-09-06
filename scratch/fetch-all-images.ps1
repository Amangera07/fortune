$urls = @(
    "https://fortunegourmet.com/testimonials/",
    "https://fortunegourmet.com/in-the-news/",
    "https://fortunegourmet.com/recipes/"
)

foreach ($url in $urls) {
    try {
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing
        $html = $response.Content
        Write-Host "--- $url ---"
        
        $regex = 'wp-content/uploads/[a-zA-Z0-9_/-]+\.(jpg|jpeg|png|webp)'
        $matches = [regex]::Matches($html, $regex)
        
        $found = @{}
        foreach ($match in $matches) {
            $src = $match.Value
            if (-not $found.ContainsKey($src)) {
                $found[$src] = $true
                Write-Host $src
            }
        }
    } catch {
        Write-Host "Error fetching $url : $_"
    }
}
