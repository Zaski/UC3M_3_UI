<!--
	/*$(document).ready(function() {
		$(document).on('mouseenter', '.titleWrap',  function() {
			$('.hiddenArticle').slideDown("slow");
		}).on('mouseleave', '.titleWrap', function() {
			$('.hiddenArticle').slideUp("slow");
		});
    }); */
	
	$(document).ready(function() {
		$(document).on('click', '.titleWrap',  function() {
			$('.hiddenArticle').slideToggle("slow");
		});
    });

	$(document).ready(function() {
		$('#articleForm').submit(function(e) {
			e.preventDefault(); // Prevent multiple submission
			
			if ($(".articleWrap").length > 6) {
				alert("Maximum number of articles reached.");
			} else {
				var image = "";
				if ($('#formImage').val() != "") {
					image = "<div class='artImg'><img class='article' src=" + $('#formImage').val() + "></div>";
				}
				
				$("#formWrap").before(
					"<div class='articleWrap'><div class='titleWrap'><h3>" + $('#formTitle').val() + "</h3></div><div>" +
					"<p class='author'>" + $('#formAuthor').val() + "</p>" +
					"<p class='date'>" + $('#formDate').val() + "</p><br><br></div>" +
					"<div class='hiddenArticle'><hr class='article'>" + image + 
					"<p class='paragraph'>" + $('#formContent').val() + "</p><hr class='article'></div></div>"
				);
			}
		});
	});
		
-->