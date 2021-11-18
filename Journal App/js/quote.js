var quotes = ["Life is what happens to us while we are making other plans. - Allen Saunders",
"Sometimes the questions are complicated and the answers are simple. - Dr. Seuss",
"Our world isn\'t made of earth, air and water or even molecules and atoms; our world is made of language. - Tom Robbins",
"Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
"Do what you feel in your heart to be right-- For you'll be criticized anyways. You'll be damned if you do, and damned if you don't. - Eleanor Roosevelt",
"Don't waste your time with explanations: people only hear what they want to hear. - Paulo Coelho"]
function newQuote() {
var randomNumber = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}