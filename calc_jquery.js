$(function() {
  var $keys = $('#calculator span');
  var operators = ['+',"-","*",'/'];
  $keys.each(function(index,key){
    $( key ).click(function(){
      var $calc_screen = $('.screen');
      var $calc_screen_value = $calc_screen.html();
      var $button_value = $( key ).html();

      if($button_value == 'Clear'){
        $calc_screen.html('');
      }
      else if($button_value == 'Back'){
        $calc_screen.html( $calc_screen_value.slice(0, -1) );
      }
      else if($button_value == '='){
        var $equation = $calc_screen_value;
        
        if($equation)
        $calc_screen.html( eval($equation) );
      }
      else{
        $calc_screen.append( $button_value )
      }
    });
  });

});