$("#myTab a").on("click", function (e) {
  e.preventDefault();
  $(this).tab("show");
});
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
  item.onclick = () => {
    document.querySelectorAll(".line").forEach((e) => {
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      }
    });
    item.querySelector(".line").classList.add("active");
  };
});
/* handle slick slider */
// $(document).ready(function(){
//   $('.course__list').slick({
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       dots: true,
//       arrows: false,
//       responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 1023.98,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               dots: true,
//               arrows: false,
//             }
//           },
//           {
//             breakpoint: 767,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//       ]
//   });
//   $('.review-slider').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     dots: true,
//     prevArrow:`<button type='button'  class='slick-prev pull-left'> < </button>`,
//         nextArrow:`<button type='button' class='slick-next pull-right'>
//            >
//         </ button>`,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 1023.98,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//           }
//         },
//         {
//           breakpoint: 767,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//     ]
// });
//   const dots = document.querySelector('.slick-dots button')
//   dots.forEach( (item,index) => {
//     item.innerText = index +1
//   } )

// })

$("#pagination-container").pagination({
  dataSource: [1, 2, 3, 4, 5],
  pageSize: 3,
  callback: function (data, pagination) {
    // template method of yourself
    var html = simpleTemplating(data);
    $("#review-container").html(html);
  },
});

function simpleTemplating(data) {
  var html = `<div class="review-list">`;
  $.each(data, function (index, item) {
    html += `<div class="review-section">
    <div class="left">
        <div class="reviewer-img-bg"><div class="reviewer-img"></div></div>
        <div class="feedback-general">Th??ch H???c L???m</div>
    </div>
    <div class="right">
        <div class="rate-line">
            <div class="rate">
                <span class="star-icon"></span>
                <span class="star-icon"></span>
                <span class="star-icon"></span>
                <span class="star-icon"></span>
                <span class="star-icon"></span>
            </div>
            <div class="level">
                C???c k??? h??i h??ng
            </div>
            <div class="date">????nh gi?? v??o 01/01/2021</div>
        </div>
        <div class="extend-line"><span class="check-icon"></span><span>???? ho??n th??nh kh??a h???c</span></div>
        <div class="desc">
            Ch??ng ta v???n bi???t r???ng, l??m vi???c v???i m???t ??o???n v??n b???n d??? ?????c v?? r?? ngh??a d??? g??y r???i tr?? v?? c???n tr??? vi???c t???p trung v??o y???u t??? tr??nh b??y v??n b???n. 
            Lorem Ipsum c?? ??u ??i???m h??n so v???i ??o???n v??n b???n ch??? g???m n???i dung ki???u "N???i dung, n???i dung, n???i dung" l?? n?? khi???n v??n b???n gi???ng th???t h??n, b??nh th?????ng h??n. 
        </div>
    </div>
</div>`;
  });
  html += `<div>`;
  return html;
}

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.onclick = () => {
  menu.classList.add("active");
};

window.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
    menu.classList.remove("active");
  } /* else{
        document.querySelector('.menu').classList.remove('active')

    } */
});

/* right section on scroll  */

window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 146 && window.scrollY < 1500) {
    document.querySelector(".right-section").style.position = "fixed";
  } else if (window.scrollY >= 1500) {
    document.querySelector(".right-section").style.position = "unset";
    console.log(12345);
  } else {
    document.querySelector(".right-section").style.position = "unset";
  }
};
$(document).ready(function () {
  $(".course__list").slick({
    infinite: true,
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 4,
    dots: true,
    /* arrows: true, */
    prevArrow: `<button type='button' class='slick-prev pull-left'> < </button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'>  
         >
      </ button>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1023.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  });
});
