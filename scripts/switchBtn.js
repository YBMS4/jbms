const switchBtn = document.getElementById("switch");
switchBtn.dataset["active"] = false;

function switchBtn_control(actions = {"onActive": ()=>{}, "onDisabled": ()=>{}}){
    switchBtn.addEventListener("click",()=>{
        if(!switchBtn.classList.contains("switched")){
            switchBtn.classList.add("switched");
            switchBtn.dataset["active"] = true;
            if(typeof actions["onActive"] == "function") actions["onActive"]();
        }
        else{
            switchBtn.classList.remove("switched");
            switchBtn.dataset["active"] = false;
            if(typeof actions["onDisabled"] == "function") actions["onDisabled"]();
        };
    }); 
};

// --------------> Je peut directement utiliser cette fonction pour controller mon boutton switch