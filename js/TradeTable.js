/**
 * Trade details table class.
 *  Class to manipulate the table.
 */

function TradeTable(parentID)
{
  this.parentID = parentID;
}

TradeTable.prototype.create = function ()
{
  this.table_html = '<table><tr><th></th><th>Shares</th><th>Price</th><th>Cost</th><th>Action</th></tr>';
}

TradeTable.prototype.addRow = function (proportion, share, price, cost)
{
  var row_html='<tr>';
  row_html+='<td>'+proportion+'</td>';
  row_html+='<td>'+this.getInputHtml(share, 5)+'</td>';
  row_html+='<td>'+this.getInputHtml(price, 5)+'</td>';
  row_html+='<td>'+cost+'</td>';

  // Add action icons: ADD, REMOVE.
  row_html+='<td><input name="add-trade" type="button" value="Add"/> <input name="remove-trade" type="button" value="Remove"/></td>';

  // Close row.
  row_html+='</tr>';
  
  // Row to table.
  this.table_html += row_html;
  
};

// Close the table.
TradeTable.prototype.close = function ()
{
  this.table_html +='</table>';
  
  $(this.parentID).append(this.table_html);
}

/*
 *  PRIVATE functions.
 *
 */

// Return uniform <input> for share and price.
TradeTable.prototype.getInputHtml = function (value, width)
{
  return '<input type="text" value="'+value+'" maxlength="'+width+'" size="'+width+'" />'; 
};