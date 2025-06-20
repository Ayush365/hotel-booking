<?php
session_start();
include 'db.php';

if (!isset($_SESSION['user_id']) || $_SESSION['role'] != 'admin') {
  header('Location: login.html');
  exit();
}

$room_id = $_POST['room_id'];

$sql = "SELECT COUNT(*) AS active_bookings 
        FROM bookings 
        WHERE room_id = ? AND status = 'booked'";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $room_id);
$stmt->execute();
$result = $stmt->get_result()->fetch_assoc();

if ($result['active_bookings'] > 0) {
  die('<div class="alert alert-error">Cannot delete room with active bookings!</div>');
}

$sql = "DELETE FROM rooms WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $room_id);

if ($stmt->execute()) {
  header('Location: admin_rooms.php');
} else {
  echo '<div class="alert alert-error">Error: ' . $stmt->error . '</div>';
}
$stmt->close();
$conn->close();
?>
