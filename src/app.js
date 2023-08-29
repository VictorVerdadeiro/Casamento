const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const loveMessage = document.getElementById("love-message");

noBtn.addEventListener("click", function() {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
});

yesBtn.addEventListener("click", function() {
  noBtn.classList.add("hidden");
  loveMessage.classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "https://api.whatsapp.com/send?l=pt-BR&phone=5548998443415&text=Sim%2C%20Victor%2C%20eu%20aceito%20me%20casar%20com%20voc%C3%AA.%20Voc%C3%AA%20%C3%A9%20o%20verdadeiro%20victor%20e%20o%20verdadeiro%20dono%20do%20meu%20cora%C3%A7%C3%A3o.";
  }, 3500);
});
