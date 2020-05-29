function Send-SlackMessage {
    param (
        [Parameter(Mandatory=$true, Position=0)]$Text,
        [Parameter(Mandatory=$true, Position=1)]$Url
    )
    $body= @"
    {
        "username": "Test reporter",
        "text": "MESSAGE_TEXT",
        "icon_emoji":":shipit:"
    }
"@

    Invoke-WebRequest -Method Post -Uri $Url -Body $body.Replace("MESSAGE_TEXT","$Text") -ContentType 'application/json'
}
Write-Host "Sending slack message for BUILD: $($env:BUILD_BUILDID)"

$nl = "`r`n`r`n"
$dnl = "$nl $nl"

Send-SlackMessage "<!channel> $nl *$($env:REPORTS_PROJECTS_NAME) Test Results* $dnl BuildId: $($env:BUILD_BUILDID) $dnl Test results: https://dev.azure.com/$($env:REPORTS_PARTIAL_URL)/_build/results?buildId=$($env:BUILD_BUILDID)&view=ms.vss-test-web.build-test-results-tab $dnl Test analitycs: https://dev.azure.com/$($env:REPORTS_PARTIAL_URL)/_test/analytics?definitionId=1&contextType=build" $($env:WEBHOOK_URL)