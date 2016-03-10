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
    
  // ON CHANGE, recalculate cost.
  // ***************
  $('#trade-details').on('change', 'input', function(){
  
    $("#trade-details > table > tbody > tr:not(:first-child)").each(function() {
      var share = $(this).find("td:nth-child(2) > input").val();
      var share_price = $(this).find("td:nth-child(3) > input").val();
      var cost = share * share_price;
      
      cost = cost.toFixed(2);
      $(this).find("td:nth-child(4)").text(cost);
    });
    
  });
  
});
