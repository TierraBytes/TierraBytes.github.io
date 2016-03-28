(function($){

var clicked;

	$(".p li").click(function(){
		var who = $(this).attr("id");
		//console.log(who);
			$("div.overlay").show("fast");
		if(who=="jason"){
			clicked = $("#jasonClicked");	
			clicked.attr("class","selected");	
			clicked.show("fast");

		}else if(who=="angel"){
			clicked = $("div#angelClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}else if(who=="abb"){
			clicked = $("div#abbClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}else if(who=="angelo"){
			clicked = $("div#angeloClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}else if(who=="gary"){
			clicked = $("div#garyClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}else if(who=="isaac"){
			clicked = $("div#isaacClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}else if(who=="tyler"){
			clicked = $("div#tylerClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}else if(who=="nick"){
			clicked = $("div#nickClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}

	});
	$("div.overlay").click(function(){
		$("div.overlay").hide("fast");
		clicked.attr("class","unselected");
	});




})(jQuery);