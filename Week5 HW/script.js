var table,up,down,left,right,markCell;
/*
function tableHeader(input)
{
  var headerCell = document.createElement('th');
  var headerContent = document.createTextNode(input);
  headerCell.appendChild(headerContent);
  return headerCell;
}

function tableBody(input){
  var cell = document.createElement('td')
  var cellContent = document.createTextNode(input);
  cell.appendChild(cellContent);
  return cell;
}
*/
function createPage()
{
  table = document.createElement('table');
  var tableRow = document.createElement('tr');
  for (var i = 1; i < 5; i++)
  {
    var headerCell = document.createElement('th');
    var headerContent = document.createTextNode('Header' + i);
    headerCell.appendChild(headerContent);
    tableRow.appendChild(headerCell);
    //tableRow.appendChild(tableHeader('Header '+ i));
  }

  table.appendChild(tableRow)
  for (var i = 1; i < 5; i++)
  {
    var tr = document.createElement('tr');

    for (var j = 1; j < 5; j++)
    {
      var cell = document.createElement('th');
      var cellContent = document.createTextNode(i + ',' + j);
      cell.appendChild(cellContent);
      tr.appendChild(cell);
      cell.style.width = '90px';
      cell.style.height = '50px';
      //tr.appendChild(tableBody(i + ',' + j));
    }
    table.appendChild(tr);
  }

  table.style.border = "1px solid black";
  document.body.appendChild(table);

  document.body.appendChild(document.createElement('br'));
  //document.body.appendChild(document.createElement('br'));

  function createButton(input)
  {
    var button = document.createElement('button');
    var text = document.createTextNode(input);
    button.appendChild(text);
    return button;
  }
  up = createButton("Up");
  document.body.appendChild(up);

  down = createButton("Down");
  document.body.appendChild(down);

  left = createButton("Left");
  document.body.appendChild(left);

  right = createButton("Right");
  document.body.appendChild(right);

  document.body.appendChild(document.createElement('br'));
  document.body.appendChild(document.createElement('br'));
  markCell = createButton("Mark cell");
  document.body.appendChild(markCell);
}


createPage();
