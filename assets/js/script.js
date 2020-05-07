$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  animateOut: "fadeOut",
  autoHeight: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

var a = 0;
$(window).scroll(function () {
  var oTop = $(".section-counter").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".number").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    a = 1;
  }
});

$("#video").videoPopup();

mapboxgl.accessToken =
  "pk.eyJ1IjoidmFsZXJhc2FtIiwiYSI6ImNrN3l1ZnA5dDAxcjczZG53MXgzdThwM3oifQ.R7o7mzS1jB-qYrKdjX8jaA";
var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
mapboxClient.geocoding
  .forwardGeocode({
    query: "Lviv, Ukraine",
    autocomplete: false,
    limit: 1,
  })
  .send()
  .then(function (response) {
    if (
      response &&
      response.body &&
      response.body.features &&
      response.body.features.length
    ) {
      var feature = response.body.features[0];

      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: feature.center,
        zoom: 10,
      });
      new mapboxgl.Marker().setLngLat(feature.center).addTo(map);
    }
  });

$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $("header").addClass("sticky");
  } else {
    $("header").removeClass("sticky");
  }
});

$(".owl-feedback").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
});
