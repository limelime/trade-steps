$(document).ready(function(){
  
  $("#show-trades-btn").click(function() {
    
    var total_amount = $("#total-amount").val();
    var commission_fee = $("#commission-fee").val();
    var trade_proportions_str = $("#trade-proportions").val();
    
    
    console.log(total_amount);
    console.log(commission_fee);
    console.log(trade_proportions_str);
  });
  
});