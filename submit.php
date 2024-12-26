<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $age = htmlspecialchars($_POST['age']);
    $address = htmlspecialchars($_POST['address']);

    // Save the data to a file or database if needed, or just display it
    echo "<h2>Registration Successful!</h2>";
    echo "<p>Full Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Age: $age</p>";
    echo "<p>Address: $address</p>";
} else {
    echo "Invalid request.";
}
?>
