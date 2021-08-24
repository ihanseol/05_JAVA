Option Explicit
'On Error Resume Next
Dim objWMIService
Dim objItem
Dim i
Const MAX_LOOPS = 8, ONE_HOUR = 3600000

For i = 1 To MAX_LOOPS
	Set objWMIService = GetObject("winmgmts:").ExecQuery _
	("SELECT * FROM Win32_Process where processID <> 0")
	WScript.Echo "There are " & objWMIService.count &_
	" processes running " & Now
	For Each objItem In objWMIService
		WScript.Echo "Process: " & objItem.Name
		WScript.Echo Space(9) & objItem.commandline
		WScript.Echo "Process ID: " & objItem.ProcessID
		WScript.Echo "Thread Count: " & objItem.ThreadCount
		WScript.Echo "Page File Size: " & objItem.PageFileUsage
		WScript.Echo "Page Faults: " & objItem.PageFaults
		WScript.Echo "Working Set Size: " & objItem.WorkingSetSize
		WScript.Echo vbNewLine
	Next
	WScript.Echo "******PASS COMPLETE**********"
	WScript.Sleep ONE_HOUR
Next

