const burger = document.querySelector('#burger');
console.log(burger);
burger.addEventListener('click', () => {
  document.querySelector('.resize').classList.toggle('open');
});
