const inputEmoji = document.querySelector("#input-emoji");
const meaningContainer = document.querySelector("#meaning");

const emojiCollection = {
    "😊": "Smiling",
    "😳": "disbelief",
    "😔": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😑": "annoyance"
  };

  showMeaning = (emoji) => {
     meaningContainer.textContent = (
        emojiCollection[emoji] ? 
        emojiCollection[emoji] : 
        "we don't have this in our DB"
     );
  };

  inputEmoji.addEventListener("keyup", (e) => {
    const emoji = e.target.value.trim();
    if(emoji !== ""){
        showMeaning(emoji);
    }else{
        meaningContainer.textContent = "";
    }
  });