// nav
const headerHeight = document.querySelector(".header").clientHeight;
const navigationLink = document.querySelectorAll("nav li");
const navigationLinkA = document.querySelectorAll("nav li a");
const sectors = document.querySelectorAll(".l_main .section");

window.addEventListener("load", function () {
    ActiveMenu();
    window.addEventListener("scroll", ActiveMenu);

    ClickContent();
    window.addEventListener("click", ClickContent);

    // 공통 스크롤 모션
    const controller = new ScrollMagic.Controller({});

    const target = document.querySelectorAll(".effect");
    const targetLeft = document.querySelectorAll(".effect_left");
    const targetRight = document.querySelectorAll(".effect_right");

    target.forEach((item, index) => {
        var tween = TweenMax.from(item, 0.5, {
            opacity: 0,
            y: "10",
        });
        var scene = new ScrollMagic.Scene({
            triggerElement: item,
            offset: "-100%",
        })
            .setTween(tween)
            .addTo(controller)
            .setClassToggle(item, "active");
    });
    targetLeft.forEach((item, index) => {
        var tween = TweenMax.from(item, 0.5, {
            opacity: 0,
            x: "-10",
        });
        var scene = new ScrollMagic.Scene({
            triggerElement: item,
            offset: "-100%",
        })
            .setTween(tween)
            .addTo(controller)
            .setClassToggle(item, "active");
    });
    targetRight.forEach((item, index) => {
        var tween = TweenMax.from(item, 0.5, {
            opacity: 0,
            x: "10",
        });
        var scene = new ScrollMagic.Scene({
            triggerElement: item,
            offset: "-100%",
        })
            .setTween(tween)
            .addTo(controller)
            .setClassToggle(item, "active");
    });

    initTexts(marquee, textArr);

    marqueeAnimate();
});
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

const wrapTab = document.querySelectorAll(".tab li");
const wrapCont = document.querySelectorAll(".wrap_tab_cont .box");
wrapTab.forEach((item, index) => {
    let status = document.querySelector(".wrap_about .tit .status");
    status.innerText = wrapTab[0].innerText;

    item.addEventListener("click", () => {
        wrapTab.forEach((item) => {
            item.classList.remove("active");
        });
        wrapTab[index].classList.add("active");
        wrapCont.forEach((item) => {
            item.classList.remove("active");
        });
        wrapCont[index].classList.add("active");
        status.innerText = wrapTab[index].innerText;
    });
});

const marquee = document.querySelector(".marquee .marquee_txt");
const textArr = "positive, punctuality, newness, lively, harmony, meticulous, laugh, be active,  positive, punctuality, newness, lively, harmony, meticulous, laugh, be active, ".split(" ");

let count = 0;

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

function marqueeAnimate() {
    count++;
    count = marqueeText(count, marquee, -1);
    window.requestAnimationFrame(marqueeAnimate);
}
// section work full color
workTargetScroll();
window.addEventListener("resize", workTargetScroll);

function workTargetScroll() {
    const bodyContent = document.querySelector("body");
    const targetSection = document.querySelector(".l_main .section_work");
    const targetElement = targetSection.querySelector(".section_tit");
    const footer = document.querySelector("footer");
    window.addEventListener("scroll", function (e) {
        const pos = window.scrollY;
        let currentPer = ((pos - targetSection.offsetTop) / (targetSection.clientHeight - window.innerHeight)) * 100;
        if (pos >= targetSection.offsetTop) {
            bodyContent.classList.add("yellow_in");
            targetElement.style.setProperty("--_p", `${currentPer}%`);
        } else {
            bodyContent.classList.remove("yellow_in");
            targetElement.style.setProperty("--_p", "0%");
        }

        if (pos - footer.offsetHeight >= footer.offsetHeight + targetSection.clientHeight) {
            targetElement.style.setProperty("--_p", "100%");
            document.querySelector(".logo").style.cssText = `opacity: 0; point-event: none;`;
        } else {
            document.querySelector(".logo").style.cssText = `opacity: 1; point-event: all; transition: all .3s`;
        }
    });
}
