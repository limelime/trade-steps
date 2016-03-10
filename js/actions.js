$(document).ready(function(){

	$('#trade-details').on('click', 'input[name="remove-trade"]', function(e){
	   $(this).closest('tr').remove();
	   console.log('fsdf');
	   
	})
 
});

/**
 * Remove the tag itself and its children.
 * @param id
 */
function remove_tag(id)
{
  var element = document.getElementById(id);
  element.parentNode.removeChild(element);
};