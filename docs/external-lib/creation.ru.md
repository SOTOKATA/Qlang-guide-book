# Создание библиотеки

Для создания библиотеки следует использовать интерфейс `IQlangLib`.

```c#
public interface IQlangLib
{
    public string Name { get; }
    public string Version { get; }
    public string Author { get; }
    public string Class { get; }
    public string Namespace { get; }

    public List<(string name, Delegate body)> GetFunctions();
}
```

Данный интерфейс имеет основные параметри и список функций.

## Параметры

`Name`

- Параметр для указания названия библиотеки
- Стандартное значение: `empty`

`Author`

- Параметр для указания автора библиотеки
- Стандартное значение: `empty`

`Version`

- Параметр для указания версии библиотеки
- Стандартное значение: `1.0.0`

`Class`

- Параметр для указания названия класса. Используеться при вызове функции.
- Стандартное значение: `empty`

> Это обязательное поле, если оно будет пустым - компилятор выдаст ошибку
> Данное поле должно быть уникальным в `Namespace`

`Namespace`

- Параметр для указания пространства имен библиотеки. Используеться при вызове функции
- Стандартное значение: `empty`

> Это обязательное поле, если оно будет пустым - компилятор выдаст ошибку
> Данное поле должно быть уникальным и не граничить с другими `Namespace`. Это внутринее название библиотеки.

## Функции

Каждая функция в библиотеке - это картеж из имени и делегата.

Пример:

```c#
( "print", (Action<string>)Console.WriteLine )
```

Имя функции являеться уникальным в классе.

Делегат может принимать и возращять значения.

При вызове функции язык автоматически переведет стандартные Qlang типы в C# типы.

Метод перевода типов:

- `Number` -> `double` (или в `float` или в `int` в зависимосте от аргумента в делегате)
- `String` (и остальные типы если нужно) -> `string`
- `Array` -> `List<object?>`

## Пример создания

В данном примере мы разберем создание библиотеки по управлению консолью.

```c#
public class ConsoleLib : IQlangLib
{
    public string Name { get; } = "CSharpConsole";

    public string Version { get; } = "0.0.1";
    
    public string Author { get; } = "SOTOKATA";

    public string Class { get; } = "console";
    
    public string Namespace { get; } = "sotokata";


    public List<(string name, Delegate body)> GetFunctions()
    {
        return [
            ("write", (Action<string?>)Console.Write),
            ("cursor_visible", (Action<bool>)(isVisible => Console.CursorVisible = isVisible)),
            ("clear", (Action)Console.Clear),
            ("read", Console.ReadLine)
        ];
    }
}
```

Наша библиотека может:

- Писать в консоль
- Читать ввод
- Очищять консоль
- Менять видимость курсора

## Компиляция библиотеки в `.dll`

Библиотека написаная на C# должна в итоге скомпилироваться в `.dll` формат.

> Важно: в настройках компиляции нужно выставить также компиляцию всех зависимостей.

Qlang не умеет автоматически "подтягивать" остальные библиотеки!

## Создания итоговой версии

В конце нам нужно взять **все** `.dll` файлы из папки с компилированой библиотекой и добавить в папку с названием нашей библиотеки.

Пример:

```dir
bin/Debug/net9.0/
    ConsoleLib.deps.json
    ConsoleLib.dll
    ConsoleLib.pdb
    ql.deps.json
    ql.dll
    ql.exe
    ql.pdb
    ql.runtimeconfig.json
```

Нам нужно взять только `ConsoleLib.dll` и добавить в созданую папку с названием вашей библиотеки, например это будет `consolelib`.

После этого в Qlang проекте можна добавить эту папку.

Теперь можна переходить к этапу "связи" C# библиотеки и Qlang.
