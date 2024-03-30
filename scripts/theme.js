window.addEventListener("load",()=>{
    const theme = document.cookie.length > 0 ? JSON.parse(document.cookie.split(";")[0])["theme"] : null;
    if(theme){
        changeTheme(theme);
        if(theme == "dark"){
            if(!switchBtn.classList.contains("switched")) switchBtn.classList.add("switched")
            switchBtn.dataset["active"] = true;
        }else{
            if(switchBtn.classList.contains("switched")) switchBtn.classList.remove("switched")
            switchBtn.dataset["active"] = false;
        }
    }else{
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Le thème sombre est préféré par l'utilisateur
            changeTheme("dark");
            if(!switchBtn.classList.contains("switched")) switchBtn.classList.add("switched")
            switchBtn.dataset["active"] = true;
        } else {
            // Le thème clair est préféré par l'utilisateur
            changeTheme("light");
            if(switchBtn.classList.contains("switched")) switchBtn.classList.remove("switched")
            switchBtn.dataset["active"] = false;
        }
    }
});

function changeTheme(mode, setCookies = false){
    const theme_link = document.querySelector("#theme");
    const lightMode = "../styles/light_mode.css";
    const darkMode = "../styles/dark_mode.css";
    if(String(mode).toLocaleLowerCase() == "light"){
        theme_link.href = lightMode;
    }else if(String(mode).toLocaleLowerCase() == "dark"){
        theme_link.href = darkMode;
    }else{
        console.error("Syntax error: for the theme change function");
    };

    if(setCookies){
        document.cookie = `${JSON.stringify({"theme": mode})}; Secure; SameSite=Strict`;
    };
};