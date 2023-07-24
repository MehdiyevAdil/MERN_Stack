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
  
    // Başlangic olaraq none
    navWatchlistMovie.style.display = 'none';
  
    navWatchlist.addEventListener('click', function () {
      // none dise block edir  ve eksi
      navWatchlistMovie.style.display = navWatchlistMovie.style.display === 'none' ? 'block' : 'none';
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


//   const icon = document.querySelector('#icon');
// const list = document.querySelector(".list");
// icon.addEventListener('click', function () {
//     list.classList.toggle('listOpen');

// })