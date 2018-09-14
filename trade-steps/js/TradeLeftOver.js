/**
 * Trade balance.
 *  Class to trade balance.
 */

function TradeLeftOver()
{}

TradeLeftOver.update = function (total_cost, total_fee, total_share)
{
	$("#trade-balance").empty(); // Clear trade balance first.

	// Get numbers.
	var tradeInfo = new TradeInfo();
	var total_amount = tradeInfo.getAmount();
	var balance = total_amount - total_cost - total_fee;
	var average_price = (total_cost + total_fee) / total_share;

	// Reformat numbers and append.
	total_amount= parseFloat(total_amount).toFixed(2);
	total_cost  = parseFloat(total_cost).toFixed(2);
	balance     = parseFloat(balance).toFixed(2);
	average_price = average_price.toFixed(4);
  
	// Create table holding balance infos.
	var balance_html = '<br />';
		balance_html += '<table><tr>'+
									'<th>Total amount</th><th>-</th>'+
									'<th>Total cost</th><th>-</th>'+
									'<th>Commission fee</th><th>=</th>'+
									'<th>Balance</th>'+
								'</tr>';
												
		balance_html += '<tr>'+
							'<td class="number-2">'+total_amount+'</td><td>-</td>'+
							'<td class="number-2">'+total_cost+'</td><td>-</td>'+
							'<td class="number-2">'+total_fee+'</td><td>=</td>'+
							'<td class="number-2">'+balance+'</td>'+
						'</tr>';

		balance_html += '</table>';

		// Share and average price
		balance_html += '<br /><span>Total shares: </span><span class="number-0">'+total_share+'</span><br />';
		balance_html += '<span>Average price: </span><span class="number-5">'+average_price+'</span>';
  
		// Append
		$('#trade-balance').append(balance_html);

	// Trigger number formatting using jquery-number.
	$('.number-0').number( true, 0 );
	$('.number-2').number( true, 2 );
	$('.number-5').number( true, 5 );     
}
