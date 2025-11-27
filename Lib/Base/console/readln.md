# $lib/base/console.ql: readln

Function `readln` used to read a line from the console

Signature:

```
function readln(let message)
```

Example:

```
Console.print("Write name: ");
let name = Console.readln();
Console.println("Hello, " + name + "!");
```

Console:

```
Write name: [user-input]
Hello, [user-input]!
```
