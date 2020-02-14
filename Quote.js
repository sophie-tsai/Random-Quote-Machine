function changeEverything(){
  let currentColor = getRandomColor();
	setBackgroundColor(currentColor, '#new-quote');
	setBackgroundColor(currentColor, '#tweet-quote');
	setBackgroundColor(currentColor, 'body');
	changeQuote();
}

let previousColorIndex;
function getRandomColor(){
  const colors = ["#E6B0AA", "#D7BDE2", "#A9CCE3", "#A2D9CE", "#ABEBC6", "#F9E79F", "#F5CBA7", "#EDBB99"];
  let randomIndex = Math.floor(Math.random() * colors.length);
	
	while(randomIndex === previousColorIndex){
		randomIndex = Math.floor(Math.random() * colors.length);
	}
  
	previousColorIndex = randomIndex;
	return colors[randomIndex];
}

function setBackgroundColor(currentColor, selector){
	let element = document.querySelector(selector);
  element.style.backgroundColor = currentColor;

}



let previousQuoteIndex;
function changeQuote(){
	const quotes = [
			["Never let the fear of striking out keep you from playing the game.", "Babe Ruth"], 
			["Tell me and I forget. Teach me and I remember. Involve me and I learn.","Benjamin Franklin"], 
			["Don't judge each day by the harvest you reap but by the seeds that you plant.","Robert Louis Stevenson"], 
			["If you really look closely, most overnight successes took a long time.", "Steve Jobs"], 
			["Too many of us are not living our dreams because we are living our fears.","Les Brown"],
			["Practice does not make perfect. Only perfect practice makes perfect.", "Vice Lombardi"],
			["You Gotta Start Somewhere!", "Sophie Tsai"]
	];
	let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
	
	while(randomQuoteIndex === previousQuoteIndex){
		randomQuoteIndex = Math.floor(Math.random() * quotes.length);
	}
	previousQuoteIndex = randomQuoteIndex;
	
	let quoteBundle = quotes[randomQuoteIndex];
	let quoteText = quoteBundle[0];
	let authorText = quoteBundle[1];
	
	let newQuoteText = document.querySelector('#text');
	newQuoteText.innerHTML = quoteText;
	
	let newAuthorText = document.querySelector('#author');
	newAuthorText.innerHTML = authorText;
	
	
}
