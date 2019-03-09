# Trivia-Game


Description: 
I used mostly jQuery to set up a hip hop trivia game.  Using timers, the game will cycle through 10 questions and notify the user after each question whether their answer was correct or not. I added a small amount of custom css to get some fonts and color into the game.  

Pain Points: 
Timer logic was a little tricky at first and I had an issue with scope on the questionTimer function.  With a little help, I noticed that the setInterval( ) function was messing up the scope of a variable contained within.  I used a => function to fix this.  

If I had more time...
I attempted to download a jQuery package to use something called a simplePopup instead of alerts.  I got the package downloaded but didn't quite get it to cooperate.  I'll circle back to this and update the README if I can figure things out. 
Add an API call to pull questions from an online source so the game could be played more than once and the questions wouldn't repeat. 
Add some pictures to each question to give the user a more entertaining experience.

Wins: 
Growing more and more comfortable with jQuery.  I really liked how things turned out with my on click events and utilization of functions.  
