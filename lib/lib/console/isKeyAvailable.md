# $lib/base/console.ql: isKeyAvailable

Function `isKeyAvailable` used to check if any key is available

Signature:

```ql
function isKeyAvailable()
```

Example:

```ql
let printed = "";
while true: {
    if Console.isKeyAvailable(): {
        printed = Console.readkey();
        Console.print("You printed: " + printed);
    }
}
```

Console:

```text
// Case if user print press anything
You printed: [user-input]

// Else will run while ...
```
