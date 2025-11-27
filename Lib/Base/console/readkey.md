# $lib/base/console.ql: readkey

Function `readkey` used to read a char from the console

Signature:

```
function readkey(let intercept)
```

Example:

```
Console.print("Write key: ");
let key = Console.readkey();
Console.println("You printed: " + key);
```

Console:

```
Write key: [user-input]
You printed: [user-input]
```
