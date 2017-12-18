$(document).ready(function(){
 /**
 * empezando funcionalidad, esconder y mostrar correspondientes
 */
	$(".view").hide();
	var firstView = function(){
		$(".first-view").fadeOut();
	}
	var firstViewAgain = function(){
		$(".first-view").fadeIn();
	}
	var secondView = function(){
		$(".second-view").fadeIn();
	}
	setTimeout(firstView, 3500);
	setTimeout(secondView, 4000);
 /**
 * empezando registro
 */
	$("#sing-up-btn").click(function(){
		/**
		*inicializando plugin
		*/
		$("#country").countrySelect({
			responsiveDropdown: true,
			defaultCountry: "jp"
		});
		/**
		* mostrando y ocultando correspondientes
		*/
		function forHide(){
			$(".second-view").hide();
		}
		function forShow(){
			$(".sing-up").show()
		}
		setTimeout(forHide, 150);
		setTimeout(forShow, 300);
	});
		/**
		* deshabilitando/habilitando botones
		* #number-next, #mail-next
		*/
		$("#phone").keyup(function(){
			if($(this).val().length == 10){
				$("#number-next").removeAttr("disabled");
			}else{
				$("#number-next").attr("disabled", true);
			}
		});
		$(".terms").click(function(){
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
		});
		/**
		* clickeando .next
		*/
		$(".next").click(function(){
			var forHide = $(this).parents()[($(this).parents().length) - 4];
			var hiding = function(){
				$(forHide).hide();
			}
			var showing = function(){
				var forShow = $(forHide).next();
				$(forShow).show();
			}
			setTimeout(hiding, 200);
			setTimeout(showing, 200);
			
		});
		/**
		* clickeando #number-next y habilitando/deshabilitando dicho botón
		*/
	$("#number-next").click(function(){
		var newArray = [];
		var code = "";
		function getRandomCode(min, max) {
			var digitOne = Math.floor(Math.random() * (max - min)) + min;
			var digitTwo = Math.floor(Math.random() * (max - min)) + min;
			var digitThree = Math.floor(Math.random() * (max - min)) + min;
			newArray.push(digitOne, digitTwo, digitThree);
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
		/**
		* habilitando #code-next
		*/
		$(".digit").keyup(function(){
			if($("#digit-one").val() == newArray[0] &&
				$("#digit-two").val() == newArray[1] &&
				$("#digit-three").val() == newArray[2]){
				$("#code-next").removeAttr("disabled");
			} else {
				$("#code-next").attr("disabled", true);
			}
		})
		/**
		* clickeando #resend
		*/
		$("#resend").click(function(){
			newArray = [];
			code = "";
			getRandomCode(1, 9);
			getAlert(newArray);
		});
	});
		/**
		* clickeando .prev-btn
		*/
		$(".prev-btn").click(function(){
			$("input").val("");
			$(".next").attr("disabled", true);
			var forHide = $(this).parents()[1];
			$(forHide).hide();
			var forShow = $(forHide).prev();
			$(forShow).show();
		});
		/**
		* clickeando #reset-btn
		*/
		$("#reset-btn").click(function(){
			var forHide = $(this).parent()[0];
			$(forHide).hide();
			setTimeout(firstViewAgain, 500);
			setTimeout(firstView, 3500);
			setTimeout(secondView, 4000);
			$("input").val("");
			$(".terms").prop("checked", false);
			$(".next").attr("disabled", true);
		});
});