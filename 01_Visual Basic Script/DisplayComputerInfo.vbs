Set objWMIService = GetObject("winmgmts:\\" & strComputer & "\root\cimv2")
Set colMonitoredDisks = objWMIService.ExecNotificationQuery _
("Select * from __instancemodificationevent within 10 where " _
& "TargetInstance ISA 'Win32_LogicalDisk'")

Do While True
	snapTime = Timer

	Set objDiskChange = colMonitoredDisks.NextEvent
	
	If objDiskChange.TargetInstance.DriveType = LOCAL_HARD_DISK Then
		WScript.echo "diskSpace on " &_
		objDiskChange.TargetInstance.deviceID &_
		" has changed. It now has " &_
		objDiskChange.TargetInstance.freespace &_
		" Bytes free."
	End If

	If (snapTime - startTime) > RUN_TIME Then
		Exit Do
	End If
Loop


