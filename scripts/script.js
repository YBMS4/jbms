function loading_fading(){
    const loading = document.querySelector("#loading");
    loading.style.opacity = 0;
    setTimeout(()=>{
        loading.style.display = "none";
    }, 400);
};
window.addEventListener("load",()=>{
    // ------------------> Control du boutton Switch
    switchBtn_control({
        "onActive": ()=>{
            changeTheme("dark", true);
        },
        "onDisabled": ()=>{
            changeTheme("light", true);
        },
    });

    setTimeout(()=>{
        loading_fading();
    }, 500);
    
});

