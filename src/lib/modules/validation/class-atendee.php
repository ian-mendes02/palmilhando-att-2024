<?php

class Atendee {

    public bool $is_valid;

    public int $status_code;

    public function __construct($user) {
        $this->validateAttendance($user);
    }

    private function validateAttendance($user) {

        $conn = new mysqli(...SQL_CONFIG);

        if ($conn->connect_error) {

            $this->is_valid = false;

            $this->status_code = 2;

            return;
        }

        if (!isset($user->name, $user->email)) {

            $this->is_valid = false;

            $this->status_code = 0;

            return;
        } else {

            $query_email = $conn->query("SELECT * FROM `participantes_2023` WHERE `email` = '$user->email'");

            $query_name = $conn->query("SELECT * FROM `participantes_2023` WHERE `comprador` = '$user->name'");

            $valid_email = $query_email->num_rows > 0;

            $valid_name = $query_name->num_rows > 0;

            $this->is_valid = ($valid_email || $valid_name);

            $this->status_code = $this->is_valid ? 4 : 1;
        }

        $conn->close();
    }
}
