const audioTurn = new Audio('ting.mp3');
const gameOver = new Audio('gameover.mp3')
const bgmusic = new Audio('music.mp3')
let  isGameOver = false;
let turn = "X";
// bgmusic.play();
let changeTurn = () =>{
    return turn === "X" ? "O" : "X";
   
}

let checkWin = () =>{
    let  boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0,1,2,2,4,0],
        [3,4,5,2,12,0],
        [6,7,8,2,20,0],
        [0,3,6,-6,12,90],
        [1,4,7,2,12,90],
        [2,5,8,10,12,90],
        [0,4,8,2,12,45],
        [2,4,6,2,12,-45],
    ]
    
    wins.forEach(e=>{
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[1]].innerText === boxText[e[2]].innerText) && boxText[e[0]].innerText !== "") {
            isGameOver = true;
            gameOver.play();
            document.getElementsByClassName('info')[0].innerText = boxText[e[0]].innerText + " Won";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;

        }

    
    })
}


//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let  boxText = element.querySelector('.boxText');
    
    element.addEventListener('click',()=>{
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            if(turn==="X"){
                boxText.style.color="red";
                
            }
            else{
                boxText.style.color="green";
              

            }
            
            turn = changeTurn();
            
            audioTurn.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = "Turn for " +turn;
           
            }


                
        }
    })
})

//Reset button logic
reset.addEventListener('click',()=>{
    let  boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(elem=>{
        elem.innerText="";
    })
    turn="X";
    isGameOver=false;
    document.querySelector('.line').style.width = "0";
    document.getElementsByClassName('info')[0].innerText = "Turn for " +turn;
})