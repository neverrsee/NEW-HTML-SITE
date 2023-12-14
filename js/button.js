/*var x = 10;

x = x % 4
console.log(x)*/

var baton = document.getElementById("btn");
var flag = false;
//console.log(baton);

function buy() {
	if (flag == false){
	baton.classList.add('no_payment');
	baton.innerHTML = "ключики ещё остались ";
	flag = true;	
	} else {
	baton.classList.remove('no_payment');
	baton.innerHTML = "К оплате ";
	flag = false;
	}
	
}
























// function buy() {
	// if (flag == false){
	// baton.style.background = "black";
	// baton.style.color = 'lime';
	// baton.innerHTML = "ключики ещё остались ";
	// flag = true;	
	// } else {
    // baton.style.background = "white";
	// baton.style.color = 'crimson';
	// baton.innerHTML = "К оплате ";
	// flag = false;
	// }
	
// }