
//Part 1: function hoisting

console.log(myfun(6));

function myfun(x)
{
	var square = x*x;
	return square;	
}

//Part 2: function assigned to a variable before the variable

//console.log(square(12));

var square = function pfun(x) { return x*x };

console.log(square(12));

