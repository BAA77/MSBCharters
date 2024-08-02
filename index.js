// Reveal Section

window.addEventListener("scroll", () => {
    let sectionReveal = document.querySelectorAll(".reveal");
        sectionReveal = [...sectionReveal];
    const yTranslate = 100;

    for (const section of sectionReveal) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - yTranslate) {
            section.classList.add("section-reveal");
        }
        else {
            section.classList.remove ("section-reveal");
        }
    }

    let sectionRevealOpp = document.querySelectorAll(".reveal-opp");
        sectionRevealOpp = [...sectionRevealOpp];
    const xTranslate = 100;

    for (const section of sectionRevealOpp) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - xTranslate) {
            section.classList.add("section-reveal-opp");
        }
        else {
            section.classList.remove ("section-reveal-opp");
        }
    }

    let upSlide = document.querySelectorAll(".up-slide");
        upSlide = [...upSlide];
    const z = 100;

    for (const section of upSlide) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - z) {
            section.classList.add("up-slide-reveal");
        }
        else {
            section.classList.remove ("up-slide-reveal");
        }
    }
})

// header/navigation bar
    // menu toggle bar
    const menuBtn = document.querySelector(".menu-toggle-bars-wrapper");
    let menuSwitch = true;
    menuBtn.addEventListener("click", () => {
        const menuBar1 = document.querySelector("#menu-toggle-bar1");
        const menuBar2 = document.querySelector("#menu-toggle-bar2");
        const menuBar3 = document.querySelector("#menu-toggle-bar3");
        const navigation = document.querySelector(".navigation");
        const navList = document.querySelector(".nav-ul");
        let navListItem = document.querySelectorAll(".nav-list-item");
        navListItem = [...navListItem];
        if (menuSwitch) {
            menuSwitch = false;
            navigation.style.width = "63vw";
            navList.style.display = "flex";
            menuBar2.style.display = "none";
            menuBtn.style.height = "35px";
            menuBar1.classList.add("menu-toggle-bars-on");
            menuBar3.classList.add("menu-toggle-bars-on-alt");
            menuBar1.classList.remove("menu-toggle-bars-off");
            menuBar3.classList.remove("menu-toggle-bars-off");
    
            for (let list of navListItem) {
                list.style.margin = "auto";
            }
        }
        else if (menuSwitch == false) {
            menuSwitch = true;
            navigation.style.width = "0vw";
            navList.style.display = "none";
            menuBar1.classList.replace("menu-toggle-bars-on", "menu-toggle-bars-off");
            menuBar3.classList.replace("menu-toggle-bars-on-alt", "menu-toggle-bars-off");
            menuBar2.style.display = "block";
    
            for(let list of navListItem) {
                list.style.marginRight = "0px";
            }
        }
    });
    
    if (screen.width <= 870) {
        const menuBar1 = document.querySelector("#menu-toggle-bar1");
        const menuBar2 = document.querySelector("#menu-toggle-bar2");
        const menuBar3 = document.querySelector("#menu-toggle-bar3");
        const navigation = document.querySelector(".navigation");
        const navList = document.querySelector(".nav-ul");
        let navListItem = document.querySelectorAll(".nav-list-item");
        navListItem = [...navListItem];
        document.onclick = function (e) {
            if (e.target != navigation && e.target != document.querySelector("#menu-toggle-bar1") && e.target != document.querySelector("#menu-toggle-bar2") && e.target != document.querySelector("#menu-toggle-bar3") && e.target != document.querySelector(".menu-toggle-bars-wrapper") && menuSwitch == false) {
                menuSwitch = true;
                navigation.style.width = "0vw";
                navList.style.display = "none";
                menuBar1.classList.replace("menu-toggle-bars-on", "menu-toggle-bars-off");
                menuBar3.classList.replace("menu-toggle-bars-on-alt", "menu-toggle-bars-off");
                menuBar2.style.display = "block";
    
                for(let list of navListItem) {
                    list.style.marginRight = "0px";
                }
                console.log(e.target);
            }
        }
    }

