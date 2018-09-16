/**
 * Trade information class return basic informations of a trade:
 *    total amount, share price, commission fee, trade proportions.
 */

function TradeInput()
{}

// Return the total amount.
TradeInput.prototype.getAmount = function ()
{
  return Number($("#total-amount").val());
}

TradeInput.prototype.getSharePrice = function ()
{
  return Number($("#share-price").val());
}

TradeInput.prototype.getCommissionFee = function ()
{
  return Number($("#commission-fee").val());
}

// Return an array of proportions.
TradeInput.prototype.getProportions = function ()
{
  return $("#trade-proportions").val().split(',');
}
