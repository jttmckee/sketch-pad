//Copyright Jason McKee 2017.  All rights reserved.
var width = 16;
var widthpx = 480;
var borderWidth = 0;
//colors = new Array(width);

function darken(blockID) {
  blockID = "#" + blockID;
  colorNum = $(blockID).attr('colorNum');
  console.log(colorNum);
  colorNumber = parseInt(colorNum,10);
  console.log(colorNumber);

  if (colorNumber <= 1) { return "#000000";}
  colorNumber --;
  console.log(colorNumber);

  $(blockID).attr('colorNum',colorNumber.toString(10));
  newColor = colorNumber * 1118481;
  console.log(newColor);

  return ("#" + newColor.toString(16));
  /*
  if (colors[i][j] <= 1) { return "#000000";}
  colors[i][j]--;
  newColor = colors[i][j] * 1677721.5;
  return ("#" + newColor.toString(16));
*/
}

function setup(width, widthpx, borderWidth) {

  for (var i = 0; i < width; i++ ) {
  //  colors[i] = new Array(width);
    for (var j = 0; j < width; j++) {
      blockID="u-"+i+"-"+j;
      $("#container").append(
        "<div class=\'unit-block\' id=\'"+ blockID + "\'></div>");
        $("#" + blockID).attr("colorNum","10");

      //  colors[i][j] = 10;
        /*
        blockID = "#" + blockID;
        $(blockID).css('display','inline');
        $(blockID).css('margin','0');
        $(blockID).css('padding','0');
        unitWidth = (widthpx / width) - (2*borderWidth);
        $(blockID).css('height',unitWidth +'px');
        $(blockID).css('width',unitWidth +'px');

          $(blockID).css('float','left');
*/
    }
  }
  $(".unit-block").css('display','inline');
  $(".unit-block").css('margin','0');
  $(".unit-block").css('padding','0');
  unitWidth = (widthpx / width) - (2*borderWidth);
  $(".unit-block").css('height',unitWidth +'px');
  $(".unit-block").css('width',unitWidth +'px');

    $(".unit-block").css('float','left');
    //$(".unit-block").css('background-color','#FFFFFF')

  $(".unit-block").mouseenter( function() {
        blockID = $(this).attr("id");
        newColor = darken(blockID);
        $(this).css("background-color",newColor);
    /*
    blockID = $(this).attr("id");
    numDigits = (blockID.length - 3)/2;
    i = parseInt(blockID.substr(2,2+numDigits),10);
    j = parseInt(blockID.substr(2+numDigits+1,(2+numDigits+1+numDigits)),10);
    newColor = darken(i,j);
    $(this).css('background-color',newColor);
    */
  });
}



$(document).ready(function() {

  setup(width,widthpx, borderWidth);




  $("#reset-button").on('click', function() {
    var newWidth = prompt('Please enter the width you would like', width);
    width = newWidth;
    $('#container').empty();
    setup(width,widthpx, borderWidth);
  });

});
