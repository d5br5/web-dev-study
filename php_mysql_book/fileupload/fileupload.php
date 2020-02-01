<?php
$uploads_dir='./uploads';
$allowed_ext=array('jpg','jpeg','png','gif');
$field_name='myfile';
//설정 끝
//uploads 디렉토리가 없다면 생성
if(!is_dir($uploads_dir)){
    if(!mkdir($uploads_dir,0777)){
        die("업로드 디렉토리 생성에 실패했습니다.");
    };
    
}

if(!isset($_FILES[$field_name])){
    die("업로드된 파일이 없습니다.");
}

//변수정리
$error=$_FILES[$field_name]['error'];
$name=$_FILES[$field_name]['name'];

//오류확인
if($error != UPLOAD_ERR_OK){
    switch($error){
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            echo "파일이 너무 큽니다.($error)";
            break;
        case UPLOAD_ERR_PARTIAL:
            echo "파일이 부분적으로 첨부되었습니다.($error)";
            break;
        case UPLOAD_ERR_NO_FILE:
            echo "파일이 첨부되지 않았습니다.($error)";
            break;
        case UPLOAD_ERR_NO_TMP_DIR:
            echo "임시파일을 저장할 디렉토리가 없습니다..($error)";
            break;
        case UPLOAD_ERR_CANT_WRITE:
            echo "임시파일을 생성할 수 없습니다..($error)";
            break;
        case UPLOAD_ERR_EXTENSION:
            echo "업로드 불가능한 파일입니다..($error)";
            break;
        default:
            echo "파일이 제대로 업로드 되지 않았습니다.($error)";
            
    }
    exit;
}

$upload_file=$uploads_dir.'/'.$name; //저장될 디렉토리 및 파일명
$fileinfo=pathinfo($upload_file); // 첨부파일의 정보를 가져옴
$ext=strtolower($fileinfo['extension']);

$i=1;

while(is_file($upload_file)){
    $name=$fileinfo['filename']."-{$i}.".$fileinfo['extension'];
    $upload_file=$uploads_dir.'/'.$name;
    $i++;
}

if(!in_array($ext, $allowed_ext)){ //확장자 확인
    echo "허용되지 않는 확장자";
    exit;
}

if( !move_uploaded_file($_FILES[$field_name]['tmp_name'],$upload_file)){
    echo "파일이 업로드되지 않았습니다";
    exit;
}

?>


<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>FileUpload</title>
</head>
<body>
    <h2>파일정보</h2>
    <ul>
        <li>파일명 : <?= $name; ?></li>
        <li>확장자 : <?= $ext; ?></li>
        <li>파일 형식 : <?= $_FILES[$field_name]['type']; ?></li>
        <li>파일 크기 : <?= number_format($_FILES[$field_name]['size']); ?></li>
            
    </ul>
    <a href="./filedownload.php?file=<?=$name;?>">download</a>
</body>
</html>