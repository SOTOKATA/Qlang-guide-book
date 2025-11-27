# $lib/base/console.ql: isKeyAvailable

Function `isKeyAvailable` used to check if any key is available

Signature:

```
function isKeyAvailable()
```

Example:

```
let printed = "";
while true: {
    if Console.isKeyAvailable(): {
        printed = Console.readkey();
        Console.print("You printed: " + printed);
    }
}
```

Console:

```
(case if user print press anything)
You printed: [user-input]
(else will run while)
```
