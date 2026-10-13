document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("chatToggle");
  const chatWindow = document.getElementById("chatWindow");
  const closeBtn = document.getElementById("chatClose");
  const chatBody = document.getElementById("chatBody");
  const chatInput = document.getElementById("chatInput");
  const chatSend = document.getElementById("chatSend");
  const quickBtns = document.querySelectorAll(".quick-btn");

  toggle.addEventListener("click", () => chatWindow.classList.toggle("open"));
  closeBtn.addEventListener("click", () => chatWindow.classList.remove("open"));

  const replies = {
    skills: "Fatima's skills include HTML, CSS, JavaScript, TailwindCSS, and Git/GitHub — with a focus on responsive, modern web design.",
    education: "Fatima completed Matriculation (Science) in 2021, Intermediate (Pre-Medical) in 2023, and is currently learning web & app development at Saylani Mass IT Training Program (SMIT).",
    experience: "Fatima has been teaching at AL-Furqan School since 2024, building strong communication and mentoring skills alongside her development journey.",
    contact: "You can reach Fatima at ashisheikh375@gmail.com or through the contact form right above this chat 👆",
  };

  function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = type === "bot" ? "bot-msg" : "user-msg";
    msg.textContent = text;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function respondTo(text) {
    const lower = text.toLowerCase();
    let reply = "I'm not sure about that yet — try asking about skills, education, experience, or contact info!";
    for (const key in replies) {
      if (lower.includes(key)) {
        reply = replies[key];
        break;
      }
    }
    setTimeout(() => addMessage(reply, "bot"), 500);
  }

  chatSend.addEventListener("click", () => {
    const text = chatInput.value.trim();
    if (!text) return;
    addMessage(text, "user");
    respondTo(text);
    chatInput.value = "";
  });

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") chatSend.click();
  });

  quickBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const key = btn.getAttribute("data-q");
      addMessage(btn.textContent, "user");
      setTimeout(() => addMessage(replies[key], "bot"), 500);
    });
  });
});


