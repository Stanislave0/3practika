{list_filter = document.querySelector('.goods-slider-list');
width_img = list_filter.querySelector("div").offsetWidth;
function gotostart() {
    sliderLine.style.left = 0 + 'px';
  }
function updatedot() {
    sliderLine = document.querySelector('.goods-slider-list');
    active_list = sliderLine.querySelectorAll('div');
    list_dots = document.querySelectorAll('.goods-dot');

    for (j = 0; j < list_dots.length; j++) {
        if (list_dots[j].style.display !== 'none') {
            list_dots[j].style.display = 'none';
        }

    count = 0;
    for (i = 0; i < active_list.length; i++) {
        console.log(active_list[i]);
        if (active_list[i].style.display !== 'none') {
            count += 1;
        }
    }
    console.log(count, "wefwe", list_dots);
    for (k = 0; k < count-2; k++) {
        console.log(list_dots[k], k);
        list_dots[k].style.display = 'block';
    }
    for (i = 0; i < list_dots.length; i++) {
        if (list_dots[i].classList.contains('active-dot') == true) {
          list_dots[i].classList.remove('active-dot');
          list_dots[0].classList.add('active-dot');
        }
      }
    }
}
document.querySelector('.goods-all').addEventListener('click', function (){
    gotostart();
    object_filter = list_filter.querySelectorAll('div');
    for (i = 0; i < object_filter.length; i++) {
        if (object_filter[i].style.display == 'none') {
            object_filter[i].style.display = 'block';
            list_dots = document.querySelectorAll('.goods-dot');
            for (j = 0; j < list_dots.length; j++) {
                if (list_dots[j].style.display == 'none') {
                    list_dots[j].style.display = 'block';
                }
            }
        }
    }
    updatedot();
  });
document.querySelector('.goods-hammock').addEventListener('click', function (){
    gotostart();
    object_filter = list_filter.querySelectorAll('div');
    for (i = 0; i < object_filter.length; i++) {
        if (object_filter[i].classList.contains('hammock') == false) {
            object_filter[i].style.display = 'none';
        }
        if (object_filter[i].classList.contains('hammock') == true) {
            object_filter[i].style.display = 'block';
        }
    }
    updatedot();
});
document.querySelector('.goods-covers').addEventListener('click', function (){
    gotostart();
    object_filter = list_filter.querySelectorAll('div');
    for (i = 0; i < object_filter.length; i++) {
        if (object_filter[i].classList.contains('covers') == false) {
            object_filter[i].style.display = 'none';
        }
        if (object_filter[i].classList.contains('covers') == true) {
            object_filter[i].style.display = 'block';
        }
    }
    updatedot();
});
document.querySelector('.goods-fastener').addEventListener('click', function (){
    gotostart();
    
    object_filter = list_filter.querySelectorAll('div');
    for (i = 0; i < object_filter.length; i++) {
        if (object_filter[i].classList.contains('fastener') == false) {
            object_filter[i].style.display = 'none';
        }
        if (object_filter[i].classList.contains('fastener') == true) {
            object_filter[i].style.display = 'block';
        }
    }
    updatedot();
});
}