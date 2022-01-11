// Gajah == Fire
// Orang == Water
// Semut == Wind
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'fire';
  if (comp < 0.67) return 'water';
  return 'wind';
}
function getHasil(comp, player) {
  if (player == comp) return 'DRAW';
  if (player == 'fire') return comp == 'water' ? 'LOSE' : 'WIN';
  if (player == 'water') return comp == 'fire' ? 'WIN' : 'LOSE';
  if (player == 'wind') return comp == 'water' ? 'WIN' : 'LOSE';
  if (player == 'water') return comp == 'wind' ? 'LOSE' : 'WIN';
  if (player == 'wind') return comp == 'fire' ? 'LOSE' : 'WIN';
  if (player == 'fire') return comp == 'wind' ? 'WIN' : 'LOSE';
}

const alertMenang = document.querySelector('.alertMenang');
const alertKalah = document.querySelector('.alertKalah');
const pilihan = document.querySelectorAll('img');
let win = 1;
let lose = 1;
let draw = 1;
pilihan.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanPlayer, pilihanComputer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'Image/' + pilihanComputer + '.png');

      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 999);

    setTimeout(function () {
      const skorKomputer = document.querySelector('.skorKomputer');
      const skorPlayer = document.querySelector('.skorPlayer');

      if (hasil == 'WIN') {
        skorPlayer.innerHTML = win++;
      }
      if (hasil == 'LOSE') {
        skorKomputer.innerHTML = lose++;
      }
    }, 1000);
    if (win == 4) return munculinDuluMenang();
    function munculinDuluMenang() {
      alertMenang.style.display = 'block';
      resetMenang();
    }
    setTimeout(function () {
      if (lose == 4) return munculinDuluKalah();
      function munculinDuluKalah() {
        playAudio();
        alertKalah.style.display = 'block';
        resetKalah();
      }
    }, -5000);
  });
});

function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['fire', 'water', 'wind'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'Image/' + gambar[i++] + '.png');
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

function resetMenang() {
  alertMenang.addEventListener('click', function () {
    alertMenang.style.display = 'none';
    window.location.reload();
  });
}

function resetKalah() {
  alertKalah.addEventListener('click', function () {
    alertKalah.style.display = 'none';
    window.location.reload();
  });
}

function startGame() {
  const mulaiGame = document.querySelector('.startGame');
  const Game = document.querySelector('section');
  const note = document.querySelector('.note');
  Game.style.display = 'block';
  mulaiGame.style.display = 'none';
  note.style.display = 'block';
}

function playAudio() {
  const audio = document.querySelector('audio');
  audio.play();
}
