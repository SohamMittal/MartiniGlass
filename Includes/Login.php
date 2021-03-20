<?php
	
	
	 function Login($username, $password){
		try{
			$database = PDO_Database::get_instance();
			$query = "SELECT * FROM tbl_userinfo WHERE username = '$username' ";
			$statement = $database->Connection->prepare($query);
			$statement->execute();
			$result = $statement->fetch(PDO::FETCH_ASSOC);
			
			if(MD5($password) == $result['Password']){
				return true;
			}
			return false;
			
			}catch(PDOException $e){
			echo "SELECT Query Failed : ".$e->getMessage();
		}
	}
?>