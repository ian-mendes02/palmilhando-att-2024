<?php

/* ini_set('display_errors', '1');

ini_set("log_errors", TRUE);

error_reporting(E_ALL); */

if (!isset($_POST)) {
    die();
}

define("TM_AUTH_URL", "https://api.themembers.dev.br/api/generate-token");

define("TM_MAIL_URL", "https://registration.themembers.dev.br/api/users/show-email/");

define("TM_USER_ID", "1d021680-a24d-4dde-8c65-687a44a37c29");

define("TM_APP_TOKEN", "6e35d749-4f4c-46fa-b7e8-5a1e19bfb1fc");

define("TM_PLATFORM_TOKEN", "b3ce71cb-c406-4e43-971b-62ab1490f73a");

define("SQL_CONFIG", array('srv1078.hstgr.io', 'u232384656_adm', '@Podal2023', 'u232384656_encontro'));

define("STATUS_MESSAGE", array(
    "no_input",
    "user_not_found",
    "request_failed",
    "no_response",
    "success"
));

$_POST = json_decode(file_get_contents("php://input"), true);

class User_Validation {

    public $user_validation;

    public function __construct() {
        $this->get_validation_status();
    }

    function get_validation_status() {

        if (isset($_POST['email'], $_POST['name'])) {

            $user = (object) array("email" => $_POST['email'], "name" => $_POST['name']);

            require_once __DIR__ . '/class-atendee.php';

            require_once __DIR__ . '/class-member.php';

            $member = new Member($user);

            $atendee = new Atendee($user);

            $this->user_validation = array(
                "membership_status" => array(
                    "is_valid" => $member->is_valid,
                    "status_message" => STATUS_MESSAGE[$member->status_code]
                ),
                "atendee_status" => array(
                    "is_valid" => $atendee->is_valid,
                    "status_message" => STATUS_MESSAGE[$atendee->status_code]
                )
            );
        } else {
            $this->user_validation = "Error: " . STATUS_MESSAGE[0];

            /**
             * lógica de teste
             */
/*             $user = (object) array("email" => "cfuzetti@yahoo.com.br", "name" => "CLAYTON FUZETTI BOZCZOWSKI");

            require_once __DIR__ . '/class-atendee.php';

            require_once __DIR__ . '/class-member.php';

            $member = new Member($user);

            $atendee = new Atendee($user);

            $this->user_validation = array(
                "membership_status" => array(
                    "is_valid" => $member->is_valid,
                    "status_message" => STATUS_MESSAGE[$member->status_code]
                ),
                "atendee_status" => array(
                    "is_valid" => $atendee->is_valid,
                    "status_message" => STATUS_MESSAGE[$atendee->status_code]
                )
            ); */
        }
    }
}

$validation = new User_Validation();

echo json_encode($validation->user_validation);
