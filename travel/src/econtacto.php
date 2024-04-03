<?php
$recaptcha = $_POST['g-recaptcha-response'];
$params = array();  // Array donde almacenar los parámetros de la petición
$params['secret'] = '6LdlnxgoAAAAAHemp3_WdeMgWL9-nfqhwpSFgowN'; // Clave privada
if (isset($recaptcha)) {
    $params['response'] = urlencode($recaptcha);
}
$params['remoteip'] = $_SERVER['REMOTE_ADDR'];
// Generar una cadena de consulta codificada estilo URL
$params_string = http_build_query($params);
// Creamos la URL para la petición
$requestURL = 'https://www.google.com/recaptcha/api/siteverify?' . $params_string;
// Inicia sesión cURL
$curl = curl_init();
// Establece las opciones para la transferencia cURL
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $requestURL,
));
// Enviamos la solicitud y obtenemos la respuesta en formato json
$response = curl_exec($curl);
// Cerramos la solicitud para liberar recursos
curl_close($curl);
// Devuelve la respuesta en formato JSON
$respuesta = json_decode($response);
if(!$respuesta->success){
    header("Location: redir.php?tipo=4");
}else {
    $enombre = $_POST["name"];
    $ecorreo = $_POST["email"];
	$epais = $_POST["pais"];
    $emensaje =  htmlspecialchars($_POST["message"]);

    $elcorreo = $_POST["email"];
//    correo donde tienen que llegar los correos
    $elhotel ="gabriel.marcelo87@gmail.com";
    //$elhotel ="info@southamerica-expeditions.com";
    $im=$_SESSION['securimage_code_value'];
    $seg = strtolower($_POST["segur"]);
    $body = "<html>";
    $body .= "<p><strong>";
    $body .= "Contact Form - Southamerica Expeditions";
    $body .= "</strong></p>\n";
    if($_POST["nombre"]) $body .= "<strong>NAME</strong>: " . $_POST["nombre"] . "<br>\n";
	if($_POST["email"]) $body .= "<strong>EMAIL</strong>: " . $_POST["email"] . "<br>\n";
	if($_POST["telefono"]) $body .= "<strong>PHONE</strong>: " . $_POST["telefono"] . "<br>\n";
	if($_POST["mensaje"]) $body .= "<strong>MESSAGE</strong>: " . $_POST["mensaje"] . "<br>\n";
    $body .= "</html>";
    $asunto = "Contact Form - Southamerica Expeditions";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=utf-8\r\n";
    //$headers .= "From: reservas@hotelsegovia.com.bo"."\r\n";
    $headers .= "From: $ecorreo <$ecorreo>\r\n";
    /*$headers .= "Reply-To: reservas@boliviaentusmanos.com\r\n";
    $headers .= "Return-path: reservas@boliviaentusmanos.com\r\n";*/
    if(mail($elhotel,$asunto,$body,$headers)){
        header("Location: redir.php?tipo=4");
    }else{
        header("Location: redir.php?tipo=2");
    }




    /*require 'phpmailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;
    $mail->isSMTP();
//$mail->SMTPDebug = 0;
//$mail->Debugoutput = 'html';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = 587;
    $mail->SMTPSecure = 'tls';
    $mail->SMTPAuth = true;
    $mail->Username = "hcussi.07@gmail.com";
    $mail->Password = "reservasanteusweb";
    $mail->setFrom($ecorreo, $enombre);
//    $mail->addReplyTo($elcorreo, $enombre);
    $mail->addAddress('hcussi@linxs.com.bo', 'Suites Toborochi');
    $mail->Subject = 'DESDE FORMULARIO DE CONTACTOS - suitestoborochi.com';
    $body = "<html>";
    $body .= "<p><strong>";
    $body .= "DESDE FORMULARIO DE CONTACTOS - suitestoborochi.com";
    $body .= "</strong></p>\n";
    if($_POST["contact_name"]) $body .= "<strong>NOMBRE</strong>: " . $_POST["contact_name"] . "<br>\n";
    if($_POST["contact_email"]) $body .= "<strong>EMAIL</strong>: " . $_POST["contact_email"] . "<br>\n";
    if($message) $body .= "<strong>MENSAJE</strong>: " . $message . "<br>\n";
    $body .= "<p><a href=http://www.suitestoborochi.com >www.suitestoborochi.com</a></p></html>";
    $mail->MsgHTML($body);
    if (!$mail->send()) {
        header("Location: redir.php?tipo=2");
    } else {
        header("Location: redir.php?tipo=4");
    }*/
}