 $(document).ready(function(){
 	var about =  $('#btn1');
 	about.hide();
 	$('.but').click(function(){
 	about.show(500);	
 	});

 });


 function changs(a){
    $('.select').removeClass('select');
    $(a).addClass('select');
}
 $(document).ready(function(){
 	var about =  $('#btn2');
 	about.hide();
 	$('.button').click(function(){
 	about.show(500);	
 	});

 });

 function chang(s){
    $('.selected').removeClass('selected');
    $(s).addClass('selected');
}

 


