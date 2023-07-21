let score = JSON.parse(localStorage.getItem
  ('score')) || {
          //shortcut dof the code below
            wins : 0,
            losses : 0,
            ties : 0
          };
          
  
          updateScoreElement();
       
        /*if (!score === null) {
           Both gives us the same result
          score = {
            wins : 0,
            losses : 0,
            ties : 0
          };
        }*/
  
      function playGame(playerChioce) {
             //const randomNumber = Math.random();
             let computerMove= pickComputerMoves();
              //console.log(pickComputerMoves());
  
            let result = '';
  
        if (playerChioce === 'scissors' ) {
          if (computerMove === 'rock') {
              result = 'You lose.';
            
            } else if (computerMove === 'paper') {
            result = 'You win.';
  
            } else if (computerMove === 'scissors') {
            result = 'Tie.';
            }
  
          }  else if (playerChioce === 'paper') {
              //let computerMove = pickComputerMoves();
     //console.log(pickComputerMoves());
      //let result = '';
  
    if (computerMove === 'rock') {
     result = 'You win';
     
    } else if (computerMove === 'paper') {
     result = 'Tie.';
  
    } else if (computerMove === 'scissors') {
     result = 'You lose.';
    }
            } else if (playerChioce === 'rock'){
          //let computerMove = pickComputerMoves();
         //console.log(pickComputerMoves())
           //let result = '';
  
         if (computerMove === 'rock') {
          result = 'Tie';
          
         } else if (computerMove === 'paper') {
          result = 'You lose.';
         } else if (computerMove === 'scissors') {
          result = 'You win.';
         }
        }
        
        if (result === 'You win.'){
          score.wins += 1;
        } else if (result === 'You lose.'){
          score.losses += 1;
        } else if (result === 'Tie.'){
          score.ties += 1;
        }
           localStorage.setItem('score', JSON.stringify(score));
  
           updateScoreElement();
  
           document.querySelector('.js-result').innerHTML= result;
  
           document.querySelector('.js-moves').innerHTML=`You
            <img src="images/${playerChioce}-emoji.png" alt="" class="move-icons">
            <img src="images/${computerMove}-emoji.png" alt="" class="move-icons">
            Computer`;
  
      }
  
      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }
      
          function pickComputerMoves() {
            const randomNumber = Math.random();
            let computerMove = '';
      if (randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2/3) {
        computerMove= 'paper';
      } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors';
  }
  
       return computerMove;
      }