document.querySelector('.about-us__button').addEventListener('click', function () {
    content_drop = document.querySelector('.about-us-open');
    console.log(content_drop.style);
    if (content_drop.style.height == '100%') {
        content_drop.style.height = '0';
        return;
    }
    if (content_drop.style.height !== '0') {
        content_drop.style.height = '100%';
        return;
    }
    
});
