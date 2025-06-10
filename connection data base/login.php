  
<?php 
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "depaulsstore";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="style\style.css">
<style>

 
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #d3d3d3; /* Light gray background */
        }

        .img{
         width: 60px;
    

        }
        form {
            background-color: white;
            padding: 100px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            width: 300px;
        }
        label {
            font-weight: bold;
        }
        input[type="text"], input[type="email"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 5px 0 15px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="radio"] {
            margin-right: 5px;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: rgba(19, 20, 18, 0.082);
            color: rgba(28, 26, 26, 0.779);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #808580;
        }
    

       .logodiv{
        display: flex;
        justify-content: center;
         align-items: center;

       }







</style>





</head>
<body>
<form action="login.php" method="post">

       <div  class="logodiv"> 
        <img src="../IMG-20250522-WA0011.jpg" class="img"> 
        <h1>LOGIN</h1>   
    </div>
        
        <div>
            <label for="">email</label>
            <input type="email" placeholder="email" name="email" required>
        </div>
        <div>
            <label for="">password</label>
            <input type="password" placeholder="enterpassword" name="password"required>
        </div>

        <input type="submit" name="submit" value="submit"required>
        <P> NO ACCOUT?</P> <button><a href="form-amazon.php">signup </a></button>
       <button><a href="feedback.php">FEEDBACKS?</a></button>
        

    </form>

</body>



<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $input_password = $_POST['password'];

    // Fetch user from database
    $stmt = $conn->prepare("SELECT id, name, password FROM custormers WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    // Check if user exists // if user credentials matches 1 info in the database 
    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id, $name, $hashed_password);
        $stmt->fetch();

        // Verify password
        if (password_verify($input_password, $hashed_password)) {
            // Password is correct, set session and redirect to victor.html
            header("Location:../welcome.php"); // Redirect on success
            exit();
        } else {
            echo "❌ Incorrect password.";
        }
    } else {
        echo "❌ User not found.";
    }

    $stmt->close();
    $conn->close();
}





?>
</html>