<?php 
include('conn.php')
?>

 










<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>sign up </title>
    
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
    









</style>



   </head>
<body>
    <form action="form-amazon.php" method="POST">
        <h2 style="text-align: center;"><img src="../IMG-20250522-WA0011.jpg" alt="" class="img"></h2>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>

        <label for="location">Location:</label><br>
        <input type="text" id="location" name="location" required><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br>

        <input type="submit" value="Submit" required> 
        <button><a href="login.php">LOGIN</a></button>
         
    </form> 
</body>
</html>


<?php 
if (!empty($_POST["name"]) && !empty($_POST["location"]) && !empty($_POST["email"]) && !empty($_POST["password"])){
echo "WELCOME CREDENTIALS COMPLETE";


}else{
  echo "invalid credentials"; 

}




if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize form inputs
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $location = mysqli_real_escape_string($conn, $_POST['location']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
   
    
    // Hash the password before storing it
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    // SQL query to insert data into the database
    $sql = "INSERT INTO custormers (name, location, email, password) VALUES ('$name', '$location','$email','$password')";

    // Execute the query and check if it was successful
    if ($conn->query($sql) === TRUE) {
         header("location:../welcome.html");
           
          exit(); 

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection after the operation
    $conn->close();




  }







?>




