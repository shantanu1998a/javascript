/* If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

For example: */

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6