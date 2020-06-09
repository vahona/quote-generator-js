/* List of part quote */
const quote1 = ["An ideas is salvation","by imagination","when I", "very sad", "develloping"];
const quote2 = ["working", "on a problem", "I never think", "dissapointed", "tricted"];
const quote3 = ["An ideas is salvation","by imagination","when I", "very well", "prepare food"];
//

const generateQuote = () => {
	let randomIndex1 = Math.floor(Math.random() * quote1.length);
	let randomIndex2 = Math.floor(Math.random() * quote2.length);
	let randomIndex3 = Math.floor(Math.random() * quote3.length);
	let string1 = quote1[randomIndex1];
	let string2 = quote2[randomIndex2];
	let string3 = quote3[randomIndex3];
	let quote = `${string1} ${string2} ${string3}`;
	return quote;
};
//1. use prompt to ask the user how many times we want to generate a random quote
const numberOfQuotes = prompt('How many random quotes do you want to generate? (1 to 5)');
//2. check if the prompt give us something between 1 and 5
if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
	//3. we're going to use a loop somewhere, and it's going to last the number of times that the user entered in the prompt!
	for (let i = 0; i < numberOfQuotes; i++) {
		//4. refactor our code into a function, and put the function call inside the loop
		//4.1 generate random numbers
		//4.2 show the generated quotes
		let quote = generateQuote();
		console.log(quote);
	}
} else {
  console.error('We need a number between 1 and 5');
  
  function numberPossible(){
    var choose = Number(prompt("Type the number 1 for 1 generator  and 2 for 2 generator"));
    var canBe = Number(prompt("Enter number of quote you want to generate"))

    for(i = 0; i < canBe; i++){
      generateQuote(choose)
    }
  }
}

  








    




