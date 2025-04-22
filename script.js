document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card-title");

  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();
    const cardElement = card.closest(".col-md-4");
    cardElement.style.display = cardText.includes(filter) ? "block" : "none";
  });
});

function addComment() {
  const name = document.getElementById("commentName").value.trim();
  const message = document.getElementById("commentMessage").value.trim();
  if (name && message) {
    const commentList = document.getElementById("commentList");
    const li = document.createElement("li");
    li.className = "mb-2 border-bottom pb-2";
    li.innerHTML = `<strong>${name}</strong><br><p>${message}</p>`;
    commentList.appendChild(li);
    document.getElementById("commentName").value = "";
    document.getElementById("commentMessage").value = "";
  }
}

document.getElementById("searchInput").addEventListener("input", function(event) {
  const searchTerm = event.target.value.toLowerCase();
  const blogPosts = document.querySelectorAll("#blog-posts .col-md-4");
  
  blogPosts.forEach(post => {
    const title = post.querySelector(".card-title").textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      post.style.display = "block";  // Show post
    } else {
      post.style.display = "none";  // Hide post
    }
  });
});


function scrollFeatured(distance) {
  const container = document.querySelector(".featured-post-container");
  container.scrollBy({ left: distance, behavior: 'smooth' });
}

const labels = [
  "Cybersecurity", "Zero-Day", "OSCP", "Bug Bounty",
  "Network", "Encryption", "Forensics", "Threat Hunting",
  "Pentesting", "Ethical Hacking", "CTF", "Red Team",
  "Firewall", "SIEM", "XSS", "SQLi", "Recon", "MitM"
];

function spawnFloatingLabel() {
  const container = document.getElementById("floating-text-container");
  const label = document.createElement("div");
  label.className = "floating-label";
  label.innerText = labels[Math.floor(Math.random() * labels.length)];

  const size = Math.random() * 0.8 + 1;
  label.style.fontSize = `${size}rem`;

  const posX = Math.random() * window.innerWidth;
  const duration = Math.random() * 10 + 10; // 10-20s
  label.style.left = `${posX}px`;
  label.style.bottom = "0px";
  label.style.animationDuration = `${duration}s`;

  container.appendChild(label);

  setTimeout(() => {
    container.removeChild(label);
  }, duration * 1000);
}

setInterval(spawnFloatingLabel, 800);
