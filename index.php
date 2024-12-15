<?php
// Подключение к базе данных
$conn = new mysqli('localhost', 'username', 'password', 'database');

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // SQL запрос для вставки данных
    $sql = "INSERT INTO contacts (name, phone, message) VALUES ('$name', '$phone', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Ваша заявка успешно отправлена!";
    } else {
        echo "Ошибка: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
