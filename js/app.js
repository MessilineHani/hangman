import { wL } from "./hangman-game-word-list.js";
let wordList = wL;
let backup = [...wordList];
let gameMode = JSON.parse(localStorage.getItem("gameMode"));
//// accessing the html elements...
const userinput = document.getElementById("input"),
  hint = document.getElementById("hint"),
  alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''),
  keyboard = document.getElementById("keyboard"),
  mistakes = document.getElementById("num"),
  losingInterface = document.getElementById("losing-interface"),
  winnerInterface = document.getElementById("winning-interface"),
  correctWord = document.querySelectorAll(".correct-word"),
  sep = document.querySelector(".sep"),
  nextBtn = document.getElementById("next-word"),
  TryAgainBtn = document.getElementById("try-again"),
  changeWord = document.getElementById("change"),
  help = document.getElementById("help"),
  streak = document.querySelectorAll("[data-streak]"),
  //backgroundMusic = document.getElementById("bgmusic"),
  hangstuff = document.getElementById("hanger"),
  status = document.querySelector(".status"),
  HighScoreEle = document.querySelector("[data-high-score]");
let avh = document.getElementById("avh");
// backgroundMusic.play();
//backgroundMusic.volume = 0.5;
//// this function generates random number that selects a random word
function genrateRandom(){
    let rd = Math.floor(Math.random() *wordList.length);
    return rd;
}
let rdm = genrateRandom(),
    availableHelp = 0,
    streakNumber = 0,
    t,
    HighScore = localStorage.getItem("high-score") != null ? localStorage.getItem("high-score") :0; 
    HighScoreEle.textContent = HighScore;
