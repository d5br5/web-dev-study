<?php
require("admin_info.php");
include("./dbconn.php");

$mb_id = $_SESSION['ss_mb_id'];
$me_send_datetime = date('Y-m-d H:i:s', time());

$recv_list= explode(',', trim($_POST['me_recv_mb_id']));
$str_name_list='';

$error_list=array();
$member_list=array();
for($i=0; $i<count($recv_list); $i++){
  $sql=" SELECT mb_id, mb_name FROM member WHERE mb_id = '{$recv_list[$i]}' ";
  $result = mysqli_query($conn, $sql);
  $row=mysqli_fetch_assoc($result);
  if($row){
    $member_list['id'][]=$row['mb_id'];
    $member_list['name'][]=$row['mb_name'];
  } else {
    $error_list[] = $recv_list[$i];
  }
}

$error_msg=implode(",", $error_list);

if($error_msg){
  echo "<script>alert('회원아이디 {$error_msg} 은(는) 존재하지 않는 회원아이디 입니다.\\n쪽지를 발송하지 않았습니다.'); window.close();</script>";
  exit;
}

for ($i=0; $i<count($member_list['id']); $i++){
  $recv_mb_id=$member_list['id'][$i];

  $sql="INSERT INTO memo
    SET me_recv_mb_id='$recv_mb_id',
        me_send_mb_id='$mb_id',
        me_send_datetime='$me_send_datetime',
        me_memo='{$_POST['me_memo']}'";

  $result=mysqli_query($conn, $sql);
}

mysqli_close($conn);

if($member_list){
  $str_name_list=implode(',', $member_list['name']);
  echo "<script>alert('{$str_name_list}님께 쪽지를 전달하였습니다.');window.close();</script>";
  exit;
} else {
  echo "<script>alert('회원아이디 오류 같습니다.');window.close();</script>";
  exit;
}
?>
