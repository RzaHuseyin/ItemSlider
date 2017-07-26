function slide(i){
	 //==============bundan evvel funksiya tetbiq olunmus ul-ni tapmaq ucun onu deyisene menimsedirik ==============================================
	var nameLeft=$(' .mi-moveFromLeft').eq(0);    //soldan gelen ul  (eger varsa)
	var nameRight=$(' .mi-moveFromRight').eq(0);	//saqdan gelen ul  (eger varsa)
	var nameStart=$(' .start').eq(0);	//saqdan gelen ul  (eger varsa)

	//id-lere gore yoxlama   ----    >  eger evvel  clicklenmis ul 'nin  id 'si ' kicikdirse   indi clicklenenden soldadir    <> boyukdurse saqdadir 	

	if(nameLeft.attr("id")<$("ul").eq(i).attr("id")){   //eger soldangelen ondan soldadisa  1.soldangelen saol getsin 2. clicklenen saqdan gelsin
		$("ul").removeClass();
		nameLeft.addClass(" mi-moveToLeft")										// 
		setTimeout(function(){$("ul").eq(i).addClass(" mi-moveFromRight");},500);  
	}
	else {
		if(nameLeft.attr("id")>$("ul").eq(i).attr("id")){    //eger soldangelen ondan saqdadisa 1.soldangelen saqa getsin 2. clicklenen soldan gelsin
			$("ul").removeClass();
			nameLeft.addClass(" mi-moveToRight")
			setTimeout(function(){$("ul").eq(i).addClass(" mi-moveFromLeft");},500);

		}
		else {
			if(nameRight.attr("id")<$("ul").eq(i).attr("id")){     //eger saqdangelen ondan soldadisa 1.saqdangelen sola getsin 2. clicklenen saqdan gelsin
				$("ul").removeClass();
				nameRight.addClass(" mi-moveToLeft")
				setTimeout(function(){$("ul").eq(i).addClass(" mi-moveFromRight");},500);
			}
			else {
				if(nameRight.attr("id")>$("ul").eq(i).attr("id")){     //eger saqdangelen ondan saqdadisa 1.saqdangelen saqa getsin 2. clicklenen soldan gelsin
					$("ul").removeClass();
					nameRight.addClass(" mi-moveToRight")
					setTimeout(function(){$("ul").eq(i).addClass(" mi-moveFromLeft");},500);     
				}
	

				else {
					if (nameLeft.attr("id")==$("ul").eq(i).attr("id") || nameRight.attr("id")==$("ul").eq(i).attr("id") || nameStart.attr("id")==$("ul").eq(i).attr("id") ){
						$("ul").eq(i).addClass('start')
					}
					else{
						$("ul").removeClass();
						nameStart.addClass('mi-moveToLeft')
						setTimeout(function(){$("ul").eq(i).addClass(" mi-moveFromRight");},500);
					}
				}
			}
		}
	}
}

$(document).ready(function() {

	$("#shoesSlected").click(function(event) {
		$("a").removeClass("mi-selected");
		$(this).addClass("mi-selected")
		slide(0)
	});

	$("#accessoriesSlected").click(function(event) {
		$("a").removeClass("mi-selected");
		$(this).addClass("mi-selected")
		slide(1)
	});

	$("#watchesSlected").click(function(event) {
		$("a").removeClass("mi-selected");
		$(this).addClass("mi-selected")
			slide(2)
	});

	$("#bagsSelected").click(function(event) {
		$("a").removeClass("mi-selected");
		$(this).addClass("mi-selected")
			slide(3);
	});
});
