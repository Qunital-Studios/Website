// ----- SCROLL ANIM OBSERVER

const  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("da");
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

var headerMenuButton = document.querySelector(".headerMenuButton");
var headerMenu = document.querySelector(".headerMenu");
var headerMenuIsClicked = false;
headerMenuButton.addEventListener("click", () => {
        headerMenuIsClicked = !headerMenuIsClicked;
        if(headerMenuIsClicked){
            Array.from(headerMenuButton.children).forEach(child => {
            child.classList.add("clicked");
            headerMenuButton.classList.add("clicked");
            headerMenu.classList.add("show");
            Array.from(headerMenu.children).forEach(child => {
                child.classList.add("show")
            })
            setTimeout( () => {
                document.querySelector(".bannerVideo").pause();
            }, 400)
            })
        }else{
            Array.from(headerMenuButton.children).forEach((child) => {
                child.classList.remove("clicked");
                headerMenuButton.classList.remove("clicked");
            })
            headerMenu.classList.remove("show");
            Array.from(headerMenu.children).forEach(child => {
                child.classList.remove("show")
            })
            document.querySelector(".bannerVideo").play();
        }
    
})