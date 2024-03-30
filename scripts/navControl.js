window.addEventListener("load", ()=>{
    !function navControl(){
        const nav = document.querySelector('body > nav');
        const nav_btn = nav.querySelector("& > button");
    
        nav.style.width = nav_btn.clientWidth + "px";
        nav.style.height = nav_btn.clientHeight + "px";
        nav_btn.addEventListener("click",()=>{
            if(!nav_btn.classList.contains("active")){
                nav_btn.classList.add("active");
                
                nav.style.height = "";
                setTimeout(()=>{
                    nav.style.width = "";
                    setTimeout(()=>{
                        if(nav.classList.contains("close")) nav.classList.remove("close");
                    }, 200);
                }, 100);
            }else{
                if(nav_btn.classList.contains("active")) nav_btn.classList.remove("active");
                if(!nav.classList.contains("close")) nav.classList.add("close");
                nav.style.width = nav_btn.clientWidth + "px";
                nav.style.height = nav_btn.clientHeight + "px";
            };
        });
    
        const header = document.querySelector("header");
        const main = document.querySelector("main");
        const footer = document.querySelector("footer");
        
        [header, footer, main, ...nav.querySelectorAll("a")].forEach(element => {
            element.addEventListener("click", () => {
                if(nav_btn.classList.contains("active")) nav_btn.classList.remove("active");
                if(!nav.classList.contains("close")) nav.classList.add("close");
                nav.style.width = nav_btn.clientWidth + "px";
                nav.style.height = nav_btn.clientHeight + "px";
            });
        });
    }();


    !function NavBarControl(){
        const bio = document.querySelector("#about_self");
        const education = document.querySelector("#education");
        const competences = document.querySelector("#competences");
        const experiences = document.querySelector("#experiences");
        const languages = document.querySelector("#langues");
        const personality = document.querySelector("#personality");
        const info = document.querySelector("#infos");
        const links = document.querySelectorAll("body > nav a");
        const header = document.querySelector("#header");

        const navBar_observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting && entry.target.id != "header"){
                    links.forEach((link)=>{
                        const id = link.getAttribute("href").replace("#","").trim();
                        if(entry.target.id === id){
                            if(!link.classList.contains("current")) link.classList.add("current");
                        }else{
                            if(link.classList.contains("current")) link.classList.remove("current");
                        };
                    });
                }else if(entry.target.id === "header"){
                    links.forEach((link)=>{
                        if(link.classList.contains("current")) link.classList.remove("current");
                    });
                };
            });
        },{"rootMargin": "-30% 0px -50% 0px"});

        const header_observer = new IntersectionObserver((entries, observer)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting){
                    links.forEach((link)=>{
                        if(link.classList.contains("current")) link.classList.remove("current");
                    });
                }
            });
        },{"rootMargin": "-50% 0px 0% 0px"});


        [bio, education, competences, experiences, languages, personality, info].forEach(element => {
            navBar_observer.observe(element);
        });

        header_observer.observe(header);
    }();
});