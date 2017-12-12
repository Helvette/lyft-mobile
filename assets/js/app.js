$(document).ready(function(){
// Introducción
	var firstView = function(){
		$(".first-view").fadeOut();
	}
	var secondView = function(){
		$(".second-view").removeClass("hide");
	}
	setTimeout(firstView, 3500);
	setTimeout(secondView, 4000);

// Empezando el registro
	$("#sing-up-btn").click(function(){
		$(".second-view").hide();
		$(".sing-up").removeClass("hide");
	});

// Deshabilitando y habilitando botones

	$("#phone").keyup(function(){
		if($(this).val().length == 10){
			$("#number-next").removeAttr("disabled");
		}else{
			$("#number-next").attr("disabled", true);
		}
	});

	$(".terms").click(function(){
		console.log(this);
		if ($(this).is(":checked")){
			$("#mail-next").removeAttr("disabled");
		}else {
			$("#mail-next").attr("disabled", true);
		}
	});


// Clickeando cualquier botón Next
	$(".next").click(function(){
		var forHide = $(this).parents()[($(this).parents().length) - 4];
		console.log(forHide);
		$(forHide).hide();
		var forShow = $(forHide).next();
		console.log(forShow);
		$(forShow).removeClass("hide");
	})
});