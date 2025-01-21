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
// const textArr2 = "positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, ".split(" ");

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

// function scrollHandler() {
//     count1 -= 15;
//     count2 += 15;
// }

window.onload = function () {
    initTexts(pTag1, textArr1);
    initTexts(pTag2, textArr1);
    // window.addEventListener("scroll", scrollHandler);

    animate();
};
statusbox();
window.addEventListener(
    "resize",
    function () {
        windowWidth = window.innerWidth;
        statusbox();
    },
    true
);

function statusbox() {
    windowWidth = window.innerWidth;
    const aboutBox = document.querySelectorAll(".section_about .wrap_box .box");

    let statusTit = document.querySelector(".section_about .wrap_about .tit");
    let status = document.querySelector(".section_about .wrap_about .status");
    if (window.innerWidth >= 1480) {
        aboutBox.forEach((aboutBoxes, index) => {
            aboutBoxes.addEventListener("mouseover", () => {
                status.classList.add("active");
                if (index == 0) {
                    status.innerText = "일할 때";
                    statusTit.classList.add("left");
                    statusTit.classList.remove("right");
                } else {
                    status.innerText = "평상 시";
                    statusTit.classList.remove("left");
                    statusTit.classList.add("right");
                }
            });

            aboutBoxes.addEventListener("mouseleave", () => {
                status.classList.remove("active");

                status.innerText = "?";
                statusTit.classList.remove("left");
                statusTit.classList.remove("right");
            });
        });
    } else {
    }
}
