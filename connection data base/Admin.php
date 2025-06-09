<?php 
include ('conn.php')?>


<?php 
$sql = "SELECT* FROM  custormerfeedback "; 
$result = mysqli_query($conn, $sql); 
$custormerfeedback = mysqli_fetch_all($result, MYSQLI_ASSOC)



?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>

    <style>
  body{
 display: flex;
 justify-content: center;
 align-items: center;


  }

  .img{
width: 60px;
    


  }


  table{
  width:  70%;
  height: auto;
  font-size: 18px;
  border-collapse: separate;
  border-spacing: 10px;
  }



  th, td {
padding: 15px;
  }

  th{
    background-color: grey;

  }


  .wel{
display: flex;



  }




    </style>
</head>
<body>
       <h2 style="text-align: center;"><img src="../IMG-20250522-WA0011.jpg" alt="" class="img"></h2>
<h1  class="wel">CUSTORMERS FEEDBACK</h1>  <br>


   <table border="6">
    <tr>
        <th>name</th>
        <th>email</th>
        <th>feedback</th>

    </tr>

    <?php   foreach($custormerfeedback as $custormers):?>
   <tr>
<td><?php  echo $custormers['name'] ?></td>
<td><?php  echo $custormers['email'] ?></td>
<td><?php  echo $custormers['feedback'] ?></td>


   </tr>

   <?php endforeach ?>


   </table>







</body>
</html>