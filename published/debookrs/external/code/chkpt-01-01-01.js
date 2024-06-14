/* */

// select all elements
const rb1 = document.getElementById("rb1");
const rb2 = document.getElementById("rb2");
const fbk = document.getElementById("fb-field");

//set event listener for radio buttons
$(".radio").click(checkAnswer);

function checkAnswer(){
	if( rb1.checked ){
        fbk.innerHTML = "&#10008; Incorrect. The dependent variable has derivatives applied to it."
        fbk.style = "font-size: 12pt; color:red"
    }else if( rb2.checked ){
		fbk.innerHTML = "&#10004; Correct!"
        fbk.style = "font-size: 12pt; color:green"
    }
}
