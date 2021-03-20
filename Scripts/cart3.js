document.addEventListener('DOMContentLoaded',function(){
	if(sessionStorage.getItem("isloggedin")!="yes"){
		alert('Please login and then access the cart');
		window.location.href="./index.php";
		localStorage.clear();
	}
	
	
	
	var total = document.querySelector("#subtotal");
	sessionStorage.setItem("total", total.innerHTML);
});	