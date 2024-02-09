// !1
let i = 0;

const messageInterval = setInterval(() => {
    alert("Hello world");
  i += 1;
  if (i === 4) {
    clearInterval(messageInterval);
  }
}, 0);

// !2
const boxRef = document.querySelector(".box");
let marginLeft = 0;
let marginRight = 0;

let width = 0;
let height = 0;

setInterval(() => {
    width += 10;
    height += 10;
    boxRef.style.width = `${width}px`;
    boxRef.style.height = `${height}px`;
}, 1000);

// !3
const gameListRef = document.querySelector(".game__list");
const startGameBtnRef = document.querySelector("[data-button=startGame]");
const stopGameRef = document.querySelector("[data-button=stopGame]");
const gameCounterRef = document.querySelector("[data-counter=game]");
let gameCounter = 0;

function gameListClick(e) {
  if (e.target.nodeName === "LI") {
    gameCounter++;
    gameCounterRef.textContent = gameCounter;
  } else {
    alert(
      `Game over. Start the game from the beginning. In this game you scored ${gameCounter} points`
    );
    gameCounter = 0;
  }
}

startGameBtnRef.addEventListener("click", (evt) => {
  gameCounter = 0;

  gameCounterRef.textContent = gameCounter;

  gameListRef.addEventListener("click", gameListClick);

  setTimeout(() => {
    gameListRef.removeEventListener("click", gameListClick);
    alert(
      `Game over. Start the game from the beginning. In this game you scored ${gameCounter} points`
    );
  }, 20000);
});

// !4
const messageFormRef = document.querySelector("[data-form=messageDuration]");

messageFormRef.addEventListener("submit", (evt) => {
  evt.preventDefault();

  setTimeout(
    () => alert(evt.target.elements.message.value),
    evt.target.elements.messageDuration.value
  );
  evt.target.reset();
});
