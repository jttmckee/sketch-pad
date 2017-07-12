//Copyright Jason McKee 2017.  All rights reserved.
var width = 16;
var widthpx = 480;
var borderWidth = 0;

function setup(width, widthpx, borderWidth) {
  for (var i = 0; i < width; i++ ) {
    for (var j = 0; j < width; j++) {
      blockID="u-"+i+"-"+j;
      $("#container").append(
        "<div class=\'unit-block\' id=\'"+ blockID + "\'></div>");
        blockID = "#" + blockID;
        $(blockID).css('display','inline');
        $(blockID).css('margin','0');
        $(blockID).css('padding','0');
        unitWidth = (widthpx / width) - (2*borderWidth);
        $(blockID).css('height',unitWidth +'px');
        $(blockID).css('width',unitWidth +'px');

          $(blockID).css('float','left');

    }
  }
  $(".unit-block").hover( function() {
    $(this).css('background-color',"#000000")
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
