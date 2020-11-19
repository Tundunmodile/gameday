var messages = [];

//validates email address format
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

function emailValidationResult(val){
    if (isEmail(val)){
        return val;
    }
    else{
        return null;
    }

}

//ensure minimum input of at least 2 characters in form fields
function validateText(val, min_length){
    if(val.length <= min_length){
        return null;
    }
    else{
        return val;
    }
}

//submit contact us form
$('#contactUs').on('click', '#submitContactUs', function(){
    var firstname = validateText($('#firstname').val(), 2);
    var lastname = validateText($('#lastname').val(), 2);
    var email = emailValidationResult($('#Email').val());
    var messageVal = validateText($('#message').val(), 5);
 
    if(firstname && lastname && email && messageVal){
        var message = {firstname, lastname, email, messageVal};
        alert(`${message.firstname}, we have recieved your submission and will contact you as soon as possible :).`);
        
        //clears form after submission
        $('#firstname').val("");
        $('#lastname').val("");
        $('#Email').val("");
        $('#message').val("");
        $('#contactUs').modal('hide');
    }
    else{ 
        alert("All fields must be completed");
    }
    
})

