Option Explicit
'On Error Resume Next
Dim strError
Dim objFSO
Dim objFile
Dim strLine
Dim intResult
CONST ForReading = 1

strError = "Error"
Set objFSO = CreateObject("Scripting.FileSystemObject")
Set objFile = objFSO.OpenTextFile("C:\windows\setuplog.txt", ForReading)
strLine = objFile.ReadLine

Do Until objFile.AtEndofStream
	strLine = objFile.ReadLine
	intResult = InStr(strLine, strError)

	If intResult <> 0 Then
		WScript.Echo(strLine)
	End if
Loop

WScript.Echo("all done")
objFile.Close


