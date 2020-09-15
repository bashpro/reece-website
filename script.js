$(document).ready(function() {

  $(".mb").on('click',function(){
    var picked = $(this).attr('data-btn');

    $('html, body').animate({
        scrollTop: $("#" + picked).offset().top
    }, 1200);

  });

  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var protop = $('.cardbox p:eq(2)').offset().top;
    var proheight = $('.cardbox p:eq(2)').height();

    if(scroll > protop + proheight){
      $(".header, .mbutton").addClass('p-colour')
    }else {
      $(".header, .mbutton").removeClass('p-colour')
    }

  });

  $(".pb-card, .pi-close").on('click', function(){
    $(".productinfo").toggleClass('hide');
    $(".pi-box").addClass('active')
  });

  $(".pi-close").on('click', function(){
    $(".pi-box").removeClass('active')
  });

  $(".mb, .menubutton").on('click', () => {
    $(".mbutton").toggleClass('active');
  });

//////////////

  $(".price-box").on('click', function() {
    //vars
    //to make sure we are picking the right card
    var picked2 = $(this).attr('data-card');
    //make it specific id
    var cardName = $("#card" + picked2);
    var info = $("#info" + picked2)

    //make sure to remove all active classes
    $(".price-box2, .pid-box").removeClass('active')

    //only the choosen card is active
    cardName.addClass('active');
    info.addClass('active')

    //all the cards but active get hidden class
    $(".price-box2:not(cardName)").addClass('hidden');
    $(".pid-box:not(info)").addClass('hidden')

    //a back up if statement if theres a mistake
    if ($(".price-box2, .pid-box").hasClass('active')) {
      cardName.removeClass('hidden');
      info.removeClass('hidden')
    }

  });

  $("#piback").on('click', function(){

    if ($(".price-box2").hasClass('active')) {
      //get the data number
      var pic = $(".price-box2.active").attr('data-card');
      //add hidden remove active
      $(".price-box2.active").addClass('hidden').removeClass('active');
      $(".pid-box.active").addClass('hidden').removeClass('active');

      //take the data number and - 01
      pic = pic - 01;

      //if the data number is 0, change it to 4
      if (pic === 0) {
        pic = 4;
      }

      //take that pic number and add a 0 infront
      var newPic = "0" + pic;

      //set the strings of #id with new number
      var cardNum = $("#card" + newPic);
      var infoNum = $("#info" + newPic)

      //remove hidden of current selected id and add active
      cardNum.removeClass('hidden').addClass('active');
      infoNum.removeClass('hidden').addClass('active');

    }

  });

  $("#pifront").on('click', function(){
    if ($(".price-box2").hasClass('active')) {
      //get the data number
      var pic = $(".price-box2.active").attr('data-card');
      //add hidden remove active
      $(".price-box2.active").addClass('hidden').removeClass('active');
      $(".pid-box.active").addClass('hidden').removeClass('active');

      //take the data number and - 00 to make it a single number
      pic = pic - 00;

      //then add 1 to the number
      pic = pic + 1;

      //if the data number is 5, change it to 1
      if (pic === 5) {
        pic = 1;
      }

      //take that pic number and add a 0 infront
      var newPic = "0" + pic;

      //set the strings of #id with new number
      var cardNum = $("#card" + newPic);
      var infoNum = $("#info" + newPic)

      //remove hidden of current selected id and add active
      cardNum.removeClass('hidden').addClass('active');
      infoNum.removeClass('hidden').addClass('active');

    }

  });

});
