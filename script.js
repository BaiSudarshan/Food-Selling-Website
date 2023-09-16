const icons = document.querySelectorAll(".section-1-icons i")
const menu = document.querySelector(".menu").addEventListener('click', ()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})


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