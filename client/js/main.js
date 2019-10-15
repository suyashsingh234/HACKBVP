
(function ($) {
    "use strict";

        $(".sign-btn").on('click',function(){
            console.log("dfsd");
            let log=$("#logup");
            let sign=$("#signup");
            log[0].style.display='none';
            sign[0].style.display='initial';
        });
    
        $(".log-btn").on('click',function(){
            let log=$("#logup");
            let sign=$("#signup");
            sign[0].style.display='none';
            log[0].style.display='initial';
        });


     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var loginput = $('.validate-form-login .input100');

    $('.validate-form-login').on('submit',function(){
        let check = true;

        for(let i=0; i<loginput.length; i++) {
            if(validate(loginput[i]) == false){
                showValidate(loginput[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form-login .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });


    var siginput = $('.validate-form-signup .input100');

    $('.validate-form-signup').on('submit',function(){
        let check = true;
        
        let radio = $('.validate-form-signup .radiob');
        console.log(radio);
         for(let i=0;i<radio.length;i++){
            check=false;
            if(radio[i].checked)
              {
                check=true;
              } 
        }
        if(check==false){
            showValidate(radio); 
        }
        
        for(let i=0; i<siginput.length; i++) {
            if(validate(siginput[i]) == false){
                showValidate(siginput[i]);
                check=false;
            }
        }
        return check;
    });


    $('.validate-form-signup .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    $('.validate-form-signup .radiob').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
    

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else if($(input).attr('name') == 'username'){
            if($(input).val().match(/^[A-Za-z]+$/)==null ||$(input).val().trim() == '') {
                return false;
            }
        }
        else if($(input).attr('name') == 'college' ||$(input).val().trim() == ''){
            if($(input).val().match(/^[A-Za-z\s]+$/)==null) {
                return false;
            }
        }        
        else if($(input).attr('type') == 'tel' || $(input).attr('name') == 'phone'){
            if($(input).val().trim().length!=10 || $(input).val().trim()==NaN) {
                return false;
            }
        }
        else if($(input).attr('type') == 'password'){
            if($(input).val().length<8){
                return false;
            }
            if($(input).attr('name') == 'cpass' ){
                if($("input[name=spass]").val()!=$(input).val())
                    return false;
            }
        }

        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);