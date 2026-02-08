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

// --- NO Button Escape ---
const btnNo = document.getElementById('btnNo');

function escapeNoButton() {
  const padding = 20;
  const bw = btnNo.offsetWidth;
  const bh = btnNo.offsetHeight;
  const maxX = window.innerWidth - bw - padding;
  const maxY = window.innerHeight - bh - padding;
  const x = padding + Math.random() * (maxX - padding);
  const y = padding + Math.random() * (maxY - padding);

  btnNo.style.position = 'fixed';
  btnNo.style.left = x + 'px';
  btnNo.style.top = y + 'px';
  btnNo.style.zIndex = '50';
}

btnNo.addEventListener('mouseenter', escapeNoButton);
btnNo.addEventListener('touchstart', function (e) {
  e.preventDefault();
  escapeNoButton();
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
  const pieces = ['💗', '💕', '🎉', '❤️', '💖', '✨', '💘', '🥳', '💝'];
  const total = 60;

  for (let i = 0; i < total; i++) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = Math.random() * 100 + '%';
    piece.style.fontSize = (16 + Math.random() * 24) + 'px';
    piece.style.animationDuration = (2 + Math.random() * 3) + 's';
    piece.style.animationDelay = (Math.random() * 2) + 's';
    container.appendChild(piece);
  }

  // Second wave after a short delay
  setTimeout(function () {
    for (let i = 0; i < 30; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
      piece.style.left = Math.random() * 100 + '%';
      piece.style.fontSize = (16 + Math.random() * 24) + 'px';
      piece.style.animationDuration = (2 + Math.random() * 3) + 's';
      piece.style.animationDelay = (Math.random() * 1.5) + 's';
      container.appendChild(piece);
    }
  }, 1500);
}
