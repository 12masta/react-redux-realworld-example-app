function SendSlackTestReport {
    param (    
        [Parameter(Mandatory = $true, Position = 1)]$Url
    )
    $nl = [Environment]::NewLine
    $icon = $env:E2E_RESULTS_ICON
    $buildid = $(Build.BuildId)
    $testresultslink = "https://dev.azure.com/marcinstanekpl/Conduit%20e2e%20tests/_build/results?buildId=$buildid&view=ms.vss-test-web.build-test-results-tab"
    $pipelinepassratelink = "https://dev.azure.com/marcinstanekpl/Conduit%20e2e%20tests/_pipeline/analytics/stageawareoutcome?definitionId=1&contextType=build"
    $testpassrate = "https://dev.azure.com/marcinstanekpl/Conduit%20e2e%20tests/_test/analytics?definitionId=1&contextType=build"
    $pipelineduration = "https://dev.azure.com/marcinstanekpl/Conduit%20e2e%20tests/_pipeline/analytics/duration?definitionId=1&contextType=build"

    $payload = @{
        "icon_emoji"  = "$icon"	
        "username"    = "Test reporter"
        "attachments" = @(
            @{
                "text"   = "*<$testresultslink|E2e test results - $result>* $nl $nl BuildId: $buildid $nl $nl $nl Test results: $testresultslink $nl $nl Pipeline pass rate: $pipelinepassratelink $nl $nl Test pass rate: $testpassrate $nl $nl Pipeline duration: $pipelineduration"
                "footer" = "Message from Azure DevOps"
            }
        )
    }

    Write-Host "Payload:"
    Write-Host (ConvertTo-Json $payload)

    [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
    Invoke-RestMethod -Uri $Url -Method Post -Body (ConvertTo-Json -Compress -InputObject $payload) ` -ContentType "application/json"
}

Write-Host "Sending slack message for BUILD: $($env:BUILD_BUILDID)"

SendSlackTestReport $($env:WEBHOOK_URL)