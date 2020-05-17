console.log("loaded")


function validateForm() {
    if (isEmpty(document.getElementById('data_4').value.trim())) {
    alert('Email is required!');
    return false;
    }
    if (!validateEmail(document.getElementById('data_4').value.trim())) {
    alert('Email must be a valid email address!');
    return false;
    }
    return true;
    }
    function isEmpty(str) { return (str.length === 0 || !str.trim()); }
    function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
    return isEmpty(email) || re.test(email);
    }


        $(window).scroll(function(){
            $('#bar').toggleClass('scrolled', $(this).scrollTop() > 50);
        });


  