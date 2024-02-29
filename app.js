// Write a function called countdown that accepts a number as a parameter and 
// every 1000 milliseconds decrements the value and console.logs it. Once the 
// value is 0 it should log “DONE!” and stop.

function countdown(num) {
    let time = setInterval(function() {
        num--;
        if (num <= 0) {
            clearInterval(time);
            console.log('DONE!');
        } else {
            console.log(num);
        }
    }, 1000)
}



// Write a function called randomGame that selects a random number between 0 and
//  1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. 
// If the number is greater than .75, stop the timer and console.log the number of tries it took 
// before we found a number greater than .75.

function randomGame() {
    
    let count = 0;
    let num;
    
    let game = setInterval(function() {
        num = Math.random();
        count++

        if (num > .75) {
            clearInterval(game);
            console.log('Total count to get at least .75 ->', count);
        } 
    }, 1000)
}