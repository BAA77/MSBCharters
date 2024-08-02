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

    // Image Section Slide: Story-Mission
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

    let ourValues = document.querySelectorAll(".up-slide");
        ourValues = [...ourValues];
    const z = 100;

    for (const section of ourValues) {
        let sectionTop = section.getBoundingClientRect().top;
        let deviceHeight = window.innerHeight;

        if (sectionTop < deviceHeight - z) {
            section.classList.add("our-values-reveal");
        }
        else {
            section.classList.remove ("our-values-reveal");
        }
    }
})

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