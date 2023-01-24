Get-ChildItem -Path "c:\Users\minhwasoo\AppData\Local\Packages\CanonicalGroupLimited.Ubuntu_79rhkp1fndgsc\LocalState\*.vhdx" | ForEach-Object {
@'
select vdisk file="$($_.FullName)"
attach vdisk readonly
compact vdisk
detach vdisk
exit
'@ | Out-File -FilePath "diskpart.txt"
    diskpart /s diskpart.txt
}

