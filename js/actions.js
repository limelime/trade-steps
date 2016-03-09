$(document).ready(function(){

	$("table").on('click', 'input[type="button"]', function(e){
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