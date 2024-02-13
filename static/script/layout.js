//커스텀 커서
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".link_btn"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
    mouseCursor.style.left = e.pageX + "px";
    mouseCursor.style.top = e.pageY - scrollY + "px";
}

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("cursor-grow");
        mouseCursor.style.zIndex = "9";
        link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("cursor-grow");
        mouseCursor.style.zIndex = "1000";
        link.classList.remove("hovered-link");
    });
});

// work

// $(".section_work .wrap_work li").each(function () {
//     var box = $(this).parent().parent();
//     var box_index = box.index();

//     box.find(".wrap_img").css({ height: $(this).outerHeight() - 20 });
//     box.css({ height: $(this).outerHeight() });

//     if (box_index > 2) {
//         var prevBox = $(".wrap_complex_thumb .wrap_complex_inner .complex").eq(box_index - 3);
//         var prevHeight = box.offset().top - prevBox.offset().top - prevBox.height() - 30;

//         box.css("margin-top", -prevHeight);
//     }
// });
// window.onload = function () {
//     const workBox = document.querySelectorAll(".wrap_list .list");
//     workBox.forEach((item, index) => {
//         const box = item;
//         console.log(item.offsetHeight);

//         workBox[index].style.height = item.offsetHeight + "px";

//         if (index > 2) {
//             let prevBox = workBox[index - 3];
//             let prevHeight;

//             prevHeight = workBox[index].offsetTop - prevBox.offsetTop - workBox[index].offsetHeight;
//             workBox[index].style.marginTop = -prevHeight + "px";
//         }
//     });
// };

// $(".wrap_complex_thumb .wrap_info").each(function () {
//         if (box_index > 2) {
//             var prevBox = $(".wrap_complex_thumb .wrap_complex_inner .complex").eq(box_index - 3);
//             var prevHeight = box.offset().top - prevBox.offset().top - prevBox.height() - 30;
//             box.css("margin-top", -prevHeight);
//             box.data("isTopSet", true);
//         }

// });
