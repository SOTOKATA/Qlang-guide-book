# Блоки

> Перед продчениям данной страницы рекумендуеться прочитать про [тела](body.md).

Блоки являються телами с конкретной задачей.
Блоки могут быть использованы только в [функциях](function.md).

## While

Блок `while` принимает `bool` выражение, и пока оно верно, выполняет код в теле:

```ql
while condition: {
    // Body.   
}
```

Пример блока, который будет принимать текст с консоли пока он не равен "0":

```ql
let input = "";

while input != "0": {
    Console.print("Write input: ");
    input = Console.readln();

    Console.println("You printed: '" + input + "'.");
}

Console.println("\nWhile block is finished.");
```

Если перед проверкой код должен сработать хотябы один раз, следует использовать `do_while`:

```ql
do_while condition: {
    // Body.
}
```

Пример:

```ql
do_while input != "0": {
    Console.print("Write input: ");
    let input = Console.readln();

    Console.println("You printed: '" + input + "'.");
}

Console.println("\nDo-While block is finished.");
```

По-скольку перед проверкой `bool` выражения код будет выполнен хотябы раз, то переменная `input` будет определенна и код не выдаст ошибку.

## For

Блок, который принимает переменную, `bool` условие и изменение переменной.
Аналогичен C# for:

```ql
for let i = 0; i < 10; i = i + 1: {
    Console.println("Index is: " + str(i));
}
```

Код десять раз напишет "Index is: [тут числа от 0 до 9]"

> ВАЖНО: Блок обязан содержать все основные параметры, нельзя написать `for` **без параметров**!

## If, Else

Блоки `if`, `if else`, `else`, полностью аналогичны C-подобным:

```ql
if condition1: {
    // If condition1 is true
}
else if condition2: {
    // If condition2 is true
}
else: {
    // If condition1 and condition2 is false
}
```

## Switch

Также язык потдерживает C-подобный switch блок:

```ql
switch object: {
    case value1: {

    }
    case value2: {

    }

    default: {
        
    }
}
```
