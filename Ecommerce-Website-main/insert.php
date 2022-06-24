<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['Name']) && isset($_POST['Email']) &&
        isset($_POST['Phone_no']) && isset($_POST['Message']) 
        ) {
        
        $Name = $_POST['Name'];
        $Email = $_POST['Email'];
        $Phone_no = $_POST['Phone_no'];
        $Message = $_POST['Message'];
        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "website";
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);
        if ($conn->connect_error) {
            die('Could not connect to the database.');
        }
        else {
            $Select = "SELECT email FROM register WHERE email = ? LIMIT 1";
            $Insert = "INSERT INTO register(Name, Email, Phone_no, Message) values(?, ?, ?, ?)";
            $stmt = $conn->prepare($Select);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($resultEmail);
            $stmt->store_result();
            $stmt->fetch();
            $rnum = $stmt->num_rows;
            if ($rnum == 0) {
                $stmt->close();
                $stmt = $conn->prepare($Insert);
                $stmt->bind_param("ssss",$Name, $Email, $Phone_no, $Message);
                if ($stmt->execute()) {
                    echo "New record inserted sucessfully.";
                }
                else {
                    echo $stmt->error;
                }
            }
            else {
                echo "Someone already registers using this email.";
            }
            $stmt->close();
            $conn->close();
        }
    }
    else {
        echo "All field are required.";
        die();
    }
}
else {
    echo "Submit button is not set";
}
?>