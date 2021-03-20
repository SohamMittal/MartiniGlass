<!DOCTYPE html>

<html lang="en">

<head>

	<link rel="icon" href="Images/Favico/favico.png">
	<style>
		#mySearch {
			background-color: Blue;
		}
	</style>
	<?php include "includes/Header.php" ?>

<body>

	<?php include "includes/headerTitle.php" ?>

	<?php

	?>

	<?php include "includes/subMenuRibbon.php" ?>
	<?php include "includes/dissappearingMessage.php" ?>

	<?php include "includes/PDO_Database.php" ?>
	<?php include "includes/Glass.php" ?>
	<?php include "includes/Login.php" ?>



	<div id="main-content">
		<div>


			<?php
			if (isset($_POST['Submit'])) {

				if (isset($_POST['searchText'])) {
					getAllData($_POST['searchText']);
				} else {
					getAllData("");
				}
			} else {
				getAllData("");
			}



			?>
		</div>
	</div>


	<!--   Cookies!  -->
	<?php
	$Cookie_Email = '';
	$Cookie_Password = '';
	if (isset($_COOKIE['Cookie_Email']) && isset($_COOKIE['Cookie_Password'])) {
		$Cookie_Email = $_COOKIE['Cookie_Email'];
		$Cookie_Password = $_COOKIE['Cookie_Password'];
	}
	?>
	<!--   Cookies!  -->


	<div id="footer">
		<?php include "includes/Footer.php" ?>
	</div>



	<!-- The Modal -->
	<div id="myModal" class="modal">

		<!-- Modal content -->
		<div class="modal-content">
			<span class="close">&times;</span>

			<h3>LOGIN</h3>
			<form method="post" onsubmit="return false">
				<input id="user" name="username" type="text" placeholder="Username"><br>
				<input id="pass" name="pass" type="password" placeholder="••••••••••••">
				<br>

				<p>Either username or password is incorrect</p>


				<input id="submit" type="submit" name="Submit">
			</form>


		</div>

	</div>

	<?php
	if (isset($_POST['Submit'])) {

		$email = $_POST['username'];
		$password = $_POST['pass'];
		if (Login($email, $password) == true) {
			echo '<script src="scripts/UILoginChange.js">',
			'login();',
			'</script>';
		}
	}

	?>


</body>


</html>