// keyboard
//// creating the game interface
GameSetUp(rdm);
function GameSetUp(random){
    
    const clickSE = document.createElement("audio");
    document.body.appendChild(clickSE);
    clickSE.src = "../assets/else/click.wav";
    const soundEffet = document.createElement('audio');
    document.body.appendChild(soundEffet);
    hint.textContent = wordList[random].hint;
    userinput.innerHTML = '';
    keyboard.innerHTML = '';
    let chosenLetters = [],
    mistakesNum = 0;
    t = 20;
    hangstuff.src = `../assets/images/hangman${mistakesNum}.png`;
    mistakes.textContent = mistakesNum;
    changeWord.removeAttribute("disabled");
    correctWord.forEach(field =>{
        field.textContent = wordList[rdm].word;
      });
    /// creating the fields...
    for(let i = 0; i < wordList[random].word.length; i++){
        const chosenLetter = document.createElement('div');
        chosenLetter.classList.add("chosen-Letter");
        userinput.appendChild(chosenLetter);
        chosenLetters.push(chosenLetter);
        chosenLetter.style.width = `calc(100% / ${chosenLetters.length})`;
    }
    /// this function checks if the final input is correct
    const isCorrect = function(){            
        if(chosenLetters.every(chl => chl.textContent != '')){
            soundEffet.src ="../assets/else/correct.mp3";
            soundEffet.play();
            chosenLetters.forEach(chl =>{
             chl.style.color = "#34bc40";
             chl.style.textShadow = "0 0 30px rgba(52, 188, 63, 0.8)"});
             streakNumber++;
            if(streakNumber > HighScore){
                HighScore = streakNumber;
                HighScoreEle.textContent = HighScore;
                localStorage.setItem("high-score",HighScore)
            }
            streak.forEach(el => el.textContent = streakNumber)  
            sep.style.display = "block";
            winnerInterface.style.display = "flex";
        }
    }
    const isWrong = function(){

        if(mistakesNum ==6 || t < 0){
            soundEffet.src = "../assets/else/wrong.mp3";
            soundEffet.play();
            sep.style.display = "block";
            losingInterface.style.display = "flex";
        }

    }
    //// creating letters & hanlings user interaction
    alphabet.forEach(ltr => {
        let letter = document.createElement("div");
        letter.innerText = ltr;
        letter.id = ltr;
        letter.classList.add("letter");
        keyboard.appendChild(letter);
        /// handling user interaction 
        letter.addEventListener("click", () => {
        /// the click animtion
          letter.style.transform = "scale(0.8)";
          letter.style.background = "#ffd930";
          setTimeout(() => {
            letter.style.transform = "scale(1)";
            letter.style.background = "#fc6e14  ";}, 30);
        //click sound effect
        clickSE.play();
        /// pushing the clicked letter to it's feild if includes it...
          for(let i = 0; i< chosenLetters.length; i++){
              if(chosenLetters[i].textContent != ''){
                  continue;
              }else{
                  if(wordList[random].word.includes(letter.id)){
                      let indices = [];
                      let idx = wordList[random].word.indexOf(letter.id);
                      while (idx != -1) {
                          indices.push(idx);
                          idx = wordList[random].word.indexOf(letter.id, idx + 1);
                      }
                      indices.forEach(index => {
                          chosenLetters[index].textContent = letter.id;
                          chosenLetters[index].style.width = 'fit-content';
                          chosenLetters[index].style.height = 'fit-content';
                          chosenLetters[index].style.background = 'unset';
                          setTimeout(()=>{
                            letter.style.background ="#fce892";
                            letter.style.pointerEvents = "none";
                            letter.style.transform = "transform(scale(0.95))";
                          },31);
                      });
                      isCorrect();
                      break;
                  }else{
                    window.scrollTo({
                        top : 0,
                        left :0,
                        behavior : "instant"
            
                    })
                    soundEffet.src ="../assets/else/damage.mp3";
                    soundEffet.play();
                    mistakesNum++;
                    hangstuff.src = `../assets/images/hangman${mistakesNum}.png`;
                    mistakes.textContent = mistakesNum;
                    if(mistakesNum >= 3){
                        changeWord.setAttribute("disabled","");
                    }
                    isWrong()
                    break;
                  }
              }
          }
        });
      });   
          // handling the streak & available help chances   
          const helpUser = function(){
            let empty = chosenLetters.reduce((empty,filled)=>{return empty.innerText ==''? empty:filled})
                empty.innerText = wordList[random].word[chosenLetters.indexOf(empty)];
                empty.style.width = "fit-content";
                empty.style.height = "fit-content";
                empty.style.background = "unset";
                avh.innerText  = availableHelp;
                if(availableHelp == 0 ){
                    help.setAttribute("disabled", '');
                }
                isCorrect()
          }
          if(streakNumber / 10 == Math.ceil(streakNumber /10) && streakNumber > 0){
            availableHelp++
            avh.innerText  = availableHelp;
          }
          if(availableHelp > 0) {
                help.removeAttribute("disabled");
                help.addEventListener("click", helpUser,availableHelp--)
          }
          /// speed run mode variations
          if(gameMode == "speed-run"){
              let timer = document.createElement("div");
              timer.classList.add("statu");
              timer.innerHTML =`<i class="fa-solid fa-stopwatch" style="color: #fc6e14;"></i> ${t}`;
              if(Array.from(status.children).length < 3){
                  status.appendChild(timer)
              }
              const stopWatch = function(){
                      timer.innerHTML = `<i class="fa-solid fa-stopwatch" style="color: #fc6e14;"></i> ${t}`;
                      t--
              }
              const myInteval = setInterval(()=>{
                stopWatch();
                if(t  < 0){
                    clearInterval(myInteval);
                    isWrong()
                  }
              },1000)

          }
}
///// win & lose & change handling
// change the word
changeWord.addEventListener("click", function(){
    rdm = genrateRandom();
    GameSetUp(rdm);
});
// win condition handling
nextBtn.addEventListener("click",()=>{
    winnerInterface.style.display = "none";
    sep.style.display = "none";
    wordList.splice(wordList.indexOf(wordList[rdm]),1);
    if(wordList.length != 0){
        rdm = genrateRandom();
        GameSetUp(rdm);
    }
    else{
        sep.style.display = "block";
        let end = document.createElement('div');
        end.classList.add("end");
        end.innerHTML = ` 
        <h2>you won!</h2>
        <p>You finished the game.</p>
        <img src="../assets/images/tate-andrew.gif" alt="happy stickman" style="width:60%">
        <button type="button" id="p-again">Play again</button>
        `;
        document.body.appendChild(end);
        end.style.display = "flex";
        end.style.animation = "unset";
        const PAgainBtn = document.getElementById("p-again");
        PAgainBtn.onclick = function(){
            wordList = [...backup];
            rdm = genrateRandom();
            GameSetUp(rdm);
            end.style.display = "none";
            sep.style.display  = "none";
        }
    }
})
// lose condition handling
TryAgainBtn.addEventListener("click",()=>{
    streakNumber = 0;
    streak.forEach(el =>el.textContent  = streakNumber)
    wordList = [...backup];
    losingInterface.style.display = "none";
    sep.style.display = "none";
    rdm  = genrateRandom()
    GameSetUp(rdm);
})
