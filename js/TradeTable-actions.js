/**
 * Trade table actions: ADD, REMOVE.
 **/
 
 
$(document).ready(function(){

  // REMOVE
  $('#trade-details').on('click', 'input[name="remove-trade"]', function(e){
     $(this).closest('tr').remove();
  })
  
  // ADD
  $('#trade-details').on('click', 'input[name="add-trade"]', function(e){
     $(this).closest('tr').remove();
  })
    
});
