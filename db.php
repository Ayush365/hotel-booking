<?php
$host = 'localhost';
$db = 'hotel_booking';
$user = 'root'; // Use your MySQL username
$pass = '';     // Use your MySQL password

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
