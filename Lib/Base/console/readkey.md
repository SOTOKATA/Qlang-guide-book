# $lib/base/console.ql: readkey

Function `readkey` used to read a char from the console

Signature:

```ql
function readkey(let intercept)
```

Example:

```ql
Console.print("Write key: ");
let key = Console.readkey();
Console.println("You printed: " + key);
```

Console:

```txt
Write key: [user-input]
You printed: [user-input]
```
