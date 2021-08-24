Option Explicit

On Error Resume Next
Dim objShell
Dim regActiveComputerName, regComputerName, regHostname
Dim ActiveComputerName, ComputerName, Hostname

regActiveComputerName = "HKLM\SYSTEM\CurrentControlSet\Control\" & _
"ComputerName\ActiveComputerName\ComputerName"
regComputerName = "HKLM\SYSTEM\CurrentControlSet\Control\" & _
"ComputerName\ComputerName\ComputerName"
regHostname = _
"HKLM\SYSTEM\CurrentControlSet\Services\Tcpip\Parameters\Hostname"
Set objShell = CreateObject("WScript.Shell")

ActiveComputerName = objShell.RegRead(regActiveComputerName)
ComputerName = objShell.RegRead(regComputerName)
Hostname = objShell.RegRead(regHostname)

WScript.Echo ActiveComputerName & " is active computer name"
WScript.Echo ComputerName & " is computer name"
WScript.Echo Hostname & " is host name"


