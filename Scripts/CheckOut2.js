document.addEventListener('DOMContentLoaded',function(){
	
	if(sessionStorage.getItem("total")==null){
		alert("Please follow the correct sequence!")
		
		window.location.replace("./index.php");
		}
	
	var sub = document.querySelector("#subtotal");
	var tax  = document.querySelector("#tax");
	var total = document.querySelector("#total");
	
	sub.innerHTML = sessionStorage.getItem("total");
	console.log(sessionStorage.getItem("total"))
	tax.innerHTML = "$"+((parseFloat(sub.innerHTML.slice(1))*14.975/100).toFixed(2)).toString()
total.innerHTML = "$"+((parseFloat(sub.innerHTML.slice(1))+parseFloat(tax.innerHTML.slice(1))+10.5).toFixed(2)).toString()
});


	