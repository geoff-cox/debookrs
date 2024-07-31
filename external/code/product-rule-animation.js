/* */

// select all elements
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");

function show_step1(){

    img1.src="../../../assets/images/product-rule-animation-01.gif"
    img2.src=""
    img3.src=""
    
    img1.style.display = "block";
    img2.style.display = "none";
    img3.style.display = "none";
}

function show_step2(){
    img1.src=""
    img2.src="../../../assets/images/product-rule-animation-02.gif"
    img3.src=""

    img1.style.display = "none";
    img2.style.display = "block";
    img3.style.display = "none";
}

function show_step3(){
    img1.src=""
    img2.src=""
    img3.src="../../../assets/images/product-rule-animation-03.gif"

    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "block";
}