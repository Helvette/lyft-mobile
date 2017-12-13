$(document).ready(function(){
// introducción

	$(".view").hide();

	var firstView = function(){
		$(".first-view").fadeOut();
	}
	var firstViewAgain = function(){
		$(".first-view").fadeIn();
	}
	var secondView = function(){
		$(".second-view").show();
	}
	setTimeout(firstView, 3500);
	setTimeout(secondView, 4000);

// empezando el registro
	$("#sing-up-btn").click(function(){
		$(".second-view").hide();
		$(".sing-up").show();
	});

// deshabilitando y habilitando botones
// #number-next
	$("#phone").keyup(function(){
		if($(this).val().length == 10){
			$("#number-next").removeAttr("disabled");
		}else{
			$("#number-next").attr("disabled", true);
		}
	});
// #mail-next
	$(".terms").click(function(){
		console.log(this);
		if ($(this).is(":checked") && $("#name-input").val().length !== 0
			&& $("#lastname-input").val().length !== 0
			&& $("#mail-input").val().length !== 0){
			$("#mail-next").removeAttr("disabled");
		}else {
			$("#mail-next").attr("disabled", true);
		}
	});
	$(".account").keyup(function(){
		if ($(".terms").is(":checked") && $("#name-input").val().length !== 0
			&& $("#lastname-input").val().length !== 0
			&& $("#mail-input").val().length !== 0){
			$("#mail-next").removeAttr("disabled");
		}else {
			$("#mail-next").attr("disabled", true);
		}
	})

	// clickeando cualquier botón .next
	$(".next").click(function(){
		var forHide = $(this).parents()[($(this).parents().length) - 4];
		console.log(forHide);
		$(forHide).hide();
		var forShow = $(forHide).next();
		console.log(forShow);
		$(forShow).show();
	});

	// clickeando #number-next y habilitando/deshabilitando dicho botón
	$("#number-next").click(function(){
		var newArray = [];
		var code = "";
		function getRandomCode(min, max) {
			var digitOne = Math.floor(Math.random() * (max - min)) + min;
			var digitTwo = Math.floor(Math.random() * (max - min)) + min;
			var digitThree = Math.floor(Math.random() * (max - min)) + min;
			newArray.push(digitOne, digitTwo, digitThree);
			console.log(newArray);
		}
		var getAlert = function(array){
			for (i = 0 ; i < array.length ; i++){
				code = code + array[i];
			}
			console.log(code);
			alert("Tu código de comprobación es " + code);
		}
		getRandomCode(1, 9);
		getAlert(newArray);
		// habiñitando botón #code-next
		$(".digit").keyup(function(){
			if($("#digit-one").val() == newArray[0] &&
				$("#digit-two").val() == newArray[1] &&
				$("#digit-three").val() == newArray[2]){
				$("#code-next").removeAttr("disabled");
			} else {
				$("#code-next").attr("disabled", true);
			}
		})
		// click en el botón #resend
		$("#resend").click(function(){
			newArray = [];
			code = "";
			getRandomCode(1, 9);
			getAlert(newArray);
		})
	})
	// volviendo atrás
	$(".prev-btn").click(function(){
		var forHide = $(this).parents()[1];
		console.log(forHide);
		$(forHide).hide();
		console.log($(forHide).siblings());
		var forShow = $(forHide).prev();
		$(forShow).show();
	})
	// volviendo al inicio
	$("#reset-btn").click(function(){
		var forHide = $(this).parents()[1];
		$(forHide).hide();
		setTimeout(firstViewAgain, 500);
		setTimeout(firstView, 3500);
		setTimeout(secondView, 4000);
		$("input").val("");
		$(".terms").removeAttr("checked");
	})


	// estilos


});