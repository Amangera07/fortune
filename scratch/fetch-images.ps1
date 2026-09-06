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
        
        $regex = '<img[^>]+src="([^">]+)"'
        $matches = [regex]::Matches($html, $regex)
        
        $found = @{}
        foreach ($match in $matches) {
            $src = $match.Groups[1].Value
            if ($src -match "wp-content/uploads") {
                if (-not $found.ContainsKey($src)) {
                    $found[$src] = $true
                    Write-Host $src
                }
            }
        }
    } catch {
        Write-Host "Error fetching $url : $_"
    }
}
