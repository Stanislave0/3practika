{
    document.querySelector('.promo-uslug').addEventListener('click', function (){
        object_promo = document.querySelector('.active-goods');
        object_uslug = document.querySelector('.active-uslug');
        if (object_promo.style.display !== 'none') {
            object_promo.style.display = 'none';
            object_uslug.style.display = 'block';
        }

    }); 
    document.querySelector('.promo-goods').addEventListener('click', function (){
        object_promo = document.querySelector('.active-goods');
        object_uslug = document.querySelector('.active-uslug');
        if (object_uslug.style.display !== 'none') {
            object_uslug.style.display = 'none';
            object_promo.style.display = 'block';
        }

    });      
    
}