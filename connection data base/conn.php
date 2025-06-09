<?php 
define('DB_HOST', 'Localhost'); // is a way of defining constant in php 
define('DB_USER', 'root'); // root by defualt since its apache 
define('DB_password', ''); // since we dont use password to open our database no password
define('DB_name', 'depaulsstore'); // name of your database


// create connection 

$conn = new mysqli(DB_HOST, DB_USER, DB_password, DB_name); 

// checking if connection succesful 

if ($conn-> connect_error){  // if connection not correct stops connection and says connection failed 
    die('connection failed'.$conn-> connect_error); 
}

?>