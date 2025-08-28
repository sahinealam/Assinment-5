// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//   <title>Emergency Service</title>
//   <script src="https://cdn.tailwindcss.com"></script>
// </head>
// <body class="bg-gradient-to-br from-green-100 to-green-200 min-h-screen">

//   <!-- Navbar -->
//   <nav class="flex justify-between items-center bg-green-900 text-white p-4">
//     <div class="text-xl font-bold flex items-center gap-2">
//       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Seal_of_the_Government_of_Bangladesh.svg/200px-Seal_of_the_Government_of_Bangladesh.svg.png" class="h-8" />
//       Emergency Service
//     </div>
//     <div class="flex items-center gap-4">
//       <span>💗 <span id="heart-count">0</span></span>
//       <span>💰 <span id="coin-count">100</span></span>
//       <span>📋 <span id="copy-count">0</span></span>
//     </div>
//   </nav>

//   <!-- Hero Section -->
//   <section class="text-center py-6">
//     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Seal_of_the_Government_of_Bangladesh.svg/200px-Seal_of_the_Government_of_Bangladesh.svg.png" class="mx-auto h-16" />
//     <h1 class="text-3xl font-bold text-green-800 mt-2">জরুরি সেবা ডিজিটালি</h1>
//     <p class="text-sm text-green-700 mt-1">Government Emergency Services at Your Fingertips</p>
//   </section>

//   <!-- Main Section -->
//   <main class="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
//     <!-- Card Section -->
//     <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="card-container">

//       <!-- Card 1 -->
//       <div class="bg-white p-4 rounded shadow relative service-card" data-name="National Emergency" data-number="999">
//         <button class="absolute top-2 left-2 text-pink-500 heart-btn">💗</button>
//         <h3 class="font-bold">জাতীয় জরুরি সেবা</h3>
//         <p class="text-sm text-gray-600">National Emergency</p>
//         <p class="font-mono mt-2">999</p>
//         <span class="inline-block mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">General</span>
//         <div class="mt-4 flex gap-2">
//           <button class="copy-btn text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">📋 Copy</button>
//           <button class="call-btn text-sm bg-green-100 text-green-800 px-2 py-1 rounded">📞 Call</button>
//         </div>
//       </div>

//       <!-- Card 2 -->
//       <div class="bg-white p-4 rounded shadow relative service-card" data-name="Police" data-number="999">
//         <button class="absolute top-2 left-2 text-pink-500 heart-btn">💗</button>
//         <h3 class="font-bold">পুলিশ</h3>
//         <p class="text-sm text-gray-600">Police</p>
//         <p class="font-mono mt-2">999</p>
//         <span class="inline-block mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Police</span>
//         <div class="mt-4 flex gap-2">
//           <button class="copy-btn text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">📋 Copy</button>
//           <button class="call-btn text-sm bg-green-100 text-green-800 px-2 py-1 rounded">📞 Call</button>
//         </div>
//       </div>

//       <!-- Add more cards similarly if needed -->
//    <!-- Card 2 -->
//       <div class="bg-white p-4 rounded shadow relative service-card" data-name="Police" data-number="999">
//         <button class="absolute top-2 left-2 text-pink-500 heart-btn">💗</button>
//         <h3 class="font-bold">পুলিশ</h3>
//         <p class="text-sm text-gray-600">Police</p>
//         <p class="font-mono mt-2">999</p>
//         <span class="inline-block mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Police</span>
//         <div class="mt-4 flex gap-2">
//           <button class="copy-btn text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">📋 Copy</button>
//           <button class="call-btn text-sm bg-green-100 text-green-800 px-2 py-1 rounded">📞 Call</button>
//         </div>
//       </div>
//          <!-- Card 2 -->
//       <div class="bg-white p-4 rounded shadow relative service-card" data-name="Police" data-number="999">
//         <button class="absolute top-2 left-2 text-pink-500 heart-btn">💗</button>
//         <h3 class="font-bold">পুলিশ</h3>
//         <p class="text-sm text-gray-600">Police</p>
//         <p class="font-mono mt-2">999</p>
//         <span class="inline-block mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Police</span>
//         <div class="mt-4 flex gap-2">
//           <button class="copy-btn text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">📋 Copy</button>
//           <button class="call-btn text-sm bg-green-100 text-green-800 px-2 py-1 rounded">📞 Call</button>
//         </div>
//       </div>
//          <!-- Card 2 -->
//       <div class="bg-white p-4 rounded shadow relative service-card" data-name="Police" data-number="999">
//         <button class="absolute top-2 left-2 text-pink-500 heart-btn">💗</button>
//         <h3 class="font-bold">পুলিশ</h3>
//         <p class="text-sm text-gray-600">Police</p>
//         <p class="font-mono mt-2">999</p>
//         <span class="inline-block mt-2 bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Police</span>
//         <div class="mt-4 flex gap-2">
//           <button class="copy-btn text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">📋 Copy</button>
//           <button class="call-btn text-sm bg-green-100 text-green-800 px-2 py-1 rounded">📞 Call</button>
//         </div>
//       </div>


//     </div>

//     <!-- History Section -->
//     <div class="bg-white p-4 rounded shadow">
//       <div class="flex justify-between items-center">
//         <h2 class="font-bold text-lg">📜 Call History</h2>
//         <button onclick="clearHistory()" class="text-sm text-red-600 hover:underline">Clear</button>
//       </div>
//       <ul id="call-history" class="mt-2 text-sm space-y-1"></ul>
//     </div>
//   </main>

//   <script src="./index.js"></script>

// </body>
// </html>

// js code stert


// let heartCount = 0;
// let coinCount = 100;
// let copyCount = 0;

// const heartEl = document.getElementById("heart-count");
// const coinEl = document.getElementById("coin-count");
// const copyEl = document.getElementById("copy-count");
// const historyEl = document.getElementById("call-history");

// const cards = document.querySelectorAll(".service-card");

// for (const card of cards) {
//   const name = card.getAttribute("data-name");
//   const number = card.getAttribute("data-number");

//   const heartBtn = card.querySelector(".heart-btn");
//   const copyBtn = card.querySelector(".copy-btn");
//   const callBtn = card.querySelector(".call-btn");

//   heartBtn.addEventListener("click", () => {
//     heartCount++;
//     heartEl.textContent = heartCount;
//   });

//   copyBtn.addEventListener("click", () => {
//     navigator.clipboard.writeText(number);
//     alert(`Copied: ${number}`);
//     copyCount++;
//     copyEl.textContent = copyCount;
//   });

//   callBtn.addEventListener("click", () => {
//     if (coinCount < 20) {
//       alert("Not enough coins to call!");
//       return;
//     }

//     alert(`Calling ${name} at ${number}`);
//     coinCount -= 20;
//     coinEl.textContent = coinCount;

//     const time = new Date().toLocaleTimeString();
//     const li = document.createElement("li");
//     li.textContent = `${name} (${number}) - ${time}`;
//     historyEl.appendChild(li);
//   });
// }

// function clearHistory() {
//   historyEl.innerHTML = "";
// }
//  nave button
{/* <button class="bg-slate-600 rounded-xl h-full w-full"><span id="coin-count">100</span>💰</button> */}

// 💗 <span id="heart-count">0</span>
// 📋 <span id="copy-count">0</span>