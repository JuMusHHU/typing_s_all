<?php
/** Spy to get JavaScript error that is occuring in the user's browser
https://github.com/posabsolute/jQuery-Error-Handler-Plugin

Set your e-mail address here
*/

$to = "julia.muschalik@hhu.de";  // Set your e-mail here
$subject = 'A javascript error has been detected on '. $_GET['website'];
$message = 'Error: '. $_GET['message']. '<br />';
$message .= 'Url: '. $_GET['url']. '<br />';
$message .= 'Line: '. $_GET['line']. '<br />';
$message .= 'UserAgent: '. $_GET['userAgent']. '<br />';

$headers = "From: ". $_GET['from'] ."\r\n"; // Or sendmail_username@hostname by default
$headers .= 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
mail($to, $subject, $message, $headers);
die("message sent")

?>
