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
 $(document).ready(function(){
   $('.course__list').slick({
       infinite: true,
       slidesToShow: 4,
       slidesToScroll: 4,
       dots: true,
       arrows: false,
       responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true
             }
           },
           {
             breakpoint: 1023.98,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               dots: true,
               arrows: false,
             }
           },
           {
             breakpoint: 767,
             settings: {
               slidesToShow: 1,
               slidesToScroll: 1
             }
           }
       ]
   });
 

 })

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
        <div class="feedback-general">Thích Học Lắm</div>
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
                Cực kỳ hài hòng
            </div>
            <div class="date">Đánh giá vào 01/01/2021</div>
        </div>
        <div class="extend-line"><span class="check-icon"></span><span>Đã hoàn thành khóa học</span></div>
        <div class="desc">
            Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. 
            Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu "Nội dung, nội dung, nội dung" là nó khiến văn bản giống thật hơn, bình thường hơn. 
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
    document.querySelector(".right-section").classList.add('active')
  } else if (window.scrollY >= 1500) {
    document.querySelector(".right-section").classList.remove('active')
  } else {
    document.querySelector(".right-section").classList.remove('active')
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
