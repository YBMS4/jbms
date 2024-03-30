window.addEventListener('load',()=>{
    const mention_btn = document.querySelector("#Infos_supplementaire > button");
    const preview_box = document.querySelector("#infos_preview");

    mention_btn.addEventListener("click",()=>{
        preview_box.style.display = "grid";
    });
    preview_box.querySelector("button").onclick = ()=>{
        preview_box.style.display = "none";
    };
});