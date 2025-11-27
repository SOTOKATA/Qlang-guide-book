# $lib/base/throw.ql: parseException

Function `parseException` used to throw parse exception
It's break all program

Signature:

```ql
function parseException(let message)
```

Example:

```ql
Throw.parseException("Exception example")
```

```text
QlParseException: Exception example
at:
    main(), ln: 1
```
