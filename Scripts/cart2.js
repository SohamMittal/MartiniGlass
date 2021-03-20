document.addEventListener('DOMContentLoaded',function(){
	setSubtotal();
	sessionStorage.setItem("pageFrom", "Cart");
	
	var gst = document.querySelector("#Gst");
	var qgst = document.querySelector("#Qgst");
	var sub = document.querySelector("#subtotal");
	var total = document.querySelector("#total");
	
	
	var myObj = JSON.parse(localStorage.getItem('connectInfo'));
	var counter;
	var tableBody = document.querySelector("table").children[0];
	
	var del = document.querySelectorAll("img.delete");
	tableBody.addEventListener('click',function(e){
		if(e.target.textContent=="edit")
		{
			e.target.textContent="save";
			e.target.parentElement.children[2].innerHTML="<input type='text'>";
		}
		
		
		else if(e.target.textContent=="save")
		{
			e.target.textContent="edit";
			e.target.parentElement.children[2].innerHTML=e.target.parentElement.children[2].children[0].value;
			var qty = parseInt(e.target.parentElement.children[2].textContent);
			if(e.target.parentElement.children[2].textContent.length==0){
				qty=1;
				e.target.parentElement.children[2].textContent="1";
			}
			if(e.target.parentElement.children[2].textContent=="0"){
				e.target.parentElement.children[5].children[0].click()
				return;
			}
			getCount(e);
			
			myObj[counter].Qty = e.target.parentElement.children[2].textContent;
			
			
			
			
			e.target.parentElement.children[3].textContent="$"+(parseFloat(e.target.parentElement.children[1].textContent.slice(1))*qty).toFixed(2);
			
			
			localStorage.setItem('connectInfo',JSON.stringify(myObj));
			setSubtotal();
			
			
		}
		function getCount(e){
			var tableBody = e.target.parentElement.parentElement;
			var editr = e.target.parentElement;
			
			for(i=0;i<tableBody.childElementCount;i++){
				if(editr==tableBody.children[i])
				counter = i-1;
				
			}
			
		}
		
	})
	for(i=0;i<del.length;i++){
		del[i].addEventListener('click',deleteTr)
	}
	
	function setSubtotal(){
		
		var tablebody= document.querySelector("table").children[0];
		
		var subtotal=0;
		for(i=1;i<tablebody.childElementCount-4;i++){
			
			subtotal += parseFloat(tablebody.children[i].children[3].innerHTML.slice(1));
			
		}
		var sub = document.querySelector("#subtotal");
		
		sub.innerHTML="$"+subtotal.toFixed(2);
		
		setGst();
		setQgst();
		setTotal();
	}
	
	function setGst(){
		
		var gst = document.querySelector("#Gst");
		var qgst = document.querySelector("#Qgst");
		var sub = document.querySelector("#subtotal");
		var total = document.querySelector("#total");
			
			gst.innerHTML = "$"+(0.05* parseFloat(sub.innerHTML.slice(1))).toFixed(2);
	}
	function setQgst(){
		
		var gst = document.querySelector("#Gst");
		var qgst = document.querySelector("#Qgst");
		var sub = document.querySelector("#subtotal");
		var total = document.querySelector("#total");
			
			console.log(sub.innerHTML);
			qgst.innerHTML = "$"+(9.975* parseFloat(sub.innerHTML.slice(1))/100).toFixed(2);
			console.log(qgst.innerHTML)
	}
	
	function setTotal(){
		var gst = document.querySelector("#Gst");
		var qgst = document.querySelector("#Qgst");
		var sub = document.querySelector("#subtotal");
		var total = document.querySelector("#total");
			
			
			total.innerHTML = "$"+(parseFloat(sub.innerHTML.slice(1))+parseFloat(gst.innerHTML.slice(1))+parseFloat(qgst.innerHTML.slice(1))).toFixed(2);
	}
	
	function deleteTr(e){
		
		
		
		var tableBody = e.target.parentElement.parentElement.parentElement;
		var editr = e.target.parentElement.parentElement;
		console.log(editr)
		var len=tableBody.childElementCount;
		
		
		for(i=0;i<len;i++){
			if(editr==tableBody.children[i]){
				
				myObj.splice(i-1,1);
				len = len-1;
				console.log(i-1);
			}
		}
		
		localStorage.setItem('connectInfo',JSON.stringify(myObj));
		e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
	}
});