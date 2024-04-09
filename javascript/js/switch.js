//rock paper scissors game

let player='rock';
let computer='scissors';

switch(player){
    case computer:
        console.log('TIE!');
        break;
    case 'rock':
        if (computer==='scissors'){
            console.log('player wins!');
        }
        else{
            console.log('computer wins!');
        }
        break;
    default:
            console.log('NO TIE !')
    
}