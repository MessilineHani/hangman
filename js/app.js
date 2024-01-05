let wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    },
];
let backup = [...wordList];
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
  strike = document.getElementById("strike"),
  backgroundMusic = document.getElementById("bgmusic"),
  hangstuff = document.getElementById("hanger");
let avh = document.getElementById("avh");
// backgroundMusic.play();
backgroundMusic.volume = 0.5;

//// this function generates random number that selects a random word
function genrateRandom(){
    let rd = Math.floor(Math.random() *wordList.length);
    return rd;
}
let rdm = genrateRandom(),
    availableHelp = 0,
    strikeNumber = 0,
    score = [];
// keyboard
//// creating the game interface
GameSetUp(rdm);
function GameSetUp(random){
    let clickSE = document.createElement("audio");
    document.body.appendChild(clickSE);
    clickSE.src = "../assets/else/click.wav";
    let soundEffet = document.createElement('audio');
    document.body.appendChild(soundEffet);
    hint.textContent = wordList[random].hint;
    userinput.innerHTML = '';
    keyboard.innerHTML = '';
    let chosenLetters = [],
    mistakesNum = 0;
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
    function isCorrect(){            
        if(chosenLetters.every(chl => chl.textContent != '')){
            soundEffet.src ="../assets/else/correct.mp3";
            soundEffet.play();
            chosenLetters.forEach(chl =>{
             chl.style.color = "#34bc40";
             chl.style.textShadow = "0 0 30px rgba(52, 188, 63, 0.8)"});
             strikeNumber++;
             strike.textContent = strikeNumber;
             sep.style.display = "block";
             winnerInterface.style.display = "flex";
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
                    soundEffet.src ="../assets/else/damage.mp3";
                    soundEffet.play();
                    hangstuff.src = `../assets/images/hangman${mistakesNum +1}.png`;
                    mistakesNum++;
                    mistakes.textContent = mistakesNum;
                    if(mistakesNum ==6){
                        soundEffet.src = "../assets/else/wrong.mp3";
                        soundEffet.play();
                        sep.style.display = "block";
                        losingInterface.style.display = "flex";
                    }else if(mistakesNum >= 3){
                        changeWord.setAttribute("disabled","");
                    }
                    break;
                  }
              }
          }
        });
      });
    //// handling the strike & available help chances
    // if(strikeNumber /10 === Math.ceil(strikeNumber/10) && strikeNumber > 0){
    //     availableHelp++;
    //     avh.textContent = availableHelp;
    //     if(availableHelp > 0){
    //         help.removeAttribute("disabled");
    //         help.addEventListener("click",function(){
    //             function gen(){return Math.floor(Math.random() * chosenLetters.length);}
    //             let randomltr =  gen();
    //             if(chosenLetters[randomltr].textContent != ''){
    //                 randomltr = gen();
    //                 helpUser(randomltr);
    //                 isCorrect();
    //             }else{
    //                 helpUser(randomltr);
    //                 isCorrect();
    //             }});
    //             function helpUser(rand){
    //                 chosenLetters[rand].innerText = wordList[random].word[rand];
    //                 chosenLetters[rand].style.width = 'fit-content';
    //                 chosenLetters[rand].style.height = 'fit-content';
    //                 chosenLetters[rand].style.background = 'unset';
    //                 availableHelp-= 1;
    //                 avh.textContent = availableHelp;
    //                 if(availableHelp ===0){avh.setAttribute("disabled", '')}
    //                 return;
    //             }
    //     }
    // }     

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
    strikeNumber = 1;
    wordList = [...backup];
    losingInterface.style.display = "none";
    sep.style.display = "none";
    GameSetUp(rdm);
})