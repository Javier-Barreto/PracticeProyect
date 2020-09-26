jQuery('document').ready(function($){
  var Btnmenu= $('.menu'),
    menu = $('.navigation ul');

  Btnmenu.click(function(){
    if(menu.hasClass('show'))
    {
      menu.removeClass('show');
    }
    else
    {
      menu.addClass('show');
    }
  });
});