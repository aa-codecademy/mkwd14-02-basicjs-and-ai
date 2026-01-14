const clickMeButton = document.getElementById("clickMeButton");
const mainDiv = document.getElementById("mainDiv");
const textInput = document.getElementById("textInput");
const copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", () => {
  const inputValue = textInput.value;
  navigator.clipboard.writeText(inputValue);
  textInput.value = "";
  copyButton.innerHTML = "Copied!";
  copyButton.disabled = true;
});

clickMeButton.addEventListener("click", (event) => {
  console.log(event);
  mainDiv.innerHTML = "Button Clicked!";

  if (event.ctrlKey) {
    mainDiv.innerHTML += " (with Ctrl key) ";
  }
  if (event.altKey) {
    mainDiv.innerHTML += " (with Alt key)";
  }
});
