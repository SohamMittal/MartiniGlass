var interval;
var timeout;

document.addEventListener('DOMContentLoaded',function(){
	var myObj = JSON.parse(localStorage.getItem('connectInfo'));
	
	var ProductAdded=myObj;
	
	if(sessionStorage.getItem("pageFrom")!="Cart")
	{
		
	
	}	
	
	
	var buttons = document.querySelectorAll("button:not(#searchbutton)");
	var messagediv  = document.querySelector("#AddedMessage");
	var i=0;
	for(i=0;i<buttons.length;i++){
		buttons[i].addEventListener("click",buttonClicked);
	}
	
	function buttonClicked(e){
		var name = e.target.parentElement.parentElement.children[0].innerHTML;
		var price  = e.target.parentElement.parentElement.children[3].innerHTML
		var qty = e.target.parentElement.children[0].value;
		
		
		if(ProductAdded==undefined|| ProductAdded.length==0){
			ProductAdded=[{
				GlassName:name,
				Price:price,
				Qty:qty
			}];
		}
		else{
			var temp = {
				GlassName:name,
				Price:price,
				Qty:qty
			}
			ProductAdded.push(temp);
		}
		localStorage.setItem('connectInfo',JSON.stringify(ProductAdded));
	
		
		
		
		
		
	}
});		