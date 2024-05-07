// window.addEventListener('scroll', function scroll_cook() {
// });
window.addEventListener('scroll', scroll_display);
function scroll_display() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
        display_cook = document.querySelector('.cookes-wrapper');
        display_cook.style.display = 'block';
        removeEventListener('scroll', scroll_display);
    }
}
document.querySelector('.unactive-cook').addEventListener('click', function (){
    button_cook = document.querySelector('.cookes-wrapper');
    button_cook.style.display = 'none';
});