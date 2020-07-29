// Your code goes below here.

var answer = prompt('How many inches do you think it will rain this week?');
var answerr = Number(answer);

if (answerr < 0 ) { 
      console.log('That is just not possible, my friend');
}
if (answerr === 0 ) {
      console.log('I hope we\'re not in a drought.');
}
if (answerr > 0 && answerr <= 4) {
      console.log('I should really buy a raincoat')
}
if(answerr > 4) {
      console.log('I should really buy a boat')
}