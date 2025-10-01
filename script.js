document.getElementById("magicBtn").addEventListener("click", () => {
  const message = document.getElementById("message");
  const texts = [
    "✨ You are awesome!",
    "🚀 Keep learning and growing!",
    "🌟 This is a simple demo website!",
    "💡 Small ideas create big impact!"
  ];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  message.textContent = randomText;
});
