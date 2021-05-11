<?php
rename('data/'.$_POST['oldtitle'],'data/'.$_POST['title']);
file_put_contents('data/'.$_POST['title'],$_POST['description']); 
header("Location: /test.php?id=".$_POST['title']);
?>