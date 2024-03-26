<?php

class Member {

    private string $auth_token;

    public bool $is_valid;

    public int $status_code;

    public function __construct($user) {

        $this->set_auth_token();

        $this->validate_membership($user);
    }

    private function set_auth_token(): void {

        $context = stream_context_create(array(
            'http' => array(
                'method' => 'POST',
                'header' => "Content-Type: application/json",
                'content' => json_encode(array(
                    "user_id" => TM_USER_ID
                ))
            )
        ));

        $response = file_get_contents(TM_AUTH_URL, FALSE, $context);


        if (!isset($response)) {

            $this->auth_token = '';

            $this->is_valid = false;

            $this->status_code = 3;

            return;
        }

        $response_data = json_decode($response, TRUE);

        $this->auth_token = $response_data["token"];
    }

    private function validate_membership($user): void {

        if (!isset($user->email)) {

            $this->is_valid = false;

            $this->status_code = 0;

            return;
        }

        if (!isset($this->auth_token)) {

            $this->is_valid = false;

            $this->status_code = 2;

            return;
        }

        $url = TM_MAIL_URL . $user->email . '/' . $this->auth_token . '/' . TM_PLATFORM_TOKEN;

        $response = file_get_contents($url, false);

        $response_data = json_decode($response);

        $this->is_valid = !isset($response_data->message);

        $this->status_code = $this->is_valid ? 4 : 1;
    }
}
