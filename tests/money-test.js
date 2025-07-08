import {currencyRoundOff} from '../scripts/utils/money.js';

if(currencyRoundOff(2095)==='20.95'){
    console.log('passed');
}
else{
    console.log('failed');
}

if(currencyRoundOff(0)==='0.00'){
    console.log('passed');
}
else{
    console.log('failed');
}

if(currencyRoundOff(2000.4)==='20.00'){
    console.log('passed');
}
else{
    console.log('failed');
}