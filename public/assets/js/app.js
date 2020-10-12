
$(function() {
	$("#submit").on("click", function() {
		event.preventDefault();
		var burgerName = $("#name").val().trim();
		console.log(burgerName);
		if (burgerName == "") {
			alert("You need to tell us what you'd like to order!");
		} else {
			$.ajax("/api/burgers", {
			type: "POST",
			data: {
				burgerName: burgerName
			}
			}).then(function(response) {
				location.reload();
			});
		}
	});
	$(".burger").on("click", function() {
		var id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: {
			devoured: true
		}
		}).then(function() {
		location.reload();
		});
	});
	$(".cutlery").on("click", function() {
		var id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: {
			devoured: false
			}
		}).then(function() {
			location.reload();	
		});
	});
});