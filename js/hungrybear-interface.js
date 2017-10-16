import {HungryBear} from './../js/hungrybear.js';

$(document).ready(function(){
  $('#bearName').submit(function(event){
    event.preventDefault();
    let name = $('#name').val();
    let userBear = new HungryBear(name);
    console.log(userBear.foodLevel);
    $('#nameInput').text(name);
    $('#bearName').hide();
    $('#showName').show();

    let hungerLevel = userBear.setHunger();
    $('#hunger').append("<li>" + userBear.foodLevel + "</li>");
    // while (userBear.foodLevel > 0) {
    //   $('#hunger').append("<li>" + userBear.foodLevel + "</li>");
    // }

  });
  $('#feed').click(function(){
    feed();
  });
});
