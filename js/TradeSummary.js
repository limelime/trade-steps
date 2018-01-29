/**
 * Class to display summary of trades.
 **/

function TradeSummary()
{}

TradeSummary.update = function (total_cost, total_fee, total_share)
{
  // Get numbers.
  var tradeInfo = new TradeInfo();
  var total_amount = tradeInfo.getAmount();
  var remainder = total_amount - total_cost - total_fee;
  var average_price = (total_cost + total_fee) / total_share;
    
}
$(document).ready(function(){

  // ON CHANGE, Update cost.
  // ***************
  $('#trade-details').on('change', 'input', function(){
    
    // Get commission fee.
    var tradeInfo = new TradeInfo();
    var commission_fee = tradeInfo.getCommissionFee();
    
    // UPDATE cost.
    var total_cost = 0;
    var total_fee = 0;
    var total_share = 0;
    $("#trade-details > table > tbody > tr:not(:first-child)").each(function() {
      var share = Number($(this).find("td:nth-child(2) > input").val());
      var share_price = Number($(this).find("td:nth-child(3) > input").val());
      var cost = share * share_price;
            
      total_cost += cost; // Recalculate total_cost.
      total_share += share; 
      
      // Add fee if cost > 0.
      if (cost > 0)
      {
        total_fee += commission_fee;
      }
       
      cost = cost.toFixed(2);
      $(this).find("td:nth-child(4)").text(cost);
      
    });

    // UPDATE left-over.
    TradeLeftOver.update(total_cost, total_fee, total_share);
        
  });
  
});
