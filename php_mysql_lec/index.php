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
    $delete_link='';

    $article=array('title'=>'WEB','description'=>'Hello WEB');
    $author='';

    if(isset($_GET['id'])){
        $filtered_id=mysqli_real_escape_string($conn, $_GET['id']);

        $sql="select * from topic left join author on topic.author_id = author.id where topic.id={$filtered_id}";
        $result=mysqli_query($conn,$sql);
        $row=mysqli_fetch_array($result);

        $article['title']=htmlspecialchars($row['title']);
        $article['description']=htmlspecialchars($row['description']) ;
        $article['name']=htmlspecialchars($row['name']);
        $article['profile']=htmlspecialchars($row['profile']);

        $update_link='<a href="update.php?id='.$_GET['id'].'">UPDATE</a>';
        $delete_link='
            <form action="process_delete.php" method="post">
            <p><input type="hidden" name="id" value="'.$_GET['id'].'"></p>
            <p><input type="submit" value="DELETE"></p>
            </form>

        ';

        $author='<p>by '.$article["name"].'</p>';
    }
   ?>


<?php require("view/top.php");?>

        <a href="index.php">
            <h1>WEB</h1>
            <a href="author.php">AUTHOR</a>
        </a>

        <ol>
            <?=$list?>
        </ol>
        <a href="create.php">CREATE</a>
        <?=$update_link?>
        <?=$delete_link?>

<?php
    echo "<h2>{$article['title']}</h2>";
    echo "<p>{$article['description']}</p>";
    echo $author;
?>

<?php require("view/bottom.php"); ?>
