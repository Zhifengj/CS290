function deepEqual(x,y)
{
	var count_x = 0, count_y = 0;
	for (var k in x)
	{
		count_x += 1;
	}
	for (var l in y)
	{
		count_y += 1;
	}

	if (x === y)
		return true;

	else if (typeof x == typeof y) 
	{
		if (count_x != count_y) 
			return false;	

		for (var i in x) 
		{
			if (y.hasOwnProperty(i))
			{
				if (!deepEqual(x[i],y[i]))
					return false;
			} 
			else
				return false;
		}
		return true;	
	} 
	else
		return false;
}



let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(null,null));
// -> true
console.log(deepEqual(obj.here, obj.object));
// -> flase

