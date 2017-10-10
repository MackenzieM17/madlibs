//Initialize Variables
var sentence = [];
var replacements = [];
var index = 0;
filler(sentence, "Next Word:" );
filler(replacements, "Next Position:");


function filler (myArray,myPrompt){
index = -1;
do{
	index++;
	myArray[index] = prompt(myPrompt +index+ ":");
}
while(myArray[index] != "^");
console.log(myArray);
}