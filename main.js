/**
 * 
 * Abre e fecha o menu quando clica no icone
 */

const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show');
  });
}

/**
 * 
 * quando clicar no link 
*/

const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
  link.addEventListener('click', function() {
    nav.classList.remove('show');
  });
}

/*mudar header quando houver scroll */

const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
  if(window.scrollY >= navHeight) {
    // scroll maior que a altura do header
    header.classList.add('scroll');
  } else {
    //menor que a altura do header
    header.classList.remove('scroll');
  }
})