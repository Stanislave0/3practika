{offset1 = 0;
    sliderLine = document.querySelector('.goods-slider-list');
    width_slide = document.querySelector('.goods-slider');
    width_img = sliderLine.querySelector("div").offsetWidth;
    console.log(width_img);
    
    function resizeWindow() {
      sliderLine.style.left = 0 + 'px';
    }
    
    function nextdot(doo) {
      slider_dots = document.querySelector('.goods-dots');
      list_dots = document.querySelectorAll('.goods-dot');
      if (doo == 'next') {
        for (i = 0; i < list_dots.length; i++) {
          // if (list_dots[i+1].style.display !== 'block') {
            // if (list_dots[i].classList.contains('active-dot') == true) {
            //   list_dots[i].classList.remove('active-dot');
            //   list_dots[0].classList.add('active-dot');
            //   break;
            // }
            
          // }
          // else {
          if (i == list_dots.length-1) {
            list_dots[i].classList.remove('active-dot');
            list_dots[0].classList.add('active-dot');
            break;
            
          }
          if (list_dots[i+1].style.display == 'none') {
            list_dots[i].classList.remove('active-dot');
            list_dots[0].classList.add('active-dot');
            break;
          }
    
          if (list_dots[i].classList.contains('active-dot') == true) {
            if (i == list_dots.length-1) {
              list_dots[i].classList.remove('active-dot');
              list_dots[0].classList.add('active-dot');
              break;
            }
            list_dots[i].classList.remove('active-dot');
            list_dots[i+1].classList.add('active-dot');
            break;
          // }
          }
            

        }
      }
      if (doo == 'prev') {
        for (i = 0; i < list_dots.length; i++) {
          if (list_dots[i].classList.contains('active-dot') == true) {
            if (i == 0) {
              if (list_dots[list_dots.length-1].style.display == 'none') {

                list_dots[i].classList.remove('active-dot');
                for (j = list_dots.length; j > 0; j--) {
                  console.log(j, list_dots[j], list_dots);
                  if (list_dots[j-1].style.display == 'block') {
                    list_dots[j-1].classList.add('active-dot');
                    break;
                  }
                }
              }
              list_dots[i].classList.remove('active-dot');
              list_dots[list_dots.length-1].classList.add('active-dot');
              break;
            }

            
            list_dots[i].classList.remove('active-dot');
            list_dots[i-1].classList.add('active-dot');
            break;
          }
        }
      }
    }
    window.addEventListener('resize', (e) => {
      resizeWindow()
    });
    
    document.querySelector('.goods-next').addEventListener('click', function (){
      sliderLine = document.querySelector('.goods-slider-list');
      active_list = sliderLine.querySelectorAll('div');
      count = 0;
      for (i = 0; i < active_list.length; i++) {
        if (active_list[i].style.display !== 'none') {
          count += 1;
        }
      }
      console.log(`${count}`-1+0.8);
      width_img = sliderLine.querySelector("div").offsetWidth;
      offset1 = offset1 + width_img+40;
      if (offset1 > width_img*`${count-3+0.8}`+40) {
          offset1 = 0;
      }
      sliderLine.style.left = -offset1 + 'px';
      nextdot('next');
    });
    
    document.querySelector('.goods-prev').addEventListener('click', function () {
      sliderLine = document.querySelector('.goods-slider-list');
      width_img = sliderLine.querySelector("div").offsetWidth;
      active_list = sliderLine.querySelectorAll('div');
      count = 0;
      for (i = 0; i < active_list.length; i++) {
        console.log(active_list[i]);
        if (active_list[i].style.display !== 'none') {
          count += 1;
          console.log(count);
        }
      }

      offset1 = offset1 - width_img-40;
      if (offset1 < 0) {
          offset1 = width_img*`${count-3}`-40;
      }
      sliderLine.style.left = -offset1 + 'px';
      nextdot('prev');
    });
    function gotonext() {
      sliderLine = document.querySelector('.goods-slider-list');
      width_img = sliderLine.querySelector("div").offsetWidth;
      offset1 = offset1 + width_img+40;
      if (offset1 > width_img*`${count-3+0.8}`+40) {
          offset1 = 0;
      }
      sliderLine.style.left = -offset1 + 'px';
      nextdot('next');
    }
    }