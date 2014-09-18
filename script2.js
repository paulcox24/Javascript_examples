
var keys = document.querySelectorAll('#calculator span');
var operators = ['+',"-","*",'/'];
var decimal_added = false;

for(var k = 0; k < keys.length; k+=1) {
  keys[k].onclick = function() {
    var calc_screen = document.querySelector('.screen');
    var calc_screen_value = calc_screen.innerHTML;
    var button_value = this.innerHTML;

    if(button_value == 'Clear'){
      calc_screen.innerHTML = '';
      decimal_added = false;
    }
    else if(button_value == '='){
      var equation = calc_screen_value;
      var last_value = equation[equation.length - 1];

      if (operators.indexOf(last_value) >= 0 || last_value == '.') 
        equation = equation.replace(/.$/, '');

      if(equation)
      calc_screen.innerHTML = eval(equation);

      decimal_added = false;
    }
    else if(button_value == 'Back'){
      calc_screen.innerHTML = calc_screen_value.replace(/.$/, '');
      
      decimal_added = false;
    }
    else if(operators.indexOf(button_value) >= 0){
      var last_value = calc_screen_value[calc_screen_value.length - 1];

      if(calc_screen_value != '' && operators.indexOf(last_value) == -1)
        calc_screen.innerHTML += button_value;

      else if(calc_screen_value == '' && button_value == '-')
        calc_screen.innerHTML += button_value;

      if(operators.indexOf(last_value) >= 0 && calc_screen_value.length > 1){
        calc_screen.innerHTML = calc_screen_value.replace(/.$/, button_value);
      }
      
      decimal_added = false;
    }
    else if(button_value == '.'){
      if(!decimal_added) {
        calc_screen.innerHTML += button_value;
        decimal_added = true
      }
    }
    else{
      calc_screen.innerHTML += button_value
    }

  }

}