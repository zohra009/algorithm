/*

EXPRESSION := ( OPERAND OPERATOR OPERAND )
OPERAND := any positive number || EXPRESSION
OPERATOR := one of * / - +

(2*5) - valid
((6/2)+13) - valid

(2+) - invalid (missing operand)
(4/6 - invalid (mismatched parentheses)
(4+-13) - invalid (multiple operators)

2(6/3) - invalid (missing operator)
(50*21)(3-8) - invalid (missing operator)

4+5 - invalid (no parentheses)

(-3) - invalid (missing left operand)
(-4+13) - invalid (missing left operand & too many clauses / negative numbers not allowed)
console.log(eval('2 + 2') === eval('4'))
*/
$(document).ready(function() {
    const isExpressionValid = (input) => {
        my_number = complex(input("Number"))
      try{
      complex.compile(input)
          
      }
      catch (error) {
    return true;
  } else {
      return false
  }
  
    
       
    //   return input === input 
    //not sure do with a friend 
    }
    let input = "(-4/5)";
    $('.welcome').text(input + ' -> ' + isExpressionValid(input));
});