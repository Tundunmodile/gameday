var messages = [];

//validates email address format
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

function emailValidationResult(val){
    if (!isEmail(val)){
        alert("please enter a valid email address")
    }
    else{
        return val;
    }
}
//submit contact us form
$('#contactUs').on('click', '#submitContactUs', function(){
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = emailValidationResult($('#email').val());
    var messageVal = $('#message').val();

    var message = {firstname, lastname, email, messageVal};
    console.log(message);
    messages.push(message);
    console.log(messages);

    alert(`${message.firstname}, we have recieved your submission and will contact you as soon as possible :).`);
})