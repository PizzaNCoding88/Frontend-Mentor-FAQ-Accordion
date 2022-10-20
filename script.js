//GRABBERS


//OLD
// const arrowBtn = document.querySelectorAll(".arrow");
// const faqTitle = document.querySelectorAll(".faq-title")
// const legendTxt = document.querySelectorAll(".faq");
// const collapseBtn = document.querySelector(".collapse");

// //ALTERNATIVE WITH FOR EACH
// // arrowBtn.forEach((btn,index) => {
// //     btn.addEventListener("click" , function(){
// //         console.log(`Arrow No ${index+1} clicked`);
// //     })
// // })

// for (let i=0 ; i < arrowBtn.length ; i++){
//     faqTitle[i].addEventListener("click", function(){
//         legendTxt[i].classList.toggle("hidden");
//         if(!legendTxt[i].classList.contains("hidden")){
//             faqTitle[i].classList.add("bold");
//         } else{
//             faqTitle[i].classList.remove("bold");
//         }
//     })
// };

// collapseBtn.addEventListener("click" , function(){
//     for (let i=0 ; i < arrowBtn.length ; i++){
//         legendTxt[i].classList.add("hidden");
//         faqTitle[i].classList.remove("bold");
//     }
// });

const faqTitles = document.querySelectorAll(".faq-title");
const faqText = document.querySelectorAll(".faq");

for(let i=0; i<faqTitles.length ; i++){    
    faqTitles[i].addEventListener("click", function(){
        faqText[i].classList.toggle("hidden");
        for(let j=0; j<faqText.length;j++){
            if(j!=i){
                faqText[j].classList.add("hidden");
                faqTitles[j].classList.remove("bold");
                faqTitles[i].classList.add("bold");
                if(faqText[i].classList.contains("hidden")){
                    faqTitles[i].classList.remove("bold");
                }
            }
         }
    })
};


