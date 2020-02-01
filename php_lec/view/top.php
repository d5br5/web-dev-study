<?php 
 require_once('lib/print.php');
?>
   

   <!DOCTYPE html>
    <html lang="ko">

    <head>
        <meta charset="UTF-8">
        <title>document</title>
    </head>

    <body>
        <h1><a href="test.php">WEB</a></h1>
        <ol>
            <?php
          for($i=2;$i<$dir_size;$i++){
                echo "<li><a href='test.php?id=".$all_file[$i]."'>".$all_file[$i]."</a></li>";
            }
        ?>
        </ol>