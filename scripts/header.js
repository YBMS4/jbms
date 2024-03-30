window.addEventListener("load", function(){
    !function profilePic_handler(){
        const picBox = document.querySelector("header > figure > div");
        const previewBox = document.querySelector("body > header aside");
        
        [previewBox, previewBox.querySelector("button")].forEach(element => {
            element.addEventListener("click", hidePreview);
        });

        picBox.addEventListener("click", ()=>{
            previewBox.className = "show";
        });

        function hidePreview(){
            if(previewBox.classList.contains("show")) previewBox.classList.remove("show"); 
        };

    }();

    !function pageRead_remaining_handler(){
        const progressBox = document.querySelector("#scrollProgress");
        Scroll_POSITION(progressBox);

        document.addEventListener("scroll",()=>{
            Scroll_POSITION(progressBox);
        });
        window.addEventListener("resize",()=>{
            Scroll_POSITION(progressBox);
        });
    }();
});

//--------------------> Calcule Du Scroll (Barre de taille de la page)
function Scroll_POSITION(element){
    const body = document.body;
    let Sr = window.scrollY.toFixed();
    let ScrW = body.scrollHeight - window.innerHeight;
    let Calc = (Sr * 100)/ScrW; // voila le pourcentage
    
    if(Boolean(element)){
        if (0 <= Sr && Calc <= 100){
            element.style.width = Calc + "%";
        };
    }else{
        console.log("element is empty so I return the percentage of the scroll position");
        return Calc + "%";
    };
    
};
