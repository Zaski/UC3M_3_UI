

$(document).on('change','select', function() {
    window.location.href = $(this).val();
});


$(document).ready(function() {
		$('#commentForm').submit(function(e) {
			e.preventDefault(); // Prevent multiple submission

			var time = getTime();

				$("#commentFormWrap").before(
					"<div class='comment'><div class='rate><label class='infoLabel'>User rating: </label></div><br>" +
					$('#commentFormContent').val() + "<br><div class='date'>Posted by username on " + time + " </div></div><hr class='commentDivision'>"
				);
			
		});
	});


/* Gets local time and date */
	function getTime() {
		var date = new Date();
		return date.getDay() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + "  at  " 
			+ date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	}
