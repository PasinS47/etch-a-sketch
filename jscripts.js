const container = document.querySelector(".container");
const header = document.querySelector(".header");
header.classList.add("show");
let n = 16;

function clearOld(){
    container.textContent = '';
}

drawNew();


function drawNew(){
    let dim = (60 / n);
    for(let i=0;i < n;i++){
        for(let j=0;j < n;j++){
            let square = document.createElement("div");
        square.classList.add("clean");
        square.style.cssText = `width: ${dim}vh; height: ${dim}vh;border: ${dim/100}vh solid rgba(0, 0, 0, 0.1);`;
        square.addEventListener("mouseenter", function (){
            this.classList.remove("clean");
            this.style.border = "none";
            this.classList.add("painted");
            this.style.transform = `scale(1.2)`
        });
        square.addEventListener("mouseleave", function (){
            this.style.transform = `scale(1)`
        });
            container.appendChild(square);
        }
    }
}

document.querySelector("#changeSize").addEventListener("submit", function(e){
    n = document.querySelector("#quantity").value;
    console.log(n);
    if(n < 1 || n > 100){
        location.reload(true);
    }
    clearOld();
    drawNew();
    
    e.preventDefault();
})