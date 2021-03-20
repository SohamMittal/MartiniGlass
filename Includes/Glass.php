<?php
	function getFromTb($tableName,$text){
		try{
			$database = PDO_Database::get_instance();
			if($text != ""){
				$query = "Select * from tbl_".$tableName. " where name like '%".$text."%'";
			}
			else{
				$query = "Select * from tbl_".$tableName;
			}
			
			$stmt = $database->Connection->prepare($query);
			$stmt->execute();
			
			//$result = $stmt->fetch(PDO::FETCH_ASSOC);
			
			$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
			$array = $stmt->fetchAll( ) ;
			
			
			echo "<table id = '".$tableName."' >";
			
			echo "<tr>";
			for($x = 1 ; $x < count($array)+1; $x++){
				$Element = $array[($x-1)];
				
				
				echo "<td name =".$Element['id'].">";
				echo "<p class='desc'><span>".$Element['name']."</span><br /><br /><span>$".$Element['price']."</span><br /><br /><br /><br /><br /><span class='shadows'><input type='text' value='1'><button  class='AddCart' onclick='return false'>+ Add to cart</button></span></p>";
				echo "</td>";
				
				if($x%3==0){
					echo "</tr>";
					echo "<tr>";
					
				}
			}
			echo "</table>";
		}
		catch (PDOException $e){
			echo "Error while fetching Data from database ".$e->getMessage();
		}
	}
	
	
	function getAllData($text){
		getFromTb("High_ball",$text);
		getFromTb("Collins",$text);
	getFromTb("Old_Fashioned",$text);
	getFromTb("Wine_Glasses",$text);
	getFromTb("Champagne_Glasses",$text);
	getFromTb("Martini_Glasses",$text);
	getFromTb("Beer_Mugs",$text);
	getFromTb("Juice_Glasses",$text);
	getFromTb("Brandy_Balloon",$text);
	getFromTb("Cocktail_Glasses",$text);
	}
?>	