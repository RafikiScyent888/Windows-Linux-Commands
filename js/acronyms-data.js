// Windows & Linux command line reference data set
const ACRONYMS = [
  {
    "id": 1,
    "acronym": "/?",
    "expansion": "Help Switch",
    "definition": "Placed AFTER a command to show a help list of how to use that command.",
    "category": "Help & Syntax"
  },
  {
    "id": 2,
    "acronym": "help",
    "expansion": "Help Command",
    "definition": "Placed BEFORE a command; works the same as /? but from the front.",
    "category": "Help & Syntax"
  },
  {
    "id": 3,
    "acronym": "cd",
    "expansion": "Change Directory",
    "definition": "Changes directories; shorthand for the chdir command. Example: `cd C:\\Windows`",
    "category": "Navigation"
  },
  {
    "id": 4,
    "acronym": "dir",
    "expansion": "Directory Listing",
    "definition": "Lists the files and folders/subdirectories in a directory.",
    "category": "Navigation"
  },
  {
    "id": 5,
    "acronym": "md",
    "expansion": "Make Directory",
    "definition": "Creates a directory; shorthand for the mkdir command. Example: `mkdir Logs`",
    "category": "Navigation"
  },
  {
    "id": 6,
    "acronym": "rmdir",
    "expansion": "Remove Directory",
    "definition": "Deletes directories. The rd command is shorthand for this.",
    "category": "Navigation"
  },
  {
    "id": 7,
    "acronym": "del",
    "expansion": "Delete",
    "definition": "Deletes files. Example: `del old.log`",
    "category": "Navigation"
  },
  {
    "id": 8,
    "acronym": "C:",
    "expansion": "Change Drive",
    "definition": "Switches the active drive by typing the drive letter followed by a colon, e.g. C:, D:, or X:.",
    "category": "Navigation"
  },
  {
    "id": 9,
    "acronym": "hostname",
    "expansion": "Host Name",
    "definition": "Displays the identity (computer name) of the machine the Command Prompt is open on.",
    "category": "Network Tools"
  },
  {
    "id": 10,
    "acronym": "ipconfig",
    "expansion": "IP Configuration",
    "definition": "Displays basic connectivity information such as IP address, subnet mask, and default gateway. Highly useful for diagnosing network issues. Example: `ipconfig /all`",
    "category": "Network Tools"
  },
  {
    "id": 11,
    "acronym": "ipconfig /all",
    "expansion": "Full IP Configuration",
    "definition": "Shows basic network settings plus MAC address, detailed IPv6 information, IP address leases, and DHCP connection information.",
    "category": "Network Tools"
  },
  {
    "id": 12,
    "acronym": "ipconfig /release",
    "expansion": "Release IP Lease",
    "definition": "Releases the current IP address back into the DHCP scope. (Use /release6 for IPv6.)",
    "category": "Network Tools"
  },
  {
    "id": 13,
    "acronym": "ipconfig /renew",
    "expansion": "Renew IP Lease",
    "definition": "Requests a new IP address from the DHCP scope. (Use /renew6 for IPv6.)",
    "category": "Network Tools"
  },
  {
    "id": 14,
    "acronym": "ipconfig /flushdns",
    "expansion": "Flush DNS Cache",
    "definition": "Clears the DNS resolver cache on the local machine. Common troubleshooting sequence: /release, then /renew, then /flushdns.",
    "category": "Network Tools"
  },
  {
    "id": 15,
    "acronym": "ping",
    "expansion": "Packet Internet Groper",
    "definition": "Sends packets to a destination to test/verify connectivity. Example: `ping 8.8.8.8`",
    "category": "Network Tools"
  },
  {
    "id": 16,
    "acronym": "pathping",
    "expansion": "Path Ping",
    "definition": "A mixture of the tracert and ping commands.",
    "category": "Network Tools"
  },
  {
    "id": 17,
    "acronym": "tracert",
    "expansion": "Trace Route",
    "definition": "Shows the path a packet takes on a network to arrive at a specified destination. Example: `tracert google.com`",
    "category": "Network Tools"
  },
  {
    "id": 18,
    "acronym": "netstat",
    "expansion": "Network Statistics",
    "definition": "Displays all listening and established connections on the host network. Example: `netstat -ano`",
    "category": "Network Tools"
  },
  {
    "id": 19,
    "acronym": "nslookup",
    "expansion": "Name Server Lookup",
    "definition": "Used to verify DNS addresses; can be used for inline query or interactively. Example: `nslookup openai.com`",
    "category": "Network Tools"
  },
  {
    "id": 20,
    "acronym": "chkdsk",
    "expansion": "Check Disk",
    "definition": "Views information about the hard disk (including creating/viewing reports) and corrects file system problems and disk errors. CHKDSK /F will scan and fix errors.",
    "category": "Disk & System Tools"
  },
  {
    "id": 21,
    "acronym": "diskpart",
    "expansion": "Disk Partition Tool",
    "definition": "A tool for managing disks, partitions, and volumes.",
    "category": "Disk & System Tools"
  },
  {
    "id": 22,
    "acronym": "format",
    "expansion": "Format Disk",
    "definition": "Removes data from disks and prepares them for new use, formatting a partition to a selected file system (FAT16, FAT32, exFAT, NTFS, CDFS, etc.).",
    "category": "Disk & System Tools"
  },
  {
    "id": 23,
    "acronym": "copy",
    "expansion": "Copy",
    "definition": "A simple copy command, used for files. Example: `copy report.txt backup.txt`",
    "category": "Disk & System Tools"
  },
  {
    "id": 24,
    "acronym": "xcopy",
    "expansion": "Extended Copy",
    "definition": "Copies specified files, and if desired, a directory tree, to a specified destination.",
    "category": "Disk & System Tools"
  },
  {
    "id": 25,
    "acronym": "robocopy",
    "expansion": "Robust Copy for Windows",
    "definition": "Copies files and directories, plus file attributes, timestamps, and other small details. Offers more switches than copy or xcopy.",
    "category": "Disk & System Tools"
  },
  {
    "id": 26,
    "acronym": "sfc",
    "expansion": "System File Checker",
    "definition": "Scans and repairs Windows system files. Common command: SFC /SCANNOW scans the entire system for file errors and repairs them.",
    "category": "Disk & System Tools"
  },
  {
    "id": 27,
    "acronym": "bootrec",
    "expansion": "Boot Recovery",
    "definition": "Used to troubleshoot the operating system if startup repair doesn't work. Common command: BOOTREC /FIXBOOT fixes errors like 'BOOTMGR is missing.'",
    "category": "Disk & System Tools"
  },
  {
    "id": 28,
    "acronym": "net user",
    "expansion": "Network User Accounts",
    "definition": "Subcommand used to list all local accounts on the host system.",
    "category": "User & Policy Management"
  },
  {
    "id": 29,
    "acronym": "net use",
    "expansion": "Network Use (Map Drive)",
    "definition": "Used to map drive letters to network shares.",
    "category": "User & Policy Management"
  },
  {
    "id": 30,
    "acronym": "gpupdate",
    "expansion": "Group Policy Update",
    "definition": "Updates local and Active Directory group policy settings. Similar to the GPEDIT command.",
    "category": "User & Policy Management"
  },
  {
    "id": 31,
    "acronym": "gpresult",
    "expansion": "Group Policy Result",
    "definition": "Displays group policy settings.",
    "category": "User & Policy Management"
  },
  {
    "id": 32,
    "acronym": "winver",
    "expansion": "Windows Version",
    "definition": "Displays a GUI dialog box showing the Windows version and edition.",
    "category": "System Utilities"
  },
  {
    "id": 33,
    "acronym": "shutdown",
    "expansion": "Shutdown",
    "definition": "Used for scheduling a complete shutdown or a restart, remotely or locally.",
    "category": "System Utilities"
  },
  {
    "id": 34,
    "acronym": "exit",
    "expansion": "Exit",
    "definition": "Closes Command Prompt.",
    "category": "System Utilities"
  },
  {
    "id": 35,
    "acronym": "eventvwr.msc",
    "expansion": "Event Viewer",
    "definition": "Used to view application error logs, system errors, and security audit records.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 36,
    "acronym": "diskmgmt.msc",
    "expansion": "Disk Management",
    "definition": "Used to view disk information on the physical disk and the formatted file systems it contains.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 37,
    "acronym": "taskschd.msc",
    "expansion": "Task Scheduler",
    "definition": "Allows you to configure automated tasks that will run on a schedule at specified times.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 38,
    "acronym": "devmgmt.msc",
    "expansion": "Device Manager",
    "definition": "Allows you to view the status of devices, view properties, and modify configuration parameters.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 39,
    "acronym": "certmgr.msc",
    "expansion": "Certificate Manager",
    "definition": "Used to manage and view the certificates used by the OS and web browser.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 40,
    "acronym": "lusrmgr.msc",
    "expansion": "Local Users and Groups",
    "definition": "Used to create and delete users and maintain their accounts, including establishing secure passwords.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 41,
    "acronym": "perfmon.msc",
    "expansion": "Performance Monitor",
    "definition": "Displays in real time how the computer uses memory, disk, CPU, and network to help diagnose performance issues.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 42,
    "acronym": "gpedit.msc",
    "expansion": "Group Policy Editor",
    "definition": "Used to edit the local group policy for the OS.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 43,
    "acronym": "msinfo32.exe",
    "expansion": "System Information",
    "definition": "Displays advanced hardware and driver information; useful for viewing computer data, which can be exported to a text document.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 44,
    "acronym": "resmon.exe",
    "expansion": "Resource Monitor",
    "definition": "Shows how resources are being utilized by the CPU, memory, disk, and network.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 45,
    "acronym": "msconfig.exe",
    "expansion": "System Configuration",
    "definition": "Allows you to change how Windows boots and what programs start with Windows.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 46,
    "acronym": "cleanmgr.exe",
    "expansion": "Disk Cleanup",
    "definition": "Frees up disk space while not affecting the integrity of the files.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 47,
    "acronym": "dfrgui.exe",
    "expansion": "Disk Defragment",
    "definition": "Relocates pieces of large files to continuous space on a disk for optimized performance.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 48,
    "acronym": "regedit.exe",
    "expansion": "Registry Editor",
    "definition": "Allows the user to view and change the Windows registry, which contains OS and application settings sometimes needed in advanced troubleshooting.",
    "category": "MMC Snap-Ins & GUI Tools"
  },
  {
    "id": 49,
    "acronym": "tasklist",
    "expansion": "Task List",
    "definition": "Creates a list of applications and services currently running on a system. Also shows the PID (process ID) of each process/service. Example: `tasklist`",
    "category": "Process Management"
  },
  {
    "id": 50,
    "acronym": "taskkill",
    "expansion": "Task Kill",
    "definition": "Used to end a process using its PID. Example: `taskkill /PID 1234 /F`",
    "category": "Process Management"
  },
  {
    "id": 51,
    "acronym": "Get-Help",
    "expansion": "Get Help",
    "definition": "Show help for PowerShell commands. Example: `Get-Help Get-Process`",
    "category": "Windows PowerShell"
  },
  {
    "id": 52,
    "acronym": "Get-Process",
    "expansion": "Get Process",
    "definition": "List running processes. Example: `Get-Process`",
    "category": "Windows PowerShell"
  },
  {
    "id": 53,
    "acronym": "Stop-Process -Id 1234",
    "expansion": "Stop Process",
    "definition": "Stop a process by PID. Example: `Stop-Process -Id 1234`",
    "category": "Windows PowerShell"
  },
  {
    "id": 54,
    "acronym": "Get-Service",
    "expansion": "Get Service",
    "definition": "List services and their status. Example: `Get-Service`",
    "category": "Windows PowerShell"
  },
  {
    "id": 55,
    "acronym": "Restart-Service",
    "expansion": "Restart Service",
    "definition": "Restart a Windows service. Example: `Restart-Service Spooler`",
    "category": "Windows PowerShell"
  },
  {
    "id": 56,
    "acronym": "Test-Connection",
    "expansion": "Test Connection",
    "definition": "Ping a host from PowerShell. Example: `Test-Connection 8.8.8.8`",
    "category": "Windows PowerShell"
  },
  {
    "id": 57,
    "acronym": "Get-NetIPAddress",
    "expansion": "Get Network IP Address",
    "definition": "Show local IP addressing information. Example: `Get-NetIPAddress`",
    "category": "Windows PowerShell"
  },
  {
    "id": 58,
    "acronym": "Get-Content",
    "expansion": "Get Content",
    "definition": "Read text from a file. Example: `Get-Content .\\notes.txt`",
    "category": "Windows PowerShell"
  },
  {
    "id": 59,
    "acronym": "pwd",
    "expansion": "Print Working Directory",
    "definition": "Print current working directory. Example: `pwd`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 60,
    "acronym": "ls -la",
    "expansion": "List (All, Long Format)",
    "definition": "List files, including hidden ones and details. Example: `ls -la`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 61,
    "acronym": "cd /path",
    "expansion": "Change Directory",
    "definition": "Change directories. Example: `cd /var/log`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 62,
    "acronym": "mkdir dir",
    "expansion": "Make Directory",
    "definition": "Create a directory. Example: `mkdir backups`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 63,
    "acronym": "cp src dst",
    "expansion": "Copy",
    "definition": "Copy a file or directory. Example: `cp file.txt backup.txt`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 64,
    "acronym": "mv src dst",
    "expansion": "Move / Rename",
    "definition": "Move or rename a file. Example: `mv old.txt new.txt`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 65,
    "acronym": "rm file",
    "expansion": "Remove",
    "definition": "Delete a file. Use carefully. Example: `rm notes.txt`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 66,
    "acronym": "cat file",
    "expansion": "Concatenate (Print File)",
    "definition": "Print file contents. Example: `cat /etc/hosts`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 67,
    "acronym": "less file",
    "expansion": "Page Through File",
    "definition": "View a file page by page. Example: `less /var/log/syslog`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 68,
    "acronym": "grep text file",
    "expansion": "Global Regular Expression Print",
    "definition": "Search for matching text. Example: `grep error app.log`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 69,
    "acronym": "find /path -name",
    "expansion": "Find Files",
    "definition": "Search for files by name. Example: `find /home -name report.txt`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 70,
    "acronym": "chmod",
    "expansion": "Change Mode (Permissions)",
    "definition": "Change file permissions. Example: `chmod 755 script.sh`",
    "category": "Linux Shell Basics"
  },
  {
    "id": 71,
    "acronym": "ip a",
    "expansion": "IP Addresses",
    "definition": "Show IP addresses and interfaces. Example: `ip a`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 72,
    "acronym": "ss -tulpn",
    "expansion": "Socket Statistics",
    "definition": "Show listening sockets and owning processes. Example: `ss -tulpn`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 73,
    "acronym": "ping",
    "expansion": "Packet Internet Groper",
    "definition": "Test network reachability. Example: `ping 8.8.8.8`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 74,
    "acronym": "traceroute",
    "expansion": "Trace Route",
    "definition": "Trace packet path to a host. Example: `traceroute google.com`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 75,
    "acronym": "dig",
    "expansion": "Domain Information Groper",
    "definition": "Query DNS records. Example: `dig openai.com`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 76,
    "acronym": "nslookup",
    "expansion": "Name Server Lookup",
    "definition": "DNS lookup utility. Example: `nslookup openai.com`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 77,
    "acronym": "curl",
    "expansion": "Client URL",
    "definition": "Fetch data from a URL. Example: `curl https://example.com`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 78,
    "acronym": "wget",
    "expansion": "Web Get",
    "definition": "Download a file from the web. Example: `wget https://example.com/file.zip`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 79,
    "acronym": "ps aux",
    "expansion": "Process Status (All Users)",
    "definition": "List running processes. Example: `ps aux`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 80,
    "acronym": "kill -9 PID",
    "expansion": "Kill Process",
    "definition": "Force-stop a process by PID. Example: `kill -9 1234`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 81,
    "acronym": "top",
    "expansion": "Table of Processes",
    "definition": "Interactive process viewer. Example: `top`",
    "category": "Linux Networking & Process Commands"
  },
  {
    "id": 82,
    "acronym": "sudo",
    "expansion": "Superuser Do",
    "definition": "Run a command with elevated privileges. Example: `sudo systemctl restart ssh`",
    "category": "Linux Networking & Process Commands"
  }
];
