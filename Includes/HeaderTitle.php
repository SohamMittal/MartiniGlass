<div id="header">
	<div id ="headDiv">
		
		<?php
			$SearchString = '';
			if(isset($_POST['Submit'])){
				$SearchString = $_POST['searchText'];
			}
			
		?>
		
		<form method= "POST">
			<input name = "searchText" value = '<?php echo $SearchString ;?>' id ="searchbar"type="text" placeholder="Search"/>
			<button name = "Submit" id="searchbutton" ></button> 
			<form>
				
				<h1>Martini Glass</h1>
				
				<p id="cart"class ="tab"><img class="icon" src="./Icons/cart.png" />
					<span>Cart</span>
				</p>
				
				<p id="login"class ="tab">
					<img class="icon" src="./Icons/login.png" /><span>Login / Sign up</span>
				</p>
				
				
				
				
			</div>
			
		</div>					