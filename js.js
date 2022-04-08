'use strict';

// console.log(document.querySelector(".message").textContent);


// document.querySelector('.message').textContent='🎉 correct number';

// document.querySelector('.number').textContent="30";
// document.querySelector('.score').textContent="10";
// document.querySelector('.guess').value="20";

let number = Math.trunc(Math.random()*20 + 1);
let score = 20;
let highscore = 0;

// console.log(number);





document.querySelector('.check').addEventListener('click', function()
    {
        
        const guess = Number(document.querySelector('.guess').value);
        // console.log( guess);
        // When no number is entered
        if(!guess){
            document.querySelector('.message').textContent='⛔ No Number!';

            // When player wins
        }else if(guess === number){
            document.querySelector('.message').textContent='🎉 Correct Number!';
            document.querySelector('body').style.backgroundColor="#60b347";
            document.querySelector('.number').style.width="30rem";
            document.querySelector('.number').textContent= number;
            
            // const score = Number(document.querySelector('.score').textContent);
            // console.log(score);
            // document.querySelector('.highscore').textContent = score ;

            if (score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = score ;
            }
            // When guees is > then the number
        }else if(guess > number && score > 1){
            document.querySelector('.message').textContent='📈 Too high!';
            score--
            // const score = Number(document.querySelector('.score').textContent);
            // console.log(score);
            document.querySelector('.score').textContent = score - 1 ;
            document.querySelector('.score').textContent = score  ;

            // When the guess is < then the number
        }else if(guess < number && score > 1) {
            document.querySelector('.message').textContent='📉 Too low!';
            // const score = Number(document.querySelector('.score').textContent);
            // console.log(score);
            // document.querySelector('.score').textContent = score - 1 ;
            score--
            document.querySelector('.score').textContent = score ;
        }

        // when you losse the game
        else if(score === 1){
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent = '0' ;
        }
    }
);


document.querySelector('.again').addEventListener('click',function()
    {
        score = 20 ;
        number =  Math.trunc(Math.random()*20 + 1);
        document.querySelector('.message').textContent='Start Guessing......';
        document.querySelector('.score').textContent = score ;
        document.querySelector('.number').textContent= '?';
        document.querySelector('.guess').value= '';
        document.querySelector('body').style.backgroundColor= "#222";
        document.querySelector('.number').style.width= "15rem";

    }
);

