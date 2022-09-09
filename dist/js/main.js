 const menuIcon = document.querySelector('.menu-icon')
 const menuBar = document.querySelector('.navbar-right')
 const navContainer = document.querySelector('.navbar-container')


 // display menubar 

 menuIcon.addEventListener('click',function() {
    menuIcon.classList.toggle('active')
    menuBar.classList.toggle('active')
   });

   
// change navbar styles on scroll
window.addEventListener('scroll', ()=> {
   document.querySelector('.navbar-container').classList.toggle('scroll', window.scrollY > 0)
});



// close the  navbar when a  item is clicked
if( window.innerWidth < 1024) {
   document.querySelectorAll('.navbar-container li a').forEach(navItem => {
      navItem.addEventListener('click', () => {
         menuBar.classList.remove('active')
         menuIcon.classList.remove('active')
      })
   })
};




// Loader Effect
window.addEventListener('load', showPage)

function showPage() {
   setTimeout(showPages, 3000)
}
 function showPages() {
   document.getElementById("loader").style.display = "none";
   document.getElementById("myPage").style.display = "block";
 }
 
// change copyright years 
const year = document.querySelector('#current-year')
year.innerHTML = new Date().getFullYear()