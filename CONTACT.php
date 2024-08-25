<?php 

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['comment'];

    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');


    if($name =='') {
        print('<p> 名前が未入力です</p>');
    }

    if (preg_match('/\A[\w\\.]+\@[\w\\.]+\.([a-z]+)\z/', $email) == 0) {
        print('<p> メールアドレスを正確に入力して下さい。</p>');
    }

    if ($message == '') {
        print('<p>お問合せ内容が入力されていません。</p>');
        
    } else {
        print('送信されました。お問い合わせの内容によってはお答え出来ない場合もございますのでご了承ください。')
    }


    $title = 'MEGUMI COMPLETA.jpへお問い合わせがありました';
    $header = 'From:MEGUMI COMPLETA.jp';
    $to = 'vasto.mar3xc@gmail.com';
    $deteal = '名前:'. $name . 'メール:'. $email . 'お問い合わせ内容:'. $message;

    mb_language('japanese');
    mb_internal_encoding('utf-8');
    // 送信の指示
    mb_send_mail($to, $title, $deteal, $header); 
    
 