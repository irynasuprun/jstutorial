/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying;
var prevSix; 


init();


document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
    //random number
    var dice = Math.floor(Math.random()*6)+1;
    //display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src = 'dice-'+dice+'.png';
    //if user rolled two 6 in the row make his total score 0
    if (dice === 6 && prevSix ===true){
        scores[activePlayer]=0;
        document.querySelector('#score-' +  activePlayer).textContent = scores[activePlayer];
        document.querySelector('#current-' + activePlayer).textContent = 0 ;
        prevSix = false;
        nextPlayer();
    }
    if (dice === 6 && prevSix ===false){
        prevSix = true;
    }
    if (dice !== 6 && prevSix ===true){
        prevSix = false;
    }
    //Update the round score if the rollen button is not a 1
    if ( dice !== 1 ){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore ;     

    }else{
        //Next player
        nextPlayer();
    }
    }
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
    // Add current score to Global score
    scores[activePlayer]+=roundScore;
    //Update the UI
    document.querySelector('#score-' +  activePlayer).textContent = scores[activePlayer];
    //Check if player won the game
    var topScore = document.querySelector('.input-topscore').value;  
    if (!topScore){
        topScore=100;
    }
        
    if (scores[activePlayer] >= topScore){

     document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
     document.querySelector('.dice').style.display='none';
     document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
     document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
     gamePlaying=false;
        
    }else{
    //next player
     nextPlayer();    
    }
    }
    
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){
        activePlayer ===  0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        prevSix = false;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
        
        
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
        
        document.querySelector('.dice').style.display='none';
}

function init(){
    scores = [0, 0];
    roundScore =0;
    activePlayer =0;
    gamePlaying=true;
    prevSix = false;


    document.querySelector('.dice').style.display='none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent='Player-1';
    document.getElementById('name-1').textContent='Player-2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    // = document.querySelector('input[name="topScore"]').itemValue

    
    
    
}
        
//A player looses his entire score if player rolls 6 twice
//imput field when users can set their winning score
//there two dices and player looses his score when one of them is 1
    
