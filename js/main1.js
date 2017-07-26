

$(document).ready(function() {

$("#shoesSlected").click(function() {

	for(i=1;i<4; i++){
		if ($("ul").eq(i).hasClass('mi-moveFromRight')) {

			$("ul").eq(i).removeClass('mi-moveFromRight').addClass('mi-moveToRight')

		}
		else{
			if ($("ul").eq(i).hasClass('mi-moveFromLeft')) {

				$("ul").eq(i).removeClass('mi-moveFromLeft').addClass('mi-moveToLeft')
				
			}
			else{
				if ($("ul").eq(i).hasClass('mi-moveToLeft')) {

					$("ul").eq(i).removeClass('mi-moveToLeft')
			
				}
				else{
					if ($("ul").eq(i).hasClass('mi-moveToRight')) {

						$("ul").eq(i).removeClass('mi-moveFromLeft')
			
					}

				}

			}
		}
		
		

	}
		
			setInterval(function(){ $("#shoes").addClass(' mi-moveFromLeft'); }, 500);

})

$("#accessoriesSlected").click(function() {
			for(i=0;i<4; i++){

				if ($("ul").eq(i).hasClass('mi-moveFromRight') && (i!=1) ){

					$("ul").eq(i).removeClass('mi-moveFromRight').addClass('mi-moveToRight')

				}
				else{
					if ($("ul").eq(i).hasClass('mi-moveFromLeft') && (i!=1)) {

						$("ul").eq(i).removeClass('mi-moveFromLeft').addClass('mi-moveToLeft')
						
					}
					else{
						if ($("ul").eq(i).hasClass('mi-moveToLeft')) {

							$("ul").eq(i).removeClass('mi-moveToLeft')
					
						}
						else{
							if ($("ul").eq(i).hasClass('mi-moveToRight')) {

								$("ul").eq(i).removeClass('mi-moveFromLeft')
					
							}

						}

					}
				}
		
		}		
			setInterval(function(){ $("#accessories").addClass(' mi-moveFromLeft'); }, 500);


		

})

$("#watchesSlected").click(function() {
		
		for(i=0;i<4; i++){
		if ($("ul").eq(i).hasClass('mi-moveFromRight') && (i!=2)) {

			$("ul").eq(i).removeClass('mi-moveFromRight').addClass('mi-moveToRight')

		}
		else{
			if ($("ul").eq(i).hasClass('mi-moveFromLeft')  && (i!=2)) {

				$("ul").eq(i).removeClass('mi-moveFromLeft').addClass('mi-moveToLeft')
				
			}
			else{
				if ($("ul").eq(i).hasClass('mi-moveToLeft')) {

					$("ul").eq(i).removeClass('mi-moveToLeft')
			
				}
				else{
					if ($("ul").eq(i).hasClass('mi-moveToRight')) {

						$("ul").eq(i).removeClass('mi-moveFromLeft')
			
					}

				}

			}
		}
		
		

	}
		
			setInterval(function(){ $("#watches").addClass(' mi-moveFromLeft'); }, 500);

})





$("#bagsSelected").click(function() {
			for(i=0;i<4; i++){
		if ($("ul").eq(i).hasClass('mi-moveFromRight') && (i!=3)) {

			$("ul").eq(i).removeClass('mi-moveFromRight').addClass('mi-moveToRight')

		}
		else{
			if ($("ul").eq(i).hasClass('mi-moveFromLeft') && (i!=3)) {

				$("ul").eq(i).removeClass('mi-moveFromLeft').addClass('mi-moveToLeft')
				
			}
			else{
				if ($("ul").eq(i).hasClass('mi-moveToLeft')) {

					$("ul").eq(i).removeClass('mi-moveToLeft')
			
				}
				else{
					if ($("ul").eq(i).hasClass('mi-moveToRight')) {

						$("ul").eq(i).removeClass('mi-moveFromLeft')
			
					}

				}

			}
		}
		
		

	}
			setInterval(function(){ $("#bags").addClass(' mi-moveFromRight'); }, 500);
		

		})



});