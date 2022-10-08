

const cube = document.querySelector("#board > div");
const elt = document.querySelectorAll('input[type="range"]');
cube.parentElement.style.setProperty("--scale",1)
function update(){
	//let value = `translate3d(${elt[1].value}px, ${elt[2].value}px, ${elt[3].value}px) rotate(${elt[4].value}deg, ${elt[5].value}deg, ${elt[6].value}deg) scale(${cube.parentElement.style.getPropertyValue("--scale")})`
	let scale_value = cube.parentElement.style.getPropertyValue("--scale");
	let value = `translateX(${elt[1].value}px) translateY(${elt[2].value}px) translateZ(${elt[3].value}px) rotateX(${elt[4].value}deg) rotateY(${elt[5].value}deg) rotateZ(${elt[6].value}deg) scale3d(${scale_value}, ${scale_value}, ${scale_value})`
	console.log(value)
	cube.style.transform = value;
}

/*update perspective*/
function update_perspective(){
	console.log(cube.parentElement)
	cube.parentElement.style.perspective = `${elt[0].value}px`
	/*return `${elt[0].value}px`;*/
}
elt[0].onchange = update_perspective;
/*end update perspective*/


for(let et of elt){
	if(et===elt[0])
		continue
	et.onchange = update;
}

/* for Right Seetings*/
const elt_num = document.querySelectorAll('input[type="number"]');
function datatChange(){
	cube.parentElement.style.setProperty("--cubeSize",`${elt_num[0].value}px`);
	cube.parentElement.style.setProperty("--space",`${elt_num[1].value}px`);
	cube.parentElement.style.setProperty("--scale",elt_num[2].value);
	update();
}

for(let et of elt_num){
	et.onchange = datatChange;
}
/*ending right settings*/

/*data changer*/
function elementChange(){
	this.previousElementSibling.innerHTML = this.value;
}

for(let elem of elt){
	elem.addEventListener("change",elementChange, false);
}

/*ending datachanger*/