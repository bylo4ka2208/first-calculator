const SYMBOLS = {
    plus: '+',
    minus: '-',
    multiplication: '*',
    division: '/',
};

function calculator(a, b, symbol) {
    let result = null;

    switch (symbol) {

        case SYMBOLS['plus']:
            result = plus(a, b)
            break;

        case SYMBOLS['minus']:
            result = minus(a, b)
            break;

        case SYMBOLS['multiplication']:
            result = multiplication(a, b)
            break;
            
        case SYMBOLS['division']:
            result = division(a, b)
            break;    

        default:
            break;
    };

    return result;
}