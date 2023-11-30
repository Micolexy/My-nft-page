const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const con2 = document.querySelector('.con2');
const openmenu = () => {
   //  console.log(event.target);
    menu.classList.add('menushown');
    body.classList.add('bodyunscroll');
 };

 const closemenu = () => {
   //  console.log(event.target);
    menu.classList.remove('menushown');
    body.classList.remove('bodyunscroll');
 };
//  const scrollright = () => {
//    con2.scrollBy(500,0);
//  };
//  const scrollleft = () => {
//    con2.scrollBy(-500,0);
//  }