<?php

if(isset($_POST['submit'])){
$to = "artemartemenkoartem@gmail.com";; // Здесь нужно написать e-mail, куда будут приходить письма
$from = $_POST['email']; // this is the sender's Email address
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$city = $_POST['city'];
$adress = $_POST['adress'];
$email = $_POST['email'];
$number = $_POST['number'];
$a = $_POST['chooseColors'];
$subject = "Форма отправки сообщений с сайта";
$subject2 = "Copy of your form submission";
$message = "Новые данные с сайта artm.sbs:" . "\n\n" . "Color: " . $a . "\n\n" . "Shipping information" . "\n" . "First name: " . $first_name . "\n" . "Last name: " . $last_name . "\n" . "City: " . $city . "\n" . "Adress: " . $adress . "\n\n" . "Contact information" . "\n" . "Email: " . $email . "\n" . "Phone number: " . $number;
// $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
// mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender - Отключено!
// echo "Сообщение отправлено. Спасибо Вам " . $first_name . ", мы скоро свяжемся с Вами.";
// echo "<br /><br /><a href='http://artm.sbs'>Вернуться на сайт.</a>";
?>
<script>
      function dwnld(){
  document.getElementById("dwnlD").style.display = "block";
  };
</script>
<?php
header('Location: http://artm.sbs/thanks.html');
}
?>

<!--Переадресация на главную страницу сайта, через 3 секунды-->
<!-- <script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://artm.sbs");}
window.setTimeout("changeurl();",3000);
</script> -->
