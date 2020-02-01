<?php require_once('lib/print.php'); ?>
<?php require("view/top.php"); ?>
        
        <form action="update_process.php" method="post">
           <input type="hidden" name='oldtitle' value="<?php print_title();?>">
            <p><input type="text" name="title" placeholder="title" value="<?php print_title();?>"></p>
            <p><textarea name="description"><?php print_description();?></textarea></p>
            <p><input type="submit"></p>
        </form>
        
 <?php require('view/bottom.php');?>
