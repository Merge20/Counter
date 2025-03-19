document.addEventListener("DOMContentLoaded", function(){
    let increase = document.querySelector(".inc");
    let decrease = document.querySelector(".dec");
    let reset = document.querySelector(".reset");
    let number = document.querySelector(".number");

    let num=0;

    increase.addEventListener("click", function(){
        num++;
        number.innerText=(num);
    });
    
    decrease.addEventListener("click", function(){
        num--;
        number.innerText=(num);
    });

    reset.addEventListener("click", function(){
        num=0;
        number.innerText=(num);
    });
});