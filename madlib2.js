//Initialize Variables
var sentence = []; //telling the program the variable
var replacements = []; //telling the program the variable
var index = 0; //telling the program the variable
filler(sentence, "Next Word:" ); 
filler(replacements, "Next Position:"); //what the program is replacing

replace(sentence,replacements,"Part of Speech for word in sentence");
alert("Switch Positions");
function filler (myArray,myPrompt){
	index = -1;
	do{
		index++;
		myArray[index] = prompt(myPrompt +"["+index+"]=");
	}
	while(myArray[index] != "^");
	myArray.pop();
	console.log(myArray);
}

function replace (mySArray, myRArray, myPrompt){
	for (index = 0; index < myRArray.length;index++){
	mySArray[myRArray[index]] = prompt(myPrompt+"["+[myRArray[index]]+"] =");
	}
	console.log(mySArray);
}