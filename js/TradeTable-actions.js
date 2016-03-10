/**
 * Trade table actions:
 *    -ADD, REMOVE buttons
 *    -ON CHANGE, update cost.
 **/
 
 
$(document).ready(function(){

  // REMOVE
  // ***************
  $('#trade-details').on('click', 'input[name="remove-trade"]', function(e){
    $(this).closest('tr').remove();
  })
  
  // ADD
  // ***************
  $('#trade-details').on('click', 'input[name="add-trade"]', function(e){
    
    var tradeTable = new TradeTable();
    var html_row = tradeTable.buildHtmlRow('?', 0, 0, 0);
    $(this).closest('tr').after(html_row);
  })
    
  // ON CHANGE, Update cost.
  // ***************
  $('#trade-details').on('change', 'input', function(){
    
    // Get commission fee.
    var tradeInfo = new TradeInfo();
    var commission_fee = tradeInfo.getCommissionFee();
    
    // UPDATE cost.
    var total_cost = 0;
    var total_fee = 0;
    $("#trade-details > table > tbody > tr:not(:first-child)").each(function() {
      var share = $(this).find("td:nth-child(2) > input").val();
      var share_price = $(this).find("td:nth-child(3) > input").val();
      var cost = share * share_price;
            
      total_cost += cost; // Recalculate total_cost.

      // Add fee if cost > 0.
      if (cost > 0)
      {
        total_fee += commission_fee;
      }
       
      cost = cost.toFixed(2);
      $(this).find("td:nth-child(4)").text(cost);
      
    });

    // UPDATE left-over.
    TradeLeftOver.update(total_cost, total_fee);
        
  });
  
});
