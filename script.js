let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#rsb");
let newg=document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true;

let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    enableBoxes();
    turnO = true;
    msgContainer.classList.add("hide");
    count=0;
}

reset.addEventListener("click", resetGame);
newg.addEventListener("click",resetGame);
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let result=checkWin();

        if(count==9 && !result){
            gamedraw();
        }
    });
});


const enableBoxes = () => {
    for (let box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
};
const disableBoxes = () => {
    for (let box of boxes) {
      box.disabled = true;
    }
  };  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const checkWin = () => {
    for(let pattern of winPatterns){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;

        if(p1!="" && p1===p2 && p2===p3){
            console.log(`${p1} wins`);
            showWinner(p1);
            return true;
        }
    }
    return false;
}
const gamedraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
