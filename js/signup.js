



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

var isUsernameFilled = function(){
	return $("#username").val().length > 0;
}
var isPasswordValid = function(){
	return $("#password").val().length > 8;
}
var arePasswordsMatching = function(){
    var password = $("#password").val();
    var confirmPassword = $("#confirm_password").val();
	if(password === confirmPassword)
	{
		//console.log("swag " + "\"" + password+ "\"" + "\"" + confirmPassword + "\"");
		//console.log(isPasswordValid());
		//console.log(isUsernameFilled() + " \"" + $("#username").val() + "\"" );
	}
	return password === confirmPassword;
}
var canSubmit = function(){
		//console.log("\"" + $("#password").val()  + "\"" + " "  +  "\"" + $("#confirm_password").val() +  "\"" );
	return arePasswordsMatching() && isPasswordValid() && isUsernameFilled() ;
}
var enableSubmitEvent = function(){
	$("#submit").prop( "disabled" , !canSubmit() );
	if(!canSubmit()){
		$("#submit").css("background","#aaaaaa");
		$("#submit").css("box-shadow","0 3px 0 0 #aaaaaa");
	}else if(canSubmit()){
		$("#submit").css("background","#2F558E");
		$("#submit").css("box-shadow","0 3px 0 0 #1D3C6A");
	}
}


$("#password").focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent).focus(enableSubmitEvent).blur(enableSubmitEvent);
$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent).focus(enableSubmitEvent).blur(enableSubmitEvent);
$("#password").focus(enableSubmitEvent).blur(enableSubmitEvent).keyup(enableSubmitEvent);
$("#confirm_password").focus(enableSubmitEvent).blur(enableSubmitEvent).keyup(enableSubmitEvent);
enableSubmitEvent();



$("#submit").click(function(){
	event.preventDefault();
	window.location.replace('https://www.facebook.com');
});



