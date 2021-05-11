<?php require_once("lib/print.php"); ?>   
<?php require("view/top.php"); ?>
       
        <h2>
            <?php print_title(); ?>
        </h2>
        <p>
            <?php print_description(); ?>
        </p>
        
        <form action="create_process.php" method="post">
            <p><input type="text" name="title" placeholder="title"></p>
            <p><textarea name="description"></textarea></p>
            <p><input type="submit" value="create"></p>
        </form>
        
 <?php require('view/bottom.php');?>