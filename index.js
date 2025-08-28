
    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const heartEl = document.getElementById("heart-count");
    const coinEl = document.getElementById("coin-count");
    const copyEl = document.getElementById("copy-count");
    const historyEl = document.getElementById("call-history");

    const cards = document.querySelectorAll(".service-card");

    for (const card of cards) {
      const name = card.getAttribute("data-name");
      const number = card.getAttribute("data-number");

      const heartBtn = card.querySelector(".heart-btn");
      const copyBtn = card.querySelector(".copy-btn");
      const callBtn = card.querySelector(".call-btn");

      heartBtn.addEventListener("click", function() {
        heartCount++;
        heartEl.textContent = heartCount;
      });

      copyBtn.addEventListener("click", function() {
        navigator.clipboard.writeText(number);
        alert(`Copied: ${number}`);
        copyCount++;
        copyEl.textContent = copyCount;
      });

      callBtn.addEventListener("click", function() {
        if (coinCount < 20) {
          alert("Not enough coins to call!");
          return;
        }

        alert(`Calling ${name} at ${number}`);
        coinCount -= 20;
        coinEl.textContent = coinCount;

        const time = new Date().toLocaleTimeString();
        const li = document.createElement("li");
        li.textContent = `${name} (${number}) - ${time}`;
        historyEl.appendChild(li);
      });
    }

    function clearHistory() {
      historyEl.innerHTML = "";
    }
 