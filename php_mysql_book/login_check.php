<?php
include("./dbconn.php");
require("admin_info.php");

$mb_id=trim($_POST['mb_id']);
$mb_password=trim($_POST['mb_password']);

if (!$mb_id || !$mb_password){
echo "<script> alert('회원 아이디나 비밀번호가 공백이면 안됩니다.');</script>";
echo "<script> location.replace('./login.php');</script>";
exit;
  }

$sql="SELECT * from member where mb_id='$mb_id'";
$result=mysqli_query($conn, $sql);
$mb=mysqli_fetch_assoc($result);

$sql="SELECT PASSWORD('$mb_password') AS pass";
$result=mysqli_query($conn, $sql);
$row=mysqli_fetch_assoc($result);
$password=$row['pass'];

if (!$mb['mb_id']||!($password===$mb['mb_password'])){
echo "<script> alert('가입된 회원아이디가 아니거나 비밀번호가 틀립니다.\\n 비밀번호는 대소문자를 구분합니다.');</script>";
echo "<script> location.replace('./login.php');</script>";
exit;
  }

$_SESSION['ss_mb_id']=$mb_id;
mysqli_close($conn);

if(isset($_SESSION['ss_mb_id'])){
  echo "<script>alert('로그인되었습니다.');</script>";
  echo "<script>location.replace('./login.php');</script>";
}

 ?>
