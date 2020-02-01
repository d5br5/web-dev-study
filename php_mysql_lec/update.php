<?php
    require("./userinfo.php");
    $conn=mysqli_connect($hostname,$username,$password,$DBname);
    $sql='select * from topic';
    $result=mysqli_query($conn,$sql);
    $list=' ';
    while($row=mysqli_fetch_array($result)){
        $escaped_title=htmlspecialchars($row['title']);
        $list=$list."<li><a href=\"index.php?id={$row['id']}\">{$escaped_title}</a></li>";
           }

    $update_link='';
    $article=array('title'=>'WEB','description'=>'Hello WEB');

    if(isset($_GET['id'])){
        $filtered_id=mysqli_real_escape_string($conn, $_GET['id']);

        $sql="select * from topic where id={$filtered_id}";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_array($result);

        $article['title']=htmlspecialchars($row['title']);
        $article['description']=htmlspecialchars($row['description']) ;

        $update_link='<a href="update.php?id='.$_GET['id'].'">UPDATE</a>';
    }
   ?>

<?php require("view/top.php"); ?>

<a href="index.php"><h1>WEB</h1></a>

    <form action="process_update.php" method="post">
       <input type="hidden" name="id" value="<?=$_GET['id']?>">
        <p><input type="text" name="title" placeholder="title" value="<?=$article['title']?>"></p>
        <p>
            <textarea name="description" placeholder="description"><?=$article['description']?></textarea>
        </p>
        <p><input type="submit" value="submit"></p>

    </form>

<?php require("view/bottom.php"); ?>
