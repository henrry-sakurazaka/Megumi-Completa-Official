$(function(){

    $('.alert-name,.alert-mail,.alert-message,.tooltip1,.tooltip2,.tooltip3').hide();

    $('.submit-btn').on('click',function() {

        let sendFlag = true;

       if(! $('#name-field').val()){
            $('#textSection .alert-name,.tooltip1').show();
            sendFlag = false;
        } else {
            $('#textSection .alert-name,.tooltip1').hide();
            sendFlag = true;
        }


        let sendFlag2 = true;

        if(! $('#email-field').val()){
            $('#textSection2 .alert-mail,.tooltip2').show();
            sendFlag2= false;
        } else {
            $('#textSection2 .alert-mail,.tooltip2').hide();
            sendFlag2 = true;
        }

        let sendFlag3 = true;


        if(! $('#comment').val()){
            $('#textSection3 .alert-message,.tooltip3').show();
            sendFlag3 = false;
        } else {
            $('#textSection3 .alert-message,.tooltip3').hide();
            sendFlag3 = true;
        }

        
        

       if(sendFlag === false || sendFlag2 === false || sendFlag3 === false ) {
        return false;
       }


    });
});