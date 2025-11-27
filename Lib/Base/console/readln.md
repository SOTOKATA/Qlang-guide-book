# $lib/base/console.ql: readln

Function `readln` used to read a line from the console

Signature:

```ql
function readln(let message)
```

Example:

```ql
Console.print("Write name: ");
let name = Console.readln();
Console.println("Hello, " + name + "!");
```

Console:

```text
Write name: [user-input]
Hello, [user-input]!
```
