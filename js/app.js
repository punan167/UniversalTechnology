
<script src="../node_modules/waypoints/lib/noframework.waypoints.min.js"></script>


var waypoint = new Waypoint({
    element: document.getElementById('banner'),
    handler: function(direction) {
      let currentSection = document.querySelector('#banner');
      currentSection.classList.remove('active')
    }
  })

  var waypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function(direction) {
      let currentSection = document.querySelector('#services');
      currentSection.classList.add('active')
    },
    offset : "10%"
  })

  var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: { 
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
