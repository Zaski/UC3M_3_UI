<!--
	
	$(document).on({
		mouseenter: function () {
			// Hide everything
			$('.hiddenArticle')
				.stop()
				.slideUp('slow');
		
			// Only toggle the article that corresponds to the clicked title
			$(this)
				.closest('.articleWrap') 
					.find('.hiddenArticle') 
						.stop() 
						.slideToggle('slow'); 
		},

		mouseleave: function () {
			// Hide everything
			$('.hiddenArticle')
				.stop()
				.slideUp('slow');
		}
	}, '.titleWrap');
	
	/*$(document).ready(function() {
		$(document).on('click', '.titleWrap',  function() {
			// Hide everything
			$('.hiddenArticle')
				.stop()
				.slideUp('slow');
		
			// Only toggle the article that corresponds to the clicked title
			$(this)
				.closest('.articleWrap') 
					.find('.hiddenArticle') 
						.stop() 
						.slideToggle('slow'); 
		});
    }); */

	$(document).ready(function() {
		$('#articleForm').submit(function(e) {
			e.preventDefault(); // Prevent multiple submission
			
			if ($(".articleWrap").length > 5) {
				alert("Maximum number of articles reached.");
			} else {
						
				var image = "";
				if ($('#formImage').val() != "") {
					var comment = " ";
					if ($('#formImgComm').val() != "") {
						comment = "<p class='comment'>" + $('#formImgComm').val() + "</p>";
					}
				
					image = "<div class='artImg'><img class='article' src=" + $('#formImage').val() + " alt=" + $('#formImage').val() + ">" + comment + "</div>";
				}
				
				$("#formWrap").before(
					"<div class='articleWrap'><div class='titleWrap'><h3>" + $('#formTitle').val() + "</h3></div><div>" +
					"<p class='author'>" + $('#formAuthor').val() + "</p>" +
					"<p class='date'>" + $('#formDate').val() + "</p></div>" +
					"<div class='hiddenArticle'>" + image + 
					"<p class='paragraph'>" + $('#formContent').val() + "</p></div></div><hr class='article'>"
				);
			}
		});
	});
		
-->