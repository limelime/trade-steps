/*
	Main function().
*/

$(document).ready(function(){
  
  $("#show-trades-btn").click(function() {
    
    remove_all_child_elements("trade-details"); // Clear trade-details table first.
    
    var tradeInfo = new TradeInfo();
    
    var total_amount = tradeInfo.getAmount();
    var share_price = tradeInfo.getSharePrice();
    var commission_fee = tradeInfo.getCommissionFee();
    var trade_proportions = tradeInfo.getProportions();
    var number_of_trades = trade_proportions.length;
    
    // Get total proportion.
    var total_proportion = 0;
    for(var i=0; i < number_of_trades; i++)
    {
      total_proportion += parseInt(trade_proportions[i]);
    }
    
    // Calculate 1 portion amount.
    var portion_amount = (total_amount-(number_of_trades*commission_fee)) / total_proportion; // Note: Subtract commission fees.
    
    // Display trades result.
    var tradeTable = new TradeTable("#trade-details");
    tradeTable.create();
    for(var i=0; i < number_of_trades; i++)
    {
      var shares = Math.floor(trade_proportions[i]*portion_amount/share_price);
      var cost = (shares*share_price).toFixed(2);
      
      tradeTable.addRow(trade_proportions[i], shares, share_price, cost);
    }
    tradeTable.close();
    
    
    // Trigger number formatting using jquery-number.
    $('.number-2').number( true, 2 ); 
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
