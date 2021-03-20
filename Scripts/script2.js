document.addEventListener('DOMContentLoaded',function(){
	
	var a = document.querySelector("body");
	a.addEventListener('click',(e)=>{
		
		
	})
	
	var td = document.querySelector("table").children[0];
	
	
	var alltables =document.querySelectorAll("table");
	
	var tableBody;
	for(i1=0;i1<alltables.length;i1++){
		tableBody= alltables[i1].children[0];
		
		
		
		var imgv =0;
		var i=0;
		var j=0;
		
		
		for(i=0;i<tableBody.childElementCount;i++){
			var tr = tableBody.children[i];
			
			
			for(j=0;j<tr.childElementCount;j++){
				
				
				
				tr.children[j].addEventListener("mouseenter",mouseEntered);
				
				
				tr.children[j].addEventListener("mouseleave",mouseLeft);
				
			}
			
		}
	}
	
	function mouseEntered(e){
		
		var backPath=e.target.style.backgroundImage;
		
		var getSelected = document.querySelector("#selected");
		var path = getSelected.innerHTML.replace(/\s/g,'_');
		
		var lastFive = backPath.substr(backPath.length - 7);
		lastFive=lastFive.slice(0,5);
		
		
		
		
		
		var img = "url('./Images/"+path+"/"+imgv+".jpg')";
		
		var newBackPath = "url('./Images/"+path+"/HoverImages/" + lastFive+"')";
		
		
		e.target.style.backgroundImage =  newBackPath;
		
		e.target.children[0].style.display="block";	
		
	}
	
	function mouseLeft(e){
		var backPath=e.target.style.backgroundImage;
		var getSelected = document.querySelector("#selected");
		var path = getSelected.innerHTML.replace(/\s/g,'_');
		
		var lastFive = backPath.substr(backPath.length - 7);
		lastFive=lastFive.slice(0,5);
	
	var newBackPath = "url('./Images/"+path+"/"+lastFive+"')";
	
	
	
	
	
	e.target.style.backgroundImage =  newBackPath;
	e.target.children[0].style.display="none";
	
	}
	
	
	
	});
		