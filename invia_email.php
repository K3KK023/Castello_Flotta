<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["azione"]) && $_POST["azione"] == "invia_email") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $domanda = $_POST["domanda"];

    // Configura l'oggetto e il corpo dell'email
    $oggetto = "Domanda da $nome";
    $corpo = "Nome: $nome\n";
    $corpo .= "Email: $email\n";
    $corpo .= "Domanda:\n$domanda";

    // Invia l'email
    if (mail("fchiarelli93@gmail.com", $oggetto, $corpo)) {
        echo "Email inviata con successo!";
    } else {
        echo "Errore nell'invio dell'email.";
    }
} else {
    echo "Errore nella richiesta.";
}
?>
