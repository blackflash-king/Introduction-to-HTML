var choice = prompt("Welcome to perimeter calculator.\nPlease enter the number corresponding to your choice:\n1. Perimeter of a rectangle\n2. Perimeter of a triangle")

if(choice == "1"){
    var length = prompt("Enter the length")
    var width = prompt("Enter width")
    var result = Number(length) * 2 + Number(width) * 2
    alert("The perimeter is " + result)
}

if(choice == "2"){
    var side1 = prompt("Please enter the length of side1")
    var side2 = prompt("Please enter the length of side2")
    var side3 = prompt("Please enter the length of side3")
    var result = Number(side1) + Number(side2) + Number(side3)
    alert("The perimeter is " + result)
}