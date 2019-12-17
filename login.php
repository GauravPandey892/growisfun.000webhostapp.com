<?php

$servername = "localhost";
$username = "id11642139_login";
$password = "ihatephp";
$dbname = "id11642139_login";

session_start();

$con=mysqli_connect($servername,$username,$password);

mysqli_select_db($con,$dbname);

$user=$_POST['username'];
$pass=$_POST['password'];


$s="SELECT * FROM user WHERE username='$user' && password ='$pass'";

$result=mysqli_query($con,$s);

$num=mysqli_fetch_array($result,MYSQLI_ASSOC);



if(isset($num)){

	echo "<script>  location.href='../../home.html'; </script>";
}	

else{
    $message = "Invalid credentials";
    echo "<script type='text/javascript'>alert('$message');</script>";
	echo "<script>  location.href='../../index.html';</script>";

}


?>
