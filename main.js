/*let nu = [ " nikhil" , "Aryan " , "Kishor" , "Navale"];

nu.forEach((n) => {
    console.log(n);
});*/ // for each loop

/*let numbers =  [1 ,2 ,3 ,4 ,5];
for(let number  of numbers){
    console.log(number);
}*/

let choices = document.querySelectorAll(".choice");

/*choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        let id = choice.getAttribute("id");
        console.log("choice was clicked" , id);
        
    }  );
})*/
let end = document.querySelector(".end");
let youScore = document.querySelector("#you");
let compScore = document.querySelector("#comp");
let you = 0 ;
let comp = 0 ;

showWinner = (userwin ,id , compChoice) => {
    if(userwin){
        you++;
        youScore.innerText = you ;
        end.innerText = 'You win!Your ' + id+' beats ' +compChoice ;
        end.style.backgroundColor = "green";
        console.log("you win!");
        }
    else{
        comp++;
        compScore.innerText = comp;
        end.innerText = 'You loose!Your ' +compChoice+' beats ' +id ;
        end.style.backgroundColor = "red";
        console.log("you win!");
    }
}

let palygame = (id) => {
    console.log("userchoice = " , id);
    let choice = [ "rock" ,"paper" ,"scissor"];
    let compResult = choice[Math.floor(Math.random()*3)];
    let compChoice = compResult;
    console.log("compChoice =",compChoice);
    if(compChoice === id){
        console.log("game was draw!");

        end.innerText = "Game was Draw";
        end.style.backgroundColor = "white"; 
    }   
    else{
        let userwin = true ;
        if(id === "rock"){
            //paper ,scissors
            userwin = compChoice === "paper" ? false : true ;
        }else if(id === "scissor"){
            //rock , paper
            userwin = compChoice === "paper" ? true : false ;
        }
        else if(id === "paper") {
            //rock,scissors
            userwin = compChoice === "scissor" ? false : true ;
        }
        showWinner(userwin ,id ,compChoice);
    }
    
}

for(let choice of choices){
    choice.addEventListener("click" , () =>{
        let id = choice.getAttribute("id");
        palygame(id) ;
    })
}

