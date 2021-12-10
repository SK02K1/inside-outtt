const inputEmoji = document.querySelector("#input-emoji");
const meaningContainer = document.querySelector("#meaning");
const emojiContainer = document.querySelector(".emoji-container");

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

  emojiContainer.innerHTML = Object.keys(emojiCollection).map((emoji) => {
    return `<span class="emoji" >${emoji}</span>`
  }).join("");

  emojiContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "SPAN"){
        const emoji = e.target.textContent;
        showMeaning(emoji)
    }
  });