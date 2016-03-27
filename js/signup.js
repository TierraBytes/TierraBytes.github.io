



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
	return $("#username").length > 0;
}
var isPasswordValid = function(){
	return $("#password").val() > 8;
}
var arePasswordsMatching = function(){
	return $("#password").val() === $("#confirm_password").val();
}
var canSubmit = function(){
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

});



