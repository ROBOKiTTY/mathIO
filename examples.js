//Math.IO Examples
//By @_C1D
var m = require('./math');
console.log("==Pythagoras==\n");
//This will get the hyp of a triangle - Where a = 1 and b = 2. The right answer is: 2.2360797749979
console.log("The hypotenuse of a Triangle where a = 1 and b = 2 is:\n" + m.gethypotenuse(1, 2));
//This will get the side of a triangle - Where a = 5 (The hyp of the triangle) and b = 2. The right answer is: 4.5825.......
console.log("The side of a Triangle where a = 5 (The hyp of the triangle) and b = 2 is:\n" + m.getx(5, 2));
console.log("\n\n==Tessellation==\n");
//This will get tell you if the shape will tessellate
console.log("Will a 4 sided shape tessellate:");
if(m.shape_tessellate(4) == true){
    console.log("Yes");
}else{
    console.log("No");
}
//This will check if two triangles are congruent
console.log("Is a SSS Triangle with 1cm,2cm,3cm congruent with a SSS Triangle with 3cm,2cm,1cm.");
if(m.congruent({a:1, b:2, c:3, type:"SSS"},{a:3, b:2, c:1, type:"SSS"} == true){
	console.log("Yes!");
}else{
	console.log("No!");
}
