//Copyright Jason McKee 2017.  All rights reserved.
var width = 16;
var widthpx = 480;
var borderWidth = 0;
var gradient = 1;
var colorUsed = "black";
var pencilUp = 0;
//colors = new Array(width);

function darken(blockID) {
  blockID = "#" + blockID;
  colorNum = $(blockID).attr('colorNum');
  colorNumber = parseInt(colorNum,10);
    switch(colorUsed) {
      case "black":
        finalColor = "#111111";
        increment = 0x111111;
        break;
      case "red":
        finalColor = "#440000";
        increment = 0x110000;
        break;
      case "green":
        finalColor = "#004400";
        increment = 0x001100;

        break;
      case "blue":
        finalColor = "#000044";
        increment = 0x000011;
        break;
      default:
        console.log("invalid colour used");
        finalColor = "#000000";
    }



  if (colorNumber <= 4 || gradient === 0) {
    $(blockID).attr('colorNum',"0");

        return finalColor;
  }
  colorNumber --;

  $(blockID).attr('colorNum',colorNumber.toString(10));
  newColor = colorNumber * increment;
  console.log(newColor)

  return ("#" + ("0000" + newColor.toString(16)).substr(-6));

}

function setup(width, widthpx, borderWidth) {

  for (var i = 0; i < width; i++ ) {
    for (var j = 0; j < width; j++) {
      blockID="u-"+i+"-"+j;
      $("#container").append(
        "<div class=\'unit-block\' id=\'"+ blockID + "\'></div>");
        $("#" + blockID).attr("colorNum","15");


    }
  }
  $(".unit-block").css('display','inline');
  $(".unit-block").css('margin','0');
  $(".unit-block").css('padding','0');
  unitWidth = (widthpx / width) - (2*borderWidth);
  $(".unit-block").css('height',unitWidth +'px');
  $(".unit-block").css('width',unitWidth +'px');

    $(".unit-block").css('float','left');

  $(".unit-block").mouseenter( function() {
    if (pencilUp === 0) {
        blockID = $(this).attr("id");
        newColor = darken(blockID);
        console.log(newColor);
        $(this).css("background-color",newColor);
      }
  });
}

function unsetColors() {
      $("#black-button").css("border-style","outset");
            $("#red-button").css("border-style","outset");
                  $("#green-button").css("border-style","outset");
                        $("#blue-button").css("border-style","outset");

}
function reset(width,widthpx, borderWidth) {
  $('#container').empty();
  setup(width,widthpx, borderWidth);

}


$(document).ready(function() {

  setup(width,widthpx, borderWidth);


  $("body").on('keydown', function(key) {
    console.log("key down" + key.which.toString());
    if (key.which === 76 && pencilUp === 0) {
      pencilUp = 1;
      console.log("l key down");
    } else if(key.which === 76) {
      pencilUp = 0;
      console.log("l key down");
    }


});




  $("#reset-button").on('click', function() {
    var newWidth = prompt('Please enter the width you would like 1 - 100', width);
    if(1 < newWidth && newWidth <= 100) {
      width = newWidth;
      reset(width,widthpx, borderWidth)

  }
});

  $(".control-button").on('mousedown', function() {
    $(this).css("border-style","inset");


  });
  $("#reset-button").on('mouseup', function() {
    $(this).css("border-style","outset");


  });
  $("#reset-button").on('mouseout', function() {
    $(this).css("border-style","outset");


  });


  $("#black-button").on('click', function() {
    if (colorUsed != "black") {
      colorUsed = "black"
      unsetColors();
      $("#black-button").css("border-style","inset");
      reset(width,widthpx, borderWidth)

    }
  }
  );

  $("#blue-button").on('click', function() {
    if (colorUsed != "blue" ) {
      colorUsed = "blue"
      unsetColors();
      $("#blue-button").css("border-style","inset");
      reset(width,widthpx, borderWidth)

    }
  }
  );

  $("#red-button").on('click', function() {
    if (colorUsed != "red" ) {
      colorUsed = "red"
      unsetColors();
      $("#red-button").css("border-style","inset");
      reset(width,widthpx, borderWidth)

    }
  }
  );

  $("#green-button").on('click', function() {
    if (colorUsed != "green" ) {
      colorUsed = "green"
      unsetColors();
      $("#green-button").css("border-style","inset");
      reset(width,widthpx, borderWidth)

    }
  }
  );
  $("#gradient-button").on('click', function() {
    if (gradient === 1) {
      gradient = 0
      $("#gradient-button").css("border-style","outset");
    } else {
      gradient = 1
      $("#gradient-button").css("border-style","inset");
    }
  }
  );

  $("#black-button").css("border-style","inset");
    $("#gradient-button").css("border-style","inset");

});
