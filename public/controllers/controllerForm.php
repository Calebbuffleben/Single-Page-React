<?php 

include('/class/PHPMailer-master/src/PHPMailer.php');
include('/class/PHPMailer-master/src/SMTP.php');
include('/class/PHPMailer-master/src/Exception.php');

$nameUser = filter_input(type: INPUT_POST, variable_name: "nome", filter: FILTER_SANITIZE_SPECIAL_CHARS);
$phoneUser = filter_input(type: INPUT_POST, variable_name: "phone", filter: FILTER_SANITIZE_SPECIAL_CHARS);
$emailUser = filter_input(type: INPUT_POST, variable_name: "email", filter: FILTER_SANITIZE_SPECIAL_CHARS);
$messageUser = filter_input(type: INPUT_POST, variable_name: "message", filter: FILTER_SANITIZE_SPECIAL_CHARS);

$mail  = new \PHPMailer\PHPMailer\PHPMailer();

$mail->SMTPDebug = 2;                                 // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp1.example.com;smtp2.example.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'user@example.com';                 // SMTP username
$mail->Password = 'secret';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

//Recipients
$mail->setFrom('from@example.com', 'Mailer');
$mail->addAddress('joe@example.net', 'Joe User');     // Add a recipient

//Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Contato do site';
$mail->Body    = 'Nome: {$nameUser}<br/>Telefone: {$phoneUser}<br/>Email: {$emailUser}<br/>Mensagem: {$messageUser}<br/>';

$mail->send();
echo 'Mensagem enviada com sucesso';