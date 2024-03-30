window.addEventListener("load", ()=>{
    let animationIntervale = 0;
    function animateCompetences_articles(){
        const articles = document.querySelectorAll("#competences article");
        let i = 0;

        animationIntervale = setInterval(()=>{
            if(i == 0){
                articles[i].classList.add("highlight");
                if(articles[2].classList.contains("highlight")) articles[2].classList.remove("highlight");
            }else{
                articles[i].classList.add("highlight");
                articles[(i - 1)].classList.remove("highlight")
            }
            i = i == 2 ? 0 : i + 1;
        }, 3000);
        
    };

    function stopCompetences_animation(){
        clearInterval(animationIntervale);
        animationIntervale = 0;
        const articles = document.querySelectorAll("#competences article");
        articles.forEach(article => {
            if(article.classList.contains("highlight")) article.classList.remove("highlight");
        });
    };

    !function makeElement_visible(){
        const bio = document.querySelector("#about_self");
        const schools = document.querySelectorAll("#education > div > article");
        const competences = document.querySelectorAll("#competences > div > article");
        const experiences = document.querySelectorAll("#experiences > article");
        const languages = document.querySelectorAll("#langues > div > article");
        const peronality = document.querySelector("#personality");
        const references = document.querySelector("#references");
        const contact = document.querySelector("#contacts");
        const visibilityInterseption = new IntersectionObserver((entries,observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(!entry.target.classList.contains("visible")) entry.target.classList.add("visible");
                }else{
                    if(entry.target.classList.contains("visible")) entry.target.classList.remove("visible");
                };
            });
        }, {"rootMargin": "0% 0px -25% 0px"});

        const competencesObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    animateCompetences_articles();
                }else{
                    stopCompetences_animation();
                };
            });
        }, {"rootMargin": "0% 0px -25% 0px"});

        const footerObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    if(!entry.target.classList.contains("visible")) entry.target.classList.add("visible");
                }else{
                    if(entry.target.classList.contains("visible")) entry.target.classList.remove("visible");
                };
            });
        }, {"rootMargin": "0px 0px 0px 0px"});

        [bio, ...schools, ...competences, ...experiences, ...languages, peronality, references].forEach(element => {
            visibilityInterseption.observe(element);
        });
        competencesObserver.observe(document.querySelector("#competences"));
        
        footerObserver.observe(contact);
    }();
});