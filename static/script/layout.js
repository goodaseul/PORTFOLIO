// 커스텀 커서
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".link_btn");
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
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

// nav
const headerHeight = document.querySelector(".header").clientHeight;
const navigationLink = document.querySelectorAll("nav li");
const navigationLinkA = document.querySelectorAll("nav li a");
const sectors = document.querySelectorAll(".l_main .section");
window.onload = function () {
    ActiveMenu();
    window.addEventListener("scroll", ActiveMenu);

    ClickContent();
    window.addEventListener("click", ClickContent);

    animate();
};

function ClickContent() {
    navigationLinkA.forEach((item, index) => {
        item.addEventListener("click", function (e) {
            e.preventDefault();
            let contentHref = e.currentTarget.getAttribute("href").split("#")[1];
            sectors[index].getAttribute(contentHref);
            if (sectors[index].getAttribute("id") == contentHref) {
                window.scroll({
                    behavior: "smooth",
                    top: sectors[index].offsetTop - headerHeight,
                });
            }
        });
    });
}

function ActiveMenu() {
    let len = sectors.length;
    while (--len && window.scrollY < sectors[len].offsetTop - headerHeight) {}

    navigationLink.forEach((item) => item.classList.remove("active"));
    navigationLink[len].classList.add("active");
}

// * about
const pTag1 = document.querySelector(".marquee_txt");

const textArr1 = "positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, ".split(" ");

let count1 = 0;

function initTexts(element, textArray) {
    textArray.push(...textArray);
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0`;
    }
}

function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`;
        count = 0;
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`;

    return count;
}

function animate() {
    count1++;
    count1 = marqueeText(count1, pTag1, -1);
    window.requestAnimationFrame(animate);
}

function scrollHandler() {
    count1 += 15;
}

window.onload = function () {
    initTexts(pTag1, textArr1);
    window.addEventListener("scroll", scrollHandler);

    animate();
};
// * work

// 더보기
const workBtn = document.querySelector(".section_work .btn_more");

function btnLoad(id, cnt, btn) {
    const list = document.querySelectorAll(".section_wrok .list");
    const list_length = list.length;
    let list_total_cnt;
    console.log(list, list_length);
    if (cnt < list_length) {
        list_total_cnt = cnt;
    } else {
        list_total_cnt = list_length;
        $(btn).hide();
    }
    // $(list + ":lt(" + girls_total_cnt + ")").addClass("active");
}

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
