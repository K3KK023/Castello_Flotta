<?php
if ($_SERVER["REQUEST_METHOD"] == "GET" && isset($_GET["azione"]) && $_GET["azione"] == "invia_email") {
    $nome = $_GET["nome"];
    $email = $_GET["email"];
    $domanda = $_GET["domanda"];

    // Configura l'oggetto e il corpo dell'email
    $oggetto = "Domanda da $nome";
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Domanda:\n$domanda";

    // Invia l'email
    if (mail("castelloflotta@gmail.com", $oggetto, $corpo)) {
        echo "Email inviata con successo!";
    } else {
        echo "Errore nell'invio dell'email.";
    }
} else {
    echo "Errore nella richiesta.";
}
?>
