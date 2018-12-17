(() => { //(function() {...} for ES5

    setTimeout( () => {
    const a = Number(prompt('Enter first argument!'));
    const b = Number(prompt('Enter second argument!'));

        /**  while  */

    let action;
    do {
      const  action = prompt('Enter action as arithmetical operation');
    }
    while (
        !(
            '+' === action
            || '-' === action
            || '/' === action
            || 'power' === action
         )
     );

    /**  ternaty operator construction  */

    '+' === action
        ? alert(a + ' + ' + b + ' = ' + (a + b))
        : ('-' === action)
            ? alert(a + ' - ' + b + ' = ' + (a - b))
            : ('*' === action)
              ? alert(a + ' * ' + b + ' = ' + (a * b))
                :('power' === action)
                ? alert(a + ' power ' + b + ' = ' + (a ** b))
                    : alert('Unavailable action!')
    ;

    /**  if else construction */

    // if ('+' === action) {
    //     alert(a + ' + ' + b + ' = ' + (a + b));
    // } else  if ('-' === action) {
    //     alert(a + ' - ' + b + ' = ' + (a - b));
    // }
    // else  if ('*' === action) {
    //     alert(a + ' * ' + b + ' = ' + (a * b));
    // }
    // else  if ('%' === action) {
    //     alert(a + ' % ' + b + ' = ' +  (a % b));
    // } else  {
    //     alert('Unavailable action');
    // }

     /**  switch case construction */

    // switch (action) {
    //     case '+':
    //         alert(a + ' + ' + b + ' = ' + (a + b));
    //         break;
    //     case '-':
    //         alert(a + ' - ' + b + ' = ' + (a - b));
    //         break;
    //     case '*':
    //         alert(a + ' * ' + b + ' = ' + (a * b));
    //         break;
    //     case '/':
    //         alert(a + ' / ' + b + ' = ' + (a / b));
    //         break;
    //     default:
    //         alert('Unavailable action');
    //         break;
    // }

    }, 10);

}) ();