/*
I wrote this script when I was backing up a hard drive prior to an OS install
I originally tried to use the backup software from Western Digital, but I did not trust its results.
So I decided to use robocopy to do the backup and log the results.

This is a set of instructions for how to duplicate what I did.

WARNING
These instructions are written for my benefit only.
Don't use these if you do not understand what you're doing.
You are responsible for adapting these instructions for you own use.

1. Copy this text into sublime text. Step 5 gives a keystroke sequence which is written specifically for sublime text.

2. Open cmd and run this command
dir d:\ /AD /B > d:\dirs.txt
 
/AD == only return a list of directories (exclude files)
/B  == only print out the directory names, no one info such as size

3. Open dirs.txt in a new-tab of sublime text
4. Cull items that you do not want to backup such as $RECYCLE.BIN
5. Type the following keystroke sequence. 
(note: a carrot preceding a letter means "hold CTRL and press the letter", ex: ^A == Ctrl+A)

^A   = select all
^L   = multi cursor
"
[END]
,
[ESC]
^A   = select all
^C   = copy selection to clipboard

6.1 Return to this sublime tab, then proceed to 6.2 to paste clipboard contents from dirs.txt into the JS code below

*/

var dirs = [
6.2 , highlight //this line of text [^L] and paste [^V] from dirs.txt
]; // 6.3 escape any double-quotes in you directory name, alternative use a single-quote character during the step 5

var cmd = dirs.map((dir) => `robocopy "d:\\${dir}" "e:\\d-backup\\${dir}" /MIR /unilog+:c:\\robocopy-d-to-e.txt`)

// copy function tells Chrome debugger to copy evalation results to Windows clipboard
copy(cmd.join('\n'))

/*
6. Run the above js code in Chrome debugger
7. Paste into a .bat file and run

TO VALIDATE BACKUP
I used Linqpad to write a separate script for validation. 
It traversed each folder  from source and destination and confirmed matching file and byte counts
It did not perform a checksum validation.

REFERENCES:
https://adamtheautomator.com/robocopy-the-ultimate/

*/
