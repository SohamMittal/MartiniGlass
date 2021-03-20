<!DOCTYPE html>

<html lang="en">

<head>
	<link rel="icon" href="Images/Favico/favico.png">
	<?php include "includes/cardHeader.php" ?>
	<?php include "includes/PDO_Database.php" ?>
</head>

<body>
	<div>
		<div id="wrapper">
			<?php include "includes/cardRibbon.php" ?>

			<div id="main-content">
				<div>
					<p id="Pageno">2</p>
					<p id="trhead">Payment</p>
					<table>
						<tr>
							<td colspan="2">
								<span>Card Number</span>
								<span class="req"> required</span>
							</td>
						</tr>

						<tr>
							<td colspan="2">
								<input id="card" name="card" type="text">
							</td>
						</tr>
						<tr class="error errorNoShow">
							<td colspan="2"></td>
						</tr>


						<tr>
							<td>
								<span>Expires on</span>
								<span class="req"> required</span>
							</td>
						</tr>


						<tr>
							<td>
								<select id="Month">
									<option>Month</option>

								</select>
							</td>
							<td>

								<select id="Year">
									<option>Year</option>

								</select>
							</td>
						</tr>

						<tr class="error errorNoShow">

							<td colspan="3"></td>
						</tr>

						</tr>

						<tr>
							<td>
								<span>Security Code</span>
								<span class="req">required</span>
							</td>

						</tr>
						<tr>
							<td>
								<input name="cvc" id="secCode" type="text">
							<td>
								<img class="cvc" src="./Icons/cvc.png">
							</td>
							</td>
						</tr>
						<tr class="error errorNoShow">
							<td></td>
						</tr>
						<tr class="button">
							<td><button>PAY</button></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div id="rightWrapper">
			<div>
				<ul>
					<li class="head"><span id="lihead">Order Summary </span><span class="right edit">Edit cart</span></li>
					<li> <span>Subtotal:</span><span id="subtotal" class="right"><?php if (isset($_SESSION['Subtotal'])) {
																						echo "$" . $_SESSION['Subtotal'];
																					} ?></span></li>
					<li> <span>Shipping & Handling:</span><span class="right"><?php echo "$10.5"; ?></span></li>
					<li> <span>Tax:</span><span id="tax" class="right"><?php if (isset($_SESSION['Tax'])) {
																			echo "$" . $_SESSION['Tax'];
																		} ?></span></li>
					<li class="total"> <span>Order Total:</span><span id="total" class="right"><?php if (isset($_SESSION['Total'])) {
																									echo "$" . $_SESSION['Tax'] + $_SESSION['Subtotal'];
																								} ?></span></li>
				</ul>

			</div>
		</div>
	</div>

	<!-- The Modal -->
	<div id="myModal" class="modal">

		<!-- Modal content -->
		<div class="modal-content">

			<p>Hurrah! Your order has been placed successfully! Thank you for shopping with us.</p>
			<p> You can either <span id="red">click here</span> to go back to home page or you will be redirected in <span id="timer">15</span> second.</p>
		</div>

	</div>



	<div style="clear:both"></div>
	<div id="footer">

		<?php include "includes/Footer.php" ?>
	</div>

</body>

</html>