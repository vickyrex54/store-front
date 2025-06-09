<?php 
include ('conn.php')

?>

<?php 
// validating input 

$name = $email = $feedback = '';  // assighing multipe variable to an empty string 
$nameErr = $emailErr = $feedbackErr = ''; 

if(isset($_POST['submit'])){
    // validating name 
  if(empty($_POST['name'])){
    $nameErr = 'pls put your name ' ;

  }else{ 
     $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

  }




    // validating email 
  if(empty($_POST['email'])){
    $emailErr = 'pls put your name ' ;

  }else{ 
     $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

  }
    // validating feedback
  if(empty($_POST['feedback'])){
    $feedbackErr = 'pls suggest ' ;

  }else{ 
     $feedback = filter_input(INPUT_POST, 'feedback', FILTER_SANITIZE_EMAIL);

  }




  ///// sendind data to database 
   if(empty($nameErr) && empty($emailErr) && empty($bodyErr)){
       $sql= "INSERT  INTO custormerfeedback(name, email, feedback) values ('$name','$email','$feedback')" ;


   }

   if(mysqli_query($conn, $sql)){
         echo "Thanks for the feedback  will get back to you via email";  

   } else{
      echo ' error bad connection to database'.mysqli_error($conn);

   }

}
?>












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




















    <form action="" method="post">
        <div>
             <h2 style="text-align: center;"><img src="../IMG-20250522-WA0011.jpg" alt="" class="img"></h2>

            <label for="">name</label>
            <input type="text" placeholder="name"  name="name">
        </div>
        <div>
            <label for="">email</label>
            <input type="text" placeholder="email" name="email">
        </div>
        <div>
            <label for="">feedback</label>
            <input type="text" placeholder="feedback" name="feedback">
        </div>
        <div>
        
            <input type="submit" name="submit">
            <button><a href="login.php">back</a></button>
        </div>

          
    </form>








   









 