/**
 * Trade information class return basic informations of a trade:
 *    total amount, share price, commission fee, trade proportions.
 */

function TradeInfo()
{}

// Return the total amount.
TradeInfo.prototype.getAmount = function ()
{
  return $("#total-amount").val();
}

TradeInfo.prototype.getSharePrice = function ()
{
  return $("#share-price").val();
}

TradeInfo.prototype.getCommissionFee = function ()
{
  return $("#commission-fee").val();
}

// Return an array of proportions.
TradeInfo.prototype.getProportions = function ()
{
  return $("#trade-proportions").val().split(',');
}
