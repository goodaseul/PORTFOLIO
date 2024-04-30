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
