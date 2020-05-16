
//Math floor
console.log(Math.floor(1754.7689345))

console.log(Math.floor(634.7645))

console.log(Math.floor(11.75))

console.log(Math.floor(0.1234))

//Math.round()
console.log(Math.round(1754.7689345))

console.log(Math.round(2.945))

console.log(Math.round(18.4562))

console.log(Math.round(22.8))

//Math.ceil()
console.log(Math.ceil(1234.4567))

console.log(Math.ceil(85.4567))

console.log(Math.ceil(3245.835))

console.log(Math.ceil(8.5667))

//Math.random
console.log(Math.random()*1000) //Random number between 1 and 1000

console.log(Math.round(Math.random() * 1000)); //Random number between 1 and 1000, rounded to a whole number

console.log("daniel".charAt(2)) //.charAt(index)
console.log("ewers".substring(1,4)) //.substring(startIndex, endIndex)
console.log("Monday".substring(1,4)) //is returning all chars values from the specified 
//start pos and end

var a = 'aaa'
var b = 'ab'

console.log(a.length < b.length)
console.log(a < b)

function findInString(x , y){
    return x.indexOf(y) !== -1
}
console.log(findInString("Daniel", "d"))





const str = "Today is the day that I go outside......sike"
var count = 0;
var find = str.indexOf('a')

while (find !== -1){
    count++
    find = str.indexOf('a', find + 1)
}
console.log(count)



console.log("SDV NMIT".startsWith("SDV"))
console.log("SDV NMIT".endsWith("NMIT"))

var str1 = "Alex, Benny, Chris, Daniel"
console.log(str1.split(","))
console.log(str1.split("", 4))

console.log(str1.replace("Alex", "Adam"))




var Obj = {}
    var arr = [1, 2, 3, 4]

    Obj.array = arr;
    console.log(Obj)

    Obj.title = "SDV"
    console.log(Obj)


    //prototype inheritance
    function exampleClass(){
        this.firstName = "Daniel"
        this.lastName = function(){
            console.log(this.firstName)
        }
        var test = new exampleClass()

        test.sayMyName()//constructor
    }

    var arrayOne = [1, 2, 3, 4]

    arrayOne.push(5, 6, 7, 8, 9)
    console.log(arrayOne)

    console.log(arrayOne.pop())
    console.log(arrayOne)
    console.log(arrayOne.slice(5,8))

    console.log(arrayOne.slice(0,4))

    for (var i = 0; i < arrayOne.length; i++){

    }

    test = "Daniel"
    console.log(test)

    var anything = test + " " + "Ewers"

    console.log(anything)

function test(){
    var first = "first"
    last = 'last'
    console.log(last)

    var last
}

    