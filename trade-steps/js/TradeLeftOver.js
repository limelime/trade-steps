/**
 * Trade left over.
 *  Class to trade left over.
 */

function TradeLeftOver()
{}

TradeLeftOver.update = function (total_cost, total_fee, total_share)
{
  $("#trade-left-over").empty(); // Clear trade left over first.
  
  // Get numbers.
  var tradeInfo = new TradeInfo();
  var total_amount = tradeInfo.getAmount();
  var remainder = total_amount - total_cost - total_fee;
  var average_price = (total_cost + total_fee) / total_share;
  
  // Reformat numbers and append.
  total_amount= parseFloat(total_amount).toFixed(2);
  total_cost  = parseFloat(total_cost).toFixed(2);
  remainder   = parseFloat(remainder).toFixed(2);
  average_price = average_price.toFixed(4);
  
  // Create table holding left over infos.
  var left_over_html = '<br />';
      
      // Left over.
      left_over_html += '<table><tr>'+
	                          '<th>Total amount</th><th>-</th>'+
	                          '<th>Total cost</th><th>-</th>'+
	                          '<th>Commission fee</th><th>=</th>'+
	                          '<th>Left over</th>'+
                          '</tr>';
                          
      left_over_html += '<tr>'+
                            '<td>'+total_amount+'</td><td>-</td>'+
                            '<td>'+total_cost+'</td><td>-</td>'+
                            '<td>'+total_fee+'</td><td>=</td>'+
                            '<td>'+remainder+'</td>'+
                          '</tr>';
                                          
      left_over_html += '</table>';
      
      // Share and average price
      left_over_html += '<br /><span>Total shares: '+total_share+'</span><br />';
      left_over_html += '<span>Average price: '+average_price+'</span>';
  
  // Append
  $('#trade-left-over').append(left_over_html);  
}
