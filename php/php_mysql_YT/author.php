<?php
    require("./userinfo.php");
    $conn=mysqli_connect($hostname,$username,$password,$DBname);
  ?>


    <?php require("view/top.php");?>

    <a href="index.php">
        <h1>WEB</h1>
    </a>
    <p><a href="index.php">TOPIC</a></p>
    <table border="1">
        <tr>
            <td>id</td><td>name</td><td>profile</td><td>UPDATE</td><td>DELETE</td>
        </tr>
        <?php
            $sql='select * from author;';
            $result= mysqli_query($conn, $sql);

        while($row=mysqli_fetch_array($result)){
            $filtered=array('id'=>htmlspecialchars($row['id']),
                           'name'=>htmlspecialchars($row['name']),
                           'profile'=>htmlspecialchars($row['profile']))
            ?>
            <tr>
                <td><?=$filtered['id']?></td>
                <td><?=$filtered['name']?></td>
                <td><?=$filtered['profile']?></td>
                <td><a href="author.php?id=<?=$filtered['id']?>">UPDATE</a></td>
                <td>
                    <form action="process_delete_author.php" method="post" onsubmit="if(!confirm('sure?')){return false;}">
                        <input type="hidden" name="id" value="<?=$filtered['id']?>">
                        <input type="submit" value="DELETE">
                    </form>
                </td>
            </tr>
            <?php
           }
                ?>
    </table>
    <?php

$escaped=array('name'=>'','profile'=>'');
$button='CREATE AUTHOR';
$form_action='process_create_author.php';
$form_id='';

if(isset($_GET['id'])){
    $filtered_id=mysqli_real_escape_string($conn, $_GET['id']);
    settype($filtered_id,'integer');
    $sql="select * from author where id={$filtered_id}";
    $result= mysqli_query($conn, $sql);

    $row=mysqli_fetch_array($result);
    $escaped['name']=htmlspecialchars($row['name']);
    $escaped['profile']=htmlspecialchars($row['profile']);

    $button='UPDATE AUTHOR';
    $form_action='process_update_author.php';
    $form_id='<input type="hidden" name="id" value="'.$_GET['id'].'">';
}

?>
   <form action="<?=$form_action?>" method="post">
        <?=$form_id?>
       <p><input type="text" name="name" placeholder="name" value="<?=$escaped['name']?>"></p>
       <p><textarea name="profile" cols="30" rows="10" placeholder="profile"><?=$escaped['profile']?></textarea></p>
        <p><input type="submit" value="<?=$button?>"></p>
   </form>

    <?php require("view/bottom.php"); ?>
