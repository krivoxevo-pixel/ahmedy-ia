const form = document.getElementById("form");
const message = document.getElementById("message");
const chat = document.getElementById("chat");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const text = message.value.trim();

  if (text === "") return;

  addMessage(text, "user");
  message.value = "";

  setTimeout(function() {
    addMessage(
      "¡Hola! Soy Ahmedy IA 👋. Esta es mi primera versión. Pronto podremos conectarme a una inteligencia artificial real.",
      "ai"
    );
  }, 500);
});

function addMessage(text, type) {
  const messageBox = document.createElement("div");

  messageBox.style.maxWidth = "750px";
  messageBox.style.margin = "15px auto";
  messageBox.style.padding = "12px 16px";
  messageBox.style.borderRadius = "15px";
  messageBox.style.whiteSpace = "pre-wrap";

  if (type === "user") {
    messageBox.style.background = "#111827";
    messageBox.style.color = "white";
  } else {
    messageBox.style.background = "#f3f4f6";
    messageBox.style.color = "#202123";
  }

  messageBox.textContent = text;
  chat.appendChild(messageBox);
  chat.scrollTop = chat.scrollHeight;
}
