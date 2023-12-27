import {
	add,
	explanation,
	add2,
	add3,
	explanation2,
	explanation3,
	checkDisplay,
	checkDisplay2,
    checkDisplay3,
    icon, icon2, icon3
} from "./assisstance.js";

add.addEventListener('click', () => {
    // exp.classList.toggle("show");
	explanation();
    checkDisplay();
    icon()
})
add2.addEventListener('click', () => {
    explanation2()
    checkDisplay2()
    icon2()
})
add3.addEventListener('click', () => {
    explanation3()
    checkDisplay3()
    icon3()
})

