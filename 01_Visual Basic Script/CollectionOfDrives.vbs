option Explicit
On Error Resume Next
Dim colDrives 'the collection that comes from WMI
Dim drive
'an individual drive in the collection
Const DriveType = 3 'Local drives. From the SDK

set colDrives =_
GetObject("winmgmts:").ExecQuery("select size,freespace " &_
"from Win32_LogicalDisk where DriveType =" & DriveType)

For Each drive in colDrives 'walks through the collection

	WScript.Echo "Drive: " & drive.DeviceID
	WScript.Echo "Size: " & drive.size
	WScript.Echo "Freespace: " & drive.freespace

Next



