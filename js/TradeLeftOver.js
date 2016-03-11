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
  var total_amount = tradeInfo.getAmount();
  var remainder = total_amount - total_cost;
  
  // Reformat numbers and append.
  total_amount= parseFloat(total_amount).toFixed(2);
  total_cost  = parseFloat(total_cost).toFixed(2);
  remainder   = parseFloat(remainder).toFixed(2);
  
  // Create table holding left over infos.
  var left_over_html = '<br />';
  
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
  
  // Append
  $('#trade-left-over').append(left_over_html);  
}
