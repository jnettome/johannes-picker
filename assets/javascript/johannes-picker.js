$(function () {
  
  $('.bullet-color').on('click', function(){
    if ( $('#color-picker').attr('class', 'visible') ) {
      $('.list-sort').removeAttr('class');
    }
    else { 
      $('#color-picker').attr('class', 'visible');
    }
  });

  $('path').on('click', function(){
    alert($(this).attr('fill'));
  }); 

});
