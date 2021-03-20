<?php 
	$HOST = 'localhost';
	$USER = 'root';
	$PASSWORD = '';
	$DB = 'db_martiniglass';
	
	class PDO_Database{
		public $Connection;
		
		
		//Step 1  of singleton Design Pattern
		private static $instance;
		
		// Step2: Prevent other classes from calling constructor
		private function PDO_Database(){
			$this->OpenConnection();
		}
		
		
		//step3: this function will return the instance of database
		public static function get_instance(){
			
			if(! isset(self::$database)){
				self::$instance = new PDO_Database();
			}
			return self::$instance;
		}
		public function OpenConnection(){
			global $HOST, $USER, $PASSWORD, $DB;
			
			try{
				$this->Connection = new PDO("mysql:host=$HOST;dbname=$DB", $USER, $PASSWORD);
				$this->Connection->setAttribute(PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION);
				}catch(PDOException $e){
				echo "Connection failed : ".$e->getMessage();
			}
		}
		public function CloseConnection(){
			$this->Connection = null;
		}
	}
?>