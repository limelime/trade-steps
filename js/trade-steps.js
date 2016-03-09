$(document).ready(function(){
  
  $("#show-trades-btn").click(function() {
    
    var total_amount = $("#total-amount").val();
    var price_per_share = $("#price-per-share").val();
    var commission_fee = $("#commission-fee").val();
    var trade_proportions = $("#trade-proportions").val().split(',');
    var number_of_trades = trade_proportions.length;
    
    // Get total proportion.
    var total_proportion = 0;
    for(var i=0; i < number_of_trades; i++)
    {
      total_proportion += parseInt(trade_proportions[i]);
    }
    var portion_amount = (total_amount-(number_of_trades*commission_fee)) / total_proportion; // Note: Substract commission fees.
    
    // Display trades result.
    var show_trades_html='<table><tr><th></th><th>Shares</th><th>Price</th><th>Cost</th></tr>'
    for(var i=0; i < number_of_trades; i++)
    {
      var shares = Math.floor(trade_proportions[i]*portion_amount/price_per_share);
      var cost = shares*price_per_share;
      show_trades_html+='<tr>';
      show_trades_html+='<td>'+trade_proportions[i]+'</td>';
      show_trades_html+='<td>'+shares+'</td>';
      show_trades_html+='<td>'+price_per_share+'</td>';
      show_trades_html+='<td>'+cost+'</td>';
      show_trades_html+='</tr>';
    }
    $("#trade-details").append(show_trades_html);
    console.log(total_amount);
    console.log(commission_fee);
    console.log(trade_proportions);
    console.log(total_proportion);
  });
  
});