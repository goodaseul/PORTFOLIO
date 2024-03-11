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
const pTag1 = document.querySelector(".marquee_top .marquee_txt");
const pTag2 = document.querySelector(".marquee_bottom .marquee_txt");

const textArr1 = "positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, ".split(" ");

let count1 = 0;
let count2 = 0;

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
    count2++;
    count1 = marqueeText(count1, pTag1, -1);
    count1 = marqueeText(count2, pTag2, 1);
    window.requestAnimationFrame(animate);
}

function scrollHandler() {
    count1 -= 15;
    count2 += 15;
}

window.onload = function () {
    initTexts(pTag1, textArr1);
    initTexts(pTag2, textArr1);
    window.addEventListener("scroll", scrollHandler);

    animate();
};
// * work

// 더보기

// const workList = document.querySelectorAll(".wrap_work .wrap_list .list");
// workList.slice(0, 6).style.display = block;
// $("div").slice(0, 4).show(); // select the first 4
// $("p").click(function(e){ // click event for load more
//     e.preventDefault();
//     $("div:hidden").slice(0, 4).show(); // select next 4 hidden divs and show them
//     if($("div:hidden").length == 0){ // check if any hidden divs still exist
//         // alert("No more divs"); // alert if there are none left
//         $('p').hide();
//     }
// });
