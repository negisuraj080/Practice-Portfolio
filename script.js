(function toggleTheme() {
    let dayNight = document.querySelector(".dayNight");
    let html = document.querySelector("html");
    
    dayNight.addEventListener("click", () => {
        html.classList.toggle("night");
    });
})();



let typingEffect = new Typed("#text",{
    strings:["Coder"],
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1000,
})

let linkItems = document.querySelectorAll('.hyperlink[href]');
linkItems.forEach((item) => {
    item.addEventListener('click',(evt)=>{
        evt.preventDefault();
        let href = evt.target.getAttribute('href');
        if(href != ''){
            let scrollto = document.querySelector(`${href}`);
            scrollto.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

