#Windows PowerShell Code###########################################################################
# http://gallery.technet.microsoft.com/scriptcenter/Icon-Exporter-e372fe70
#
# AUTHOR: John Grenfell
#
###########################################################################

<#
.SYNOPSIS
   Exports an ico and bmp file from a given source to a given destination
.Description
   You need to set the Source and Destination locations. First version of a script, I found other examples but all I wanted to do as grab and ico file from an exe but found getting a bmp useful. Others might find useful
   No error checking I'm afraid so make sure your source and destination locations exist!
.EXAMPLE
    .\Icon_Exporter.ps1
.Notes
        Version HISTORY:
        1.1 2012.03.8
#>
Param ( [parameter(Mandatory = $true)][string] $SourceEXEFilePath,
        [parameter(Mandatory = $true)][string] $TargetIconFilePath
)
CLS
#"shell32.dll" 238
If ($SourceEXEFilePath.ToLower().Contains(".dll")) {
    $IconIndexNo = Read-Host "Enter the icon index: "
    $Icon = [System.IconExtractor]::Extract($SourceEXEFilePath, $IconIndexNo, $true)    
} Else {
    [void][Reflection.Assembly]::LoadWithPartialName("System.Drawing")
    [void] [System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")
    $image = [System.Drawing.Icon]::ExtractAssociatedIcon("$($SourceEXEFilePath)").ToBitmap()
    $bitmap = new-object System.Drawing.Bitmap $image
    $bitmap.SetResolution(72,72)
    $icon = [System.Drawing.Icon]::FromHandle($bitmap.GetHicon())
}
$stream = [System.IO.File]::OpenWrite("$($TargetIconFilePath)")
$icon.save($stream)
$stream.close()
Write-Host "Icon file can be found at $TargetIconFilePath"