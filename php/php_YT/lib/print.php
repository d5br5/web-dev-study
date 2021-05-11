<?php 
    $directory='./data';
    $all_file=scandir($directory);
    $dir_size=sizeof($all_file);
    
    function print_title(){
        if(isset($_GET['id'])){echo htmlspecialchars($_GET['id']);}else{echo 'Welcome';}  
    }

    function print_list(){
        
        for($i=2;$i<$dir_size;$i++){
                $title=htmlspecialchars($all_file[$i]);
                echo "<li><a href='test.php?id=".$title."'>".$title."</a></li>";
            }
    }

    function print_description(){
        if(isset($_GET['id'])){
        $basename=basename($_GET['id']);
        echo htmlspecialchars(file_get_contents("./data/".$basename));
        }else{
        echo 'Welcome to PHP worldd!';
        }
    }
    ?>