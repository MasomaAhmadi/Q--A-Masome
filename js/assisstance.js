export {exp,checkDisplay2, checkDisplay3, checkDisplay, add, explanation,exp2,exp3,add2,add3,explanation2,explanation3,icon, icon2, icon3}
let exp = document.getElementById("explanation");
let exp2 = document.getElementById("explanation2");
let exp3 = document.getElementById("explanation3");
let add = document.getElementById('add');
let add2 = document.getElementById('add2');
let add3= document.getElementById('add3');

function explanation() {
    if (exp.classList.contains('hidden')) {
        exp.classList.remove('hidden')
        exp.classList.add('visible')
        add.name = "remove-circle-outline";
    }
    else {
        exp.classList.remove('visible')
        exp.classList.add('hidden')
        add.name = "add-circle-outline";
    }
    // exp.classList.toggle('show')
}
function explanation2() {
    if (exp2.classList.contains('hidden')) {
        exp2.classList.remove('hidden')
        exp2.classList.add('visible')
        add2.name = "remove-circle-outline";
    }
    else {
        exp2.classList.remove('visible')
        exp2.classList.add('hidden')
        add2.name = "add-circle-outline";
    }
}
function explanation3() {
    if (exp3.classList.contains('hidden')) {
        exp3.classList.remove('hidden')
        exp3.classList.add('visible')
        add3.name = "remove-circle-outline";
    }
    else {
        exp3.classList.remove('visible')
        exp3.classList.add('hidden')
        add3.name = "add-circle-outline";
    }
}

function icon() {
    if (exp.classList.contains('visible')) {
        add.name = "remove-circle-outline";
    }
    else{add.name = "add-circle-outline";}
}
function icon2() {
    if (exp.classList.contains('visible')) {
        add2.name = "remove-circle-outline";
    }
    else{add2.name = "add-circle-outline";}
}
function icon3() {
    if (exp.classList.contains('visible')) {
        add3.name = "remove-circle-outline";
    }
    else{add3.name = "add-circle-outline";}
}

function checkDisplay() {
    // let exps = [exp, exp2, exp3]
    // for (let i = 0; i < exps.length; i++){
    //     if (exps[i].style.display === 'visible') {
    //         exps[i+1].style.display !== 'visible' &&
    //         exps[i + 2].style.display === 'hidden'
    //     }
    // }
    exp2.classList.add('hidden')
    exp3.classList.add('hidden')
}

function checkDisplay2() {
    exp.classList.add("hidden");
	exp3.classlist.add("hidden");
}
function checkDisplay3() {
    exp.classList.add("hidden");
	exp2.classList.add("hidden");
}