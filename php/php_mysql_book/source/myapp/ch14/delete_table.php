<?php 
$mysql_host = "localhost";
$mysql_user = "root";
$mysql_password = "1234";
$mysql_db = "mydb";

$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db); // MySQL 데이터베이스 연결

if (!$conn) { // 연결 오류 발생 시 스크립트 종료
    die("연결 실패: " . mysqli_connect_error());
}

$sql = " DELETE FROM movie_director WHERE name='홍길동' "; // 데이터 레코드 삭제 쿼리

if (mysqli_query($conn, $sql)) {
    echo "레코드가 성공적으로 삭제 되었습니다.";
} else {
    echo "삭제 실패: " . mysqli_error($conn);
}

mysqli_close($conn); // 데이터베이스 접속 종료
?>