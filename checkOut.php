<!DOCTYPE html>

<html lang="en">

<head>
	<link rel="icon" href="Images/Favico/favico.png">

	<?php include "includes/checkoutHeader.php" ?>
</head>

<body>
	<div>
		<div id="wrapper">

			<?php include "includes/CheckoutRibbon.php" ?>

			<div id="main-content">
				<div>
					<p id="Pageno">1</p>
					<p id="trhead">Ship To</p>



					<table>

						<tr>
							<td><span>First Name</span><span class="req">required</span></td>
							<td><span>Last Name</span><span class="req">required</span></td>
						</tr>
						<tr id="name">
							<td>
								<input name="fname" type="text">
							</td>
							<td>
								<input name="lname" type="text">
							</td>
						</tr>
						<tr class="noerror errorNoShow">
							<td></td>
							<td></td>
						</tr>

						<tr>
							<td>
								<span> Street Address
								</span>
								<span <?php if (isset($_POST['address'])) {
											echo "class = 'errorHere'";
										} ?> class="req">required</span>
							</td>
						</tr>
						<tr <?php if (isset($_POST['address'])) {
								echo "class = 'errorHere'";
							} ?> id="address">
							<td colspan="2"><input name="address" class="Rowinput" type="text"></td>
						</tr>
						<tr class="noerror errorNoShow">
							<td></td>
						</tr>
						<tr>
							<td><span>Zip Code</span><span class="req">required</span></td>
							<td><span>City</span><span class="req">required</span></td>
						</tr>
						<tr <?php if (isset($_POST['address'])) {
								echo "class = 'errorHere'";
							} ?> id="zipCity">
							<td><input name="zip" type="text"></td>
							<td><input name="city" type="text"></td>
						</tr>
						<tr class="noerror errorNoShow">
							<td></td>
							<td></td>
						</tr>

						<tr <?php if (isset($_POST['address'])) {
								echo "class = 'errorHere'";
							} ?>>
							<td><span>State</span><span class="req">required</span></td>
						</tr>
						<tr <?php if (isset($_POST['address'])) {
								echo "class = 'errorHere'";
							} ?> id="state">
							<td colspan="2">
								<select class="Rowinput" id="cars" name="cars">
									<option value="volvo">Please Select</option>
									<option value="saab">Quebec</option>
									<option value="fiat">British Columbia</option>
									<option value="audi">Manitoba</option>
								</select>
							</td>
						</tr>
						<tr <?php if (isset($_POST['address'])) {
								echo "class = 'errorHere'";
							} ?> class="noerror errorNoShow">
							<td colspan="2"></td>
						</tr>
						<tr>
							<td><span>Phone number</span><span class="req">required</span></td>
						</tr>
						<tr <?php if (isset($_POST['Phone'])) {
								echo "class = 'errorHere'";
							} ?> id="phone">
							<td colspan="2"><input name="phone" class="Rowinput" type="text"></td>
						</tr>
						<tr <?php if (isset($_POST['Number'])) {
								echo "class = 'errorHere'";
							} ?> class="noerror errorNoShow">
							<td colspan="2"></td>
						</tr>
						<tr <?php if (isset($_POST['Isname'])) {
								echo "class = 'errorHere'";
							} ?> class="checkbox">
							<td><input class="check" type="checkbox">Use as billing address</td>
						</tr>
						<tr <?php if (isset($_POST['zip'])) {
								echo "class = 'errorHere'";
							} ?>class="button">
							<td colspan="2"><button>NEXT</button></td>
						</tr>
					</table>



				</div>

			</div>
		</div>
		<div id="rightWrapper">
			<div>
				<ul>
					<li class="head"><span id="lihead">Order Summary </span><span class="right edit">Edit cart</span></li>
					<li> <span>Subtotal:</span><span id="subtotal" class="right"></span></li>
					<li> <span>Shipping & Handling:</span><span class="right">$10.5</span></li>
					<li> <span>Tax:</span><span id="tax" class="right">$0</span></li>
					<li class="total"> <span>Order Total:</span><span id="total" class="right">$0</span></li>
				</ul>

			</div>
		</div>
	</div>
	<div style="clear:both"></div>
	<div id="footer">

		<span>Follow Us on:</span>

		<a href="https://www.instagram.com/soham3000/"><img class="footericon" src="./Icons/1.png" /></a>
		<a href="https://twitter.com/?lang=en"><img class="footericon" src="./Icons/2.png" /></a>
		<a href="https://www.facebook.com/soham3000"><img class="footericon" src="./Icons/3.png" /></a>
	</div>

</body>

</html>