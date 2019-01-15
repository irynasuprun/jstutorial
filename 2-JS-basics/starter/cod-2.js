var JohnScore = (89+120+127)/3;
console.log ('John\'s team score ', JohnScore);

var MarksScore = (116+94+126)/3;
console.log ('Marks\'s team score ', MarksScore);

var MarysScore = (97+134+105)/3;
console.log ('Marys\'s team score ', MarysScore);

var winner;

if (JohnScore > MarksScore && JohnScore > MarysScore){
    winner = 'John';
}else if (MarksScore > JohnScore && MarksScore >MarysScore){
    winner = 'Mark';
}else if (MarysScore > MarksScore && MarysScore > JohnScore){
    winner = 'Mary';
}

if (!winner){
    if (JohnScore === MarksScore && JohnScore !== MarysScore){
        winner='John and Mark';
    }else if (JohnScore === MarysScore && JohnScore !== MarksScore){
        winner='John and Mary';
    }else if (MarysScore === MarksScore && MarysScore !== JohnScore){
        winner='Mary and Mark';
    }else if (MarysScore === MarksScore && MarksScore===JohnScore){
        winner='Mary and Mark and John';
    }else{
        winner = 'No winner'
    }

}
console.log('Winner of the games is ', winner)

