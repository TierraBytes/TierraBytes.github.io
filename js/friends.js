(function($){

var clicked;

	$(".p li").click(function(){
		var who = $(this).attr("id");
		//console.log(who);
			$("div.overlay").show("fast");
		if(who=="gamingSansFrontier"){
			clicked = $("#sansClicked");	
			clicked.attr("class","selected");	
			clicked.show("fast");

		}else if(who=="upTopEntertainment"){
			clicked = $("div#upTopClicked");
			clicked.attr("class","selected");
			clicked.show("fast");

		}

	});
	$("div.overlay").click(function(){
		$("div.overlay").hide("fast");
		clicked.attr("class","unselected");
	});




})(jQuery);