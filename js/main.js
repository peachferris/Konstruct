  
const 
      burger = document.querySelector('.burger'),
      close = document.querySelector('.menu__close'),
      menu = document.querySelector('.menu__nav'),
      anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
 })
}

burger.addEventListener('click', () => {
    menu__nav.classList.add('main-menu--visible');
});

close.addEventListener('click', () => {
    main-menu.classList.remove('main-menu--visible');
});





