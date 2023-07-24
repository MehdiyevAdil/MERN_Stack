// language function
function language(){
  const len = document.querySelector('.len');
const navbarMenu = document.querySelector(".navbarMenu");

len.addEventListener('click', function () {
    navbarMenu.classList.toggle('active'); 
});
}
language();

 //watchlist function
 function watchListStart() {
  const navWatchlist = document.querySelector('.navWatchlist');
  const navWatchlistMovie = document.querySelector('.navWatchlistMovie');

  // Başlangıç olarak none ve opacity 0
  navWatchlistMovie.style.display = 'none';
  navWatchlistMovie.style.opacity = '0';

  navWatchlist.addEventListener('click', function () {
    // none ise block eder ve aksi durumda none yapar
    if (navWatchlistMovie.style.display === 'none') {
      navWatchlistMovie.style.display = 'block';
      // Tıklandığında opacity 1 yap
      navWatchlistMovie.style.opacity = '1';
    } else {
      navWatchlistMovie.style.display = 'none';
      navWatchlistMovie.style.opacity = '0';
    }
  });
}

watchListStart();

  // forms function
  function formContentStart() {
    const navSignIn = document.querySelector('.navSignIn');
    const forms = document.querySelector('.forms');
  
    // Başlangıçta olaraq none edir
    forms.style.display = 'none';
  
    navSignIn.addEventListener('click', function () {
      // none dise flex edir  ve eksi
      forms.style.display = forms.style.display === 'none' ? 'flex' : 'none';
    });
  }
  formContentStart();
 
  

function menuHanburger(){
  const icon = document.querySelector('#icon');
  const list = document.querySelector(".listHan");
  
  icon.addEventListener('click', function () {
    list.classList.toggle('listOpen');
  });
  
}
menuHanburger();