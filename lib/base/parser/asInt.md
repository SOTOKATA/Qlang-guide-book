# $lib/base/parser.ql: asInt

***! Warning !***
Is *internal* function! Don't use in default language
This function is needed for communication between C# and Qlang and is used by library developers.

Function `asInt` used to parse `object` to Int32

Signature:

```ql
function asInt(let object)
```

Example (will return Int32 type):

```ql
let var = 55;
Parser.asInt(var);
```
