<?php
	$servername = "localhost";
	$username = "id11642139_login";
	$password = "ihatephp";
	$dbname = "id11642139_login";

	global $name,$password1,$first_name,$last_name,$college_name,$year1;
	$conn = mysqli_connect($servername, $username, $password, $dbname);
	
	if (!$conn) {
		die("Connection failed: " . $conn->connect_error);
	}
	
		if(isset($_POST['username'])){
			$name = $_POST['username'];
		}	
		
		if(isset($_POST['first_name'])){
			$first_name = $_POST['first_name'];
		}
		if(isset($_POST['last_name'])){
			$last_name = $_POST['last_name'];
		}		
		
		if(isset($_POST['password'])){
			$password1 = $_POST['password'];
		}	
		
		
		if(isset($_POST['year'])){
			$year1 = $_POST['year'];
		}
		if(isset($_POST['college_name'])){
			$college_name = $_POST['college_name'];
		}
	$sql = "INSERT INTO user (first_name,last_name,username,password,year,college_name)
	VALUES ('$first_name','$last_name','$name', '$password1','$year1','$college_name') ";
	if (mysqli_query($conn, $sql)) {
		echo "<script>location.href='home.html'</script>";
        exit;
	}
	else{
	   echo "<script>location.href='account1.html'</script>";
    }
    mysqli_close($conn);
?>