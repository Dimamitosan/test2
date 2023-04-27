
document.addEventListener("DOMContentLoaded",() =>{

    const menuBtns = document.querySelectorAll(".menu__btn");
    const drops = document.querySelectorAll(".dropdown");
    const dropBtn = document.querySelectorAll(".dropdown__btn");
    const modal = document.getElementById("decision");
    const btn = document.querySelectorAll("dropdown__btn");
    

    menuBtns.forEach(el=>{
        el.addEventListener("click", (e)=>{
            let currentBtn = e.currentTarget;
            let drop = currentBtn.closest(".menu__item").querySelector(".dropdown");
           
            menuBtns.forEach(el=>{
                if (el!== currentBtn ){
                    el.classList.remove("menu__btn--active");
                }
            });
            drops.forEach(el=>{
                if (el!== drop ){
                    el.classList.remove("dropdown--active"); 
                }
            });
            drop.classList.toggle("dropdown--active")
            currentBtn.classList.toggle("menu__btn--active");
        });
    });
    document.addEventListener("click",(e)=>{
        if (!e.target.closest(".menu")){
            menuBtns.forEach(el=>{
                    el.classList.remove("menu__btn--active");
                });
            drops.forEach(el=>{
                el.classList.remove("dropdown--active");
            });
        }
    })
    dropBtn.forEach(el =>{
        el.addEventListener("click", (e)=>{
            let currentDropBtn = e.currentTarget;
            let choosen = currentDropBtn.closest()
        })
    })
    btn.onclick = function(){
        modal.style.display = "flex";
        console.log("qwe")
        menuBtns.forEach(el=>{
            el.classList.remove("menu__btn--active");
        });
    drops.forEach(el=>{
        el.classList.remove("dropdown--active");
    });
    }
    
});