// Landing page main visuals
setTimeout(() => {
    document.querySelector(".landing-page-visuals-text-v-line").style.height = "80px";
    if (window.innerWidth <= 1150) {
        document.querySelector(".landing-page-visuals-text-v-line").style.height = "95px";
    }
}, 1000);
setTimeout(() => {
    document.querySelector(".landing-page-visuals-text-p").style.visibility = "visible";
    document.querySelector(".landing-page-visuals-text-p").style.backgroundColor = "transparent";
}, 1500);
setTimeout(() => {
    document.querySelector(".landing-page-visuals-h1").style.transform = "scale(1)"
}, 200);

// Experience and Service
const leftArrow = document.querySelector("#fa-arrow-left");
const rightArrow = document.querySelector("#fa-arrow-right");
const scrollContainer = document.querySelector(".experience-service-top");
const slidePageData = document.querySelector(".slide-page-number");
const faArrowLeftBorder = document.querySelector(".arrow-left");
const faArrowRightBorder = document.querySelector(".arrow-right");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

faArrowRightBorder.addEventListener("click", () => {
    leftArrow.style.color = "#043632";
    faArrowLeftBorder.style.border = "4px solid #043632";
    faArrowLeftBorder.style.width = "59px";
    faArrowLeftBorder.style.height = "59px";
    faArrowLeftBorder.style.cursor = "pointer";
    rightArrow.style.color = "#0436326a";
    faArrowRightBorder.style.border = "4px solid #0436326a";
    faArrowRightBorder.style.width = "49px";
    faArrowRightBorder.style.height = "49px";
    faArrowRightBorder.style.cursor = "auto";
    scrollContainer.scrollLeft += window.innerWidth;
    slidePageData.textContent = "2 of 2"
});

faArrowLeftBorder.addEventListener("click", () => {
    rightArrow.style.color = "#043632";
    faArrowRightBorder.style.border = "4px solid #043632";
    faArrowRightBorder.style.width = "59px";
    faArrowRightBorder.style.height = "59px";
    faArrowRightBorder.style.cursor = "pointer";
    leftArrow.style.color = "#0436326a";
    faArrowLeftBorder.style.border = "4px solid #0436326a";
    faArrowLeftBorder.style.width = "49px";
    faArrowLeftBorder.style.height = "49px";
    faArrowLeftBorder.style.cursor = "auto";
    scrollContainer.scrollLeft -= window.innerWidth;
    slidePageData.textContent = "1 of 2"
});

// Browse Gallery

const galleryLeftArrow = document.querySelector(".gallery-controls-con-left");
const galleryRightArrow = document.querySelector(".gallery-controls-con-right");
const galleryScroll = document.querySelector(".gallery-img-wrap");
const gallerySPace = window.innerWidth*75/100;

galleryScroll.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

galleryRightArrow.addEventListener("click", () => {
    galleryScroll.scrollLeft += gallerySPace;
    galleryLeftArrow.classList.replace("gallery-controls-con-right", "gallery-controls-con-left");
    galleryRightArrow.classList.replace("gallery-controls-con-left", "gallery-controls-con-right");
});

galleryLeftArrow.addEventListener("click", () => {
    galleryScroll.scrollLeft -= gallerySPace;
    galleryRightArrow.classList.replace("gallery-controls-con-right", "gallery-controls-con-left");
    galleryLeftArrow.classList.replace("gallery-controls-con-left", "gallery-controls-con-right");
});

// Footer News-Letter Subscription

function subscribe() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "regnantugboga@gmail.com",
        Password: "2AB9795659A5CB93CBAE3CE34C2A53152B1A",
        To: 'regnanttycoon@gmail.com',
        From: "regnantugboga@gmail.com",
        Subject: "MSB Charters Newsletter Subscription",
        Body: "Someone has just subscribed to MSB Charters newsletter" + "<br>" + "<br>"
            + "<br> EMAIL: " + " " + document.querySelector("#email").value + "<br>" + "<br>" + "<br>"
    }).then(() => {
        window.location.reload(true);
    })
}