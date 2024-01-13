const optionsEle = document.querySelectorAll("[data-option]");
let modes = `
<div class="container">
<h1>How do you want to play</h1>
<ul>
    <li><a href="#" data-mode id="classic">Classic mode</a></li>
    <li><a href="#" data-mode id="speed-run">Speed run</a></li>
    <li><a href="#" data-mode>else</a></li>
</ul>
</div>
`
localStorage.removeItem("gameMode")
let gameMode;
const preGame = (i)=>{
    switch(i){
        case "play": 
            document.body.innerHTML = modes;
            const modesEl = document.querySelectorAll("[data-mode]");
            modesEl[1].classList.add("n")
            modesEl.forEach(m =>{
                m.addEventListener("click", ()=> {
                    gameMode = m.id;     
                    localStorage.setItem("gameMode", JSON.stringify(gameMode))               
                    window.location.href = "./html/index.html";
                })
            })
        break;
    }
}
optionsEle.forEach(e =>{
    e.addEventListener("click", () => preGame(e.id))
})
