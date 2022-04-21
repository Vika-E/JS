// Напишите валидационный скрипт используя функции 

//  1. Скрипт должен на вход принимать строку.
//  2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.
//  3. Минимум 5 символов в строке
//  4. Максимум 64 символа в строке
//  5. В строке должны быть буквы
//  6. Должна быть хотя бы одна буква в верхнем регистре
//  7. Должна быть хотя бы одна цифра
//  8. Должна быть хотя бы одна @
//  9. Строка не должна быть пустой


function validation(check_string){

    if (typeof check_string == "string")

    {   var minString 
        var maxString 
        var shtrudel 
        var letters 
        var upperCase 
        var numbers 
        var notEmpty

        if (check_string.length < 5)
        {console.log("String < 5")}
        else  {minString = true}
        if (check_string.length > 64)
        {console.log("String > 64")}
        else  {maxString = true}  
        if (check_string.includes("@"))
        {shtrudel = true}
        else  {console.log("Add @")} 
        if (/[A-Za-zА-Яа-я]/.test(check_string))
        {letters = true}
        else  {console.log("Add letters")} 
        if (/[A-ZА-Я]/.test(check_string))
        {upperCase = true}
        else  {console.log("Add UpperCase letters")} 
        if (/[0-9]/.test(check_string))
        {numbers = true}
        else  {console.log("Add numbers")} 
        if (!check_string)
        {console.log("Type something")}
        else  {notEmpty = true}  
        if (minString && maxString && shtrudel && letters && upperCase && numbers && notEmpty)
    {console.log("This is a correct string")}
    }
    
    else 
    {console.log("This is not a string")} 
    }  

validation("1ф@Ae")