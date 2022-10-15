//GRABBERS

const arrowBtn = document.querySelectorAll(".arrow");
const legendTxt = document.querySelectorAll(".faq");
const collapseBtn = document.querySelector(".collapse");

//ALTERNATIVE WITH FOR EACH
// arrowBtn.forEach((btn,index) => {
//     btn.addEventListener("click" , function(){
//         console.log(`Arrow No ${index+1} clicked`);
//     })
// })

for (let i=0 ; i < arrowBtn.length ; i++){
    arrowBtn[i].addEventListener("click" , function(){
        // console.log(`Arrow No ${i+1} clicked`);
        legendTxt[i].classList.toggle("hidden");
    })
}

collapseBtn.addEventListener("click" , function(){
    for (let i=0 ; i < arrowBtn.length ; i++){
        legendTxt[i].classList.add("hidden");
    }
});