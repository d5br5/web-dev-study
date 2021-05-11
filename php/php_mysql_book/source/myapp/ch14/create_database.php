<?php
$mysql_host = "localhost";
$mysql_user = "root";
$mysql_password = "1234";

$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password); // MySQL 데이터베이스 연결

if (!$conn) { // 연결 오류 발생 시 스크립트 종료
    die("연결 실패: " . mysqli_connect_error());
}

$sql = "CREATE DATABASE project"; // 데이터베이스 생성 쿼리

if (mysqli_query($conn, $sql)) {
    echo "데이터베이스 생성 완료";
} else {
    echo "데이터베이스를 생성하는 중 오류가 발생했습니다: " . mysqli_error($conn);
}

mysqli_close($conn); // 데이터베이스 접속 종료
?>