var brain=require("brain");
var net=new brain.NeuralNetwork()

net.train([
	{input: [0,0], output: [0]},
	{input: [0,1], output: [1]},
	{input: [1,0], output: [1]},
	{input: [1,1], output: [0]}
]);

var output00= net.run([0,0]);
console.log("para 0,0: "+output00);

var output01= net.run([0,1]);
console.log("para 0,1: "+output01);

var output10= net.run([1,0]);
console.log("para 1,0: "+output10);

var output11= net.run([1,1]);
console.log("para 1,1: "+output11);