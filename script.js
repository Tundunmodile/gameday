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

function validateText(val, min_length){
    if(val.length <= min_length){
        alert('Please enter a valid field')
    }
    else{
        return val;
    }
}

//validate form fields




//submit contact us form
$('#contactUs').on('click', '#submitContactUs', function(){
    var firstname = validateText($('#firstname').val(), 2);
    var lastname = validateText($('#lastname').val(), 2);
    var email = emailValidationResult($('#email').val());
    var messageVal = validateText($('#message').val(), 5);

    var message = {firstname, lastname, email, messageVal};
    console.log(message);
    messages.push(message);
    console.log(messages);

    alert(`${message.firstname}, we have recieved your submission and will contact you as soon as possible :).`);
})


//collapses the navbar after selection 
$('.navbar-collapse a').click(function() {
    	$(".navbar-collapse").collapse('hide');	    
});