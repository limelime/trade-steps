/*
	Main function().
*/

$(document).ready(function(){
	
	// Specify validation rules.
	$("form[name='trade-inputs']").validate({
		
		wrapper: 'div',
		rules: {
			"total-amount": "required",
			"share-price": "required"
		},
		// Specify validation error messages
		messages: {
			"total-amount": "Please enter the amount.",
			"share-price": "Please enter the share price."
		},

	});
  
	$("form[name='trade-inputs']").on('submit', function(e) {
		var isvalid = $("form[name='trade-inputs']").valid();
		if (isvalid) {
			e.preventDefault();
			
			// Show trades.
		//	$("#show-trades-btn").click(function() {
				
				remove_all_child_elements("trade-details"); // Clear trade-details table first.
				
				var tradeInput = new TradeInput();
				
				var total_amount = tradeInput.getAmount();
				var share_price = tradeInput.getSharePrice();
				var commission_fee = tradeInput.getCommissionFee();
				var trade_portions = tradeInput.getPortions();
				var number_of_trades = trade_portions.length;
				
				// Get total proportion.
				var total_proportion = 0;
				for(var i=0; i < number_of_trades; i++)
				{
					total_proportion += parseInt(trade_portions[i]);
				}
				
				// Calculate 1 portion amount.
				var portion_amount = (total_amount-(number_of_trades*commission_fee)) / total_proportion; // Note: Subtract commission fees.
				
				// Display trades result.
				var tradeTable = new TradeTable("#trade-details");
				tradeTable.create();
				for(var i=0; i < number_of_trades; i++)
				{
					var shares = Math.floor(trade_portions[i]*portion_amount/share_price);
					var cost = (shares*share_price).toFixed(2);
					
					tradeTable.addRow(trade_portions[i], shares, share_price, cost);
				}
				tradeTable.close();
				
				
				TradeSummary.updateOnChange();    

		//	});
			
		}
	});	
  

  
});


/**
 * Remove all children of element but keep the element.
 * @param id
 */
function remove_all_child_elements(id)
{
	var node = document.getElementById(id);
	while (node.firstChild)
	{
	  node.removeChild(node.firstChild);
	} 
}
