window.addEventListener("load",()=>{
    let theme;
    if(document.cookie.length > 0){
        document.cookie.split(";").forEach(element=>{
            if(element.match(/\{*\}/)){
                theme = JSON.parse(element)["theme"];
            };
        });
    };
    
    if(theme){
        changeTheme(theme);
        if(theme == "dark"){
            if(!switchBtn.classList.contains("switched")) switchBtn.classList.add("switched");
            switchBtn.dataset["active"] = true;
        }else{
            if(switchBtn.classList.contains("switched")) switchBtn.classList.remove("switched");
            switchBtn.dataset["active"] = false;
        };
    }else{
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Le thème sombre est préféré par l'utilisateur
            changeTheme("dark");
            if(!switchBtn.classList.contains("switched")) switchBtn.classList.add("switched");
            switchBtn.dataset["active"] = true;
        } else {
            // Le thème clair est préféré par l'utilisateur
            changeTheme("light");
            if(switchBtn.classList.contains("switched")) switchBtn.classList.remove("switched");
            switchBtn.dataset["active"] = false;
        };
    };
});

function changeTheme(mode, setCookies = false){
    if(String(mode).toLocaleLowerCase() == "light"){
        if(document.body.classList.contains("dark")) document.body.classList.remove("dark");
        if(!document.body.classList.contains("light")) document.body.classList.add("light");
    }else if(String(mode).toLocaleLowerCase() == "dark"){
        if(document.body.classList.contains("light")) document.body.classList.remove("light");
        if(!document.body.classList.contains("dark")) document.body.classList.add("dark");
    }else{
        console.error("Syntax error: for the theme change function");
    };

    if(setCookies){
        document.cookie = `${JSON.stringify({"theme": mode})}; Secure; SameSite=Strict`;
    };
};