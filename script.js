const icons = document.querySelectorAll(".section-1-icons i")

setInterval(()=>{
    const icon = document.querySelector(".section-1-icons i.change");
    icon.classList.remove("change");
    let nextIcon = icon.nextElementSibling;
    if(nextIcon){
        nextIcon.classList.add("change")
    }else{
        icons[0].classList.add("change")
    }
},1000)