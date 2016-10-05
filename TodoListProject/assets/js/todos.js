//check of specific todo By clicking
$("ul").on("click","li",function () {
	$(this).toggleClass("completed");

}); // end of anonimous function

// click on X to delete todo
$("ul").on("click","span",function(event){
	// remove the entire LI not only the span
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});// end of fadeOut function
	event.stopPropagation();
})

// add the keypress listener to input text
$("input[type='text' ").keypress(function(event){
	// if user hit enter(#13)
	if(event.which === 13){
		//get the value of the input text
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText +  "</li>")
	}
});

$(".fa-pencil-square-o").click(function () {
		$("input[type='text' ").fadeToggle();
});
