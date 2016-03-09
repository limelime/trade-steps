$(document).ready(function(){

	$('#trade-details').on('change', 'input', function(){
    console.log("helo2");
    
    $("#trade-details > table > tbody > tr").each(function() {
      console.log("ter");
    });
    
            
  });
 
});