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