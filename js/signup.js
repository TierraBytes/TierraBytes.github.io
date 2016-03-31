



var passwordEvent = function(){
	if($("#password").val().length > 8){
		$("#password").next().hide("slow");
	}else{
		$("#password").next().show("slow");
	};
}

var confirmPasswordEvent = function(){
	
	if( $("#password").val() === $("#confirm_password").val() ){
		$("#confirm_password").next().hide("slow");
	}else{
		$("#confirm_password").next().show("slow");
	}

}

var emailEvent = function(){
	if($("#email").val().length > 8){
		$("#email").next().hide("slow");
	}else{
		$("#email").next().show("slow");
	};
}

var confirmEmailEvent = function(){
	
	if( $("#email").val() === $("#confirm_email").val() ){
		$("#confirm_email").next().hide("slow");
	}else{
		$("#confirm_email").next().show("slow");
	}

}

var isUsernameFilled = function(){
	return $("#username").val().length > 0;
}
var isPasswordValid = function(){
	return $("#password").val().length > 8;
}
var arePasswordsMatching = function(){
	return $("#password").val() === $("#confirm_password").val();
}
var canSubmit = function(){
	return arePasswordsMatching() && isPasswordValid() && isUsernameFilled() && validateEmail() && areEmailsMatching();
}

var canEnterPassword = function(){
	return isUsernameFilled() && validateEmail() && areEmailsMatching();
}

var enableSubmitEvent = function(){
	enablePasswordEvent();

	$("#submit").prop( "disabled" , !canSubmit() );
	if(!canSubmit()){
		$("#submit").css("background","#aaaaaa");
		$("#submit").css("box-shadow","0 3px 0 0 #aaaaaa");
	}else if(canSubmit()){
		$("#submit").css("background","#2F558E");
		$("#submit").css("box-shadow","0 3px 0 0 #1D3C6A");
	}
}

var enablePasswordEvent = function(){
	$("#password").prop( "disabled" , !canEnterPassword() );
	
	$("#confirm_password").prop( "disabled" , !canEnterPassword() );

	if(!canEnterPassword()){
		$("#password").css("background","#aaaaaa");
		
		$("#confirm_password").css("background","#aaaaaa");
	}else if(canEnterPassword()){
		$("#password").css("background","#FFFFFF");
		
		$("#confirm_password").css("background","#FFFFFF");
	}
}

var validateEmail = function() {
	if($("#email").val().length < 4)
	{
		return false;
	}
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test($("#email").val());
}

var areEmailsMatching = function(){
	return $("#email").val() === $("#confirm_email").val();
}


$("#password").focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent).focus(enableSubmitEvent).blur(enableSubmitEvent);
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent).focus(enableSubmitEvent).blur(enableSubmitEvent);
$("#password").focus(enableSubmitEvent).blur(enableSubmitEvent).keyup(enableSubmitEvent);
$("#confirm_password").focus(enableSubmitEvent).blur(enableSubmitEvent).keyup(enableSubmitEvent);

$("#email").focus(emailEvent).keyup(emailEvent).focus(confirmEmailEvent).keyup(confirmEmailEvent).keyup(enableSubmitEvent).focus(enableSubmitEvent).blur(enableSubmitEvent);
$("#confirm_email").focus(confirmEmailEvent).keyup(confirmEmailEvent).keyup(enableSubmitEvent).focus(enableSubmitEvent).blur(enableSubmitEvent);
$("#email").focus(enableSubmitEvent).blur(enableSubmitEvent).keyup(enableSubmitEvent);
$("#confirm_email").focus(enableSubmitEvent).blur(enableSubmitEvent).keyup(enableSubmitEvent);
enableSubmitEvent();


$("#submit").click(function(){
	event.preventDefault();
	window.location.replace('https://www.facebook.com');
});



