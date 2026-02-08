// --- Floating Hearts Background ---
(function createFloatingHearts() {
  const container = document.getElementById('heartsBg');
  const hearts = ['💗', '💕', '💖', '❤️', '💘', '💝', '♥'];
  const count = 20;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.fontSize = (14 + Math.random() * 22) + 'px';
    heart.style.animationDuration = (6 + Math.random() * 8) + 's';
    heart.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(heart);
  }
})();

// --- YES Button Growth ---
const btnYes = document.getElementById('btnYes');
let yesScale = 1;

btnYes.addEventListener('mouseenter', function () {
  yesScale += 0.12;
  btnYes.style.transform = 'scale(' + yesScale + ')';
});

// Also grow on touch for mobile
btnYes.addEventListener('touchstart', function () {
  yesScale += 0.12;
  btnYes.style.transform = 'scale(' + yesScale + ')';
}, { passive: true });

// --- NO Button Dodge ---
const btnNo = document.getElementById('btnNo');

function dodgeNoButton() {
  const offsetX = (Math.random() - 0.5) * 300;
  const offsetY = (Math.random() - 0.5) * 200;
  btnNo.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
}

btnNo.addEventListener('mouseenter', dodgeNoButton);
btnNo.addEventListener('touchstart', function(e) {
  e.preventDefault();
  dodgeNoButton();
}, { passive: false });

// --- YES Click → Celebration ---
btnYes.addEventListener('click', function () {
  document.getElementById('proposalCard').style.display = 'none';
  const celebration = document.getElementById('celebration');
  celebration.classList.add('active');
  launchConfetti();
});

// --- Confetti / Falling Hearts ---
function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  const pieces = ['💗', '💕', '🎉', '❤️', '💖', '✨', '💘', '🥳', '💝', '🌟', '💞', '💓', '💫'];
  const total = 80;

  for (let i = 0; i < total; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = Math.random() * 100 + '%';
    piece.style.fontSize = (18 + Math.random() * 24) + 'px';
    piece.style.animationDuration = (2 + Math.random() * 2.8) + 's';
    piece.style.animationDelay = (Math.random() * 2) + 's';
    container.appendChild(piece);
  }

  // Second wave after a short delay
  setTimeout(function () {
    for (let i = 0; i < 40; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
      piece.style.left = Math.random() * 100 + '%';
      piece.style.fontSize = (18 + Math.random() * 24) + 'px';
      piece.style.animationDuration = (2 + Math.random() * 2.8) + 's';
      piece.style.animationDelay = (Math.random() * 1.5) + 's';
      container.appendChild(piece);
    }
  }, 1500);
}
