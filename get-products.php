<?php

header('Content-Type: application/json; charset=utf-8');

$host = 'localhost';
$db   = 'medisave_pharmacy';
$user = 'root';
$pass = '';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit;
}

$sql = 'SELECT id, name, category, price, description, image
        FROM products
        ORDER BY sort_order ASC, category ASC, name ASC';

$result = $conn->query($sql);

$products = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $row['price'] = (float) $row['price'];
        $products[] = $row;
    }
}

echo json_encode($products);
$conn->close();