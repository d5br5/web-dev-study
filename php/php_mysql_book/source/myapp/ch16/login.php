<?php
include("./dbconn.php");  // DB연결을 위한 같은 경로의 dbconn.php를 인클루드합니다.
?>

<html>
<head>
	<title>Login</title>
	<link href="./style.css" rel="stylesheet" type="text/css">
</head>
<body>

<?php if(!isset($_SESSION['ss_mb_id'])) { // 로그인 세션이 있을 경우 로그인 화면 ?>

<h1>로그인</h1>

	<form action="./login_check.php" method="post">
		<table>
			<tr>
				<th>아이디</th>
				<td><input type="text" name="mb_id"></td>
			</tr>
			<tr>
				<th>비밀번호</th>
				<td><input type="password" name="mb_password"></td>
			</tr>
			<tr>
				<td colspan="2" class="td_center">
					<input type="submit" value="로그인"> 
				</td>
			</tr>
		</table>
	</form>

<?php } else { // 로그인 세션이 없을 경우 로그인 완료 화면 ?>

<h1>Member List</h1>

	<?php
	$mb_id = $_SESSION['ss_mb_id'];

	$sql = " SELECT COUNT(*) AS `cnt` FROM member"; // member 테이블에 등록되어있는 회원의 수를 구함
	$result = mysqli_query($conn, $sql);
	$row = mysqli_fetch_assoc($result);
	$total_count = $row['cnt'];

	$page_rows = 10; // 페이지당 목록 수
	$page = $_GET['page'];

	$total_page  = ceil($total_count / $page_rows);  // 전체 페이지 계산
	if ($page < 1) { $page = 1; } // 페이지가 없으면 첫 페이지 (1 페이지)
	$from_record = ($page - 1) * $page_rows; // 시작 열을 구함

	$list = array(); // 회원 정보를 담을 배열 선언

	$sql = " SELECT * FROM member ORDER BY mb_datetime desc LIMIT {$from_record}, {$page_rows} "; // 회원 정보를 조회
	$result = mysqli_query($conn, $sql);
	for ($i=0; $row=mysqli_fetch_assoc($result); $i++) {
		$list[$i] = $row;
		$list_num = $total_count - ($page - 1) * $page_rows; // 회원 순번
		$list[$i]['num'] = $list_num - $i;
	}

	$str = ''; // 페이징 시작
	if ($page > 1) {
		$str .= '<a href="./login.php?page=1" class="pg_page pg_start">처음</a>';
	}

	$start_page = ( ( (int)( ($page - 1 ) / $page_rows ) ) * $page_rows ) + 1;
	$end_page = $start_page + $page_rows - 1;

	if ($end_page >= $total_page) $end_page = $total_page;

	if ($start_page > 1) $str .= '<a href="./login.php?page='.($start_page-1).'" class="pg_page pg_prev">이전</a>';

	if ($total_page > 1) {
		for ($k=$start_page;$k<=$end_page;$k++) {
			if ($page != $k)
				$str .= '<a href="./login.php?page='.$k.'" class="pg_page">'.$k.'</a>';
			else
				$str .= '<strong class="pg_current">'.$k.'</strong>';
		}
	}

	if ($total_page > $end_page) $str .= '<a href="./login.php?page='.($end_page+1).'" class="pg_page pg_next">다음</a>';

	if ($page < $total_page) {
		$str .= '<a href="./login.php?page='.$total_page.'" class="pg_page pg_end">맨끝</a>';
	}

	if ($str) // 페이지가 있다면 생성
		$write_page = "<nav class=\"pg_wrap\"><span class=\"pg\">{$str}</span></nav>";
	else
		$write_page = "";

	mysqli_close($conn); // 데이터베이스 접속 종료
	?>

<a href="./memo.php" onclick="win_memo(this.href); return false;">쪽지함</a>
<a href="./logout.php">로그아웃</a>

<table>
	<caption>Total <?php echo number_format($total_count) ?>명 <?php echo $page ?> 페이지</caption>
	<thead>
	<tr>
		<th>번호</th>
		<th>아이디</th>
		<th>이름</th>
		<th>이메일</th>
		<th>성별</th>
		<th>직업</th>
		<th>관심언어</th>
		<th>가입일</th>
		<th>쪽지보내기</th>
	</tr>
	</thead>
	<tbody>
        <?php
        for ($i=0; $i<count($list); $i++) {
        ?>
        <tr>
            <td><?php echo $list[$i]['num'] ?></td>
			<td><?php echo $list[$i]['mb_id'] ?></td>
			<td><?php echo $list[$i]['mb_name'] ?></td>
			<td><?php echo $list[$i]['mb_email'] ?></td>
			<td><?php echo $list[$i]['mb_gender'] ?></td>
			<td><?php echo $list[$i]['mb_job'] ?></td>
			<td><?php echo $list[$i]['mb_language'] ?></td>
			<td><?php echo $list[$i]['mb_datetime'] ?></td>
			<td><a href="./memo_form.php?me_recv_mb_id=<?php echo $list[$i]['mb_id'] ?>" class="td_btn" onclick="win_memo(this.href); return false;">쪽지보내기</a></td>
        </tr>
        <?php } ?>
        <?php if (count($list) == 0) { echo '<tr><td colspan="9">등록된 회원이 없습니다.</td></tr>'; } ?>
	</tbody>
</table>

<p><?php echo $write_page;  ?><!-- 페이지 --></p>

<script>
var win_memo = function(href) { // 쪽지 팝업창
    var new_win = window.open(href, 'win_memo', 'left=100,top=100,width=620,height=600,scrollbars=1');
    new_win.focus();
}
</script>

<?php } ?>

</body>
</html>