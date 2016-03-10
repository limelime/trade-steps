/**
 * Trade left over.
 *  Class to trade left over.
 */

function TradeLeftOver()
{}

TradeLeftOver.update = function (total_cost, total_fee)
{
  $("#trade-left-over").empty(); // Clear trade left over first.
  
  // Get numbers.
  var tradeInfo = new TradeInfo();
  var amount = tradeInfo.getAmount();
  var remainder = amount - total_cost;
  
  // Reformat numbers and append.
  amount      = parseFloat(amount).toFixed(2);
  total_cost  = parseFloat(total_cost).toFixed(2);
  remainder   = parseFloat(remainder).toFixed(2);
  var left_over_html = '<span>'+amount+' - '+total_cost+' - '+total_fee+' = '+remainder+'</span>';
  $('#trade-left-over').append(left_over_html);  
}
