/**
 * Created by zhangxiang on 2017/11/16.
 */
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.mul(two).toString();
  }
  if (operation === '÷') {
    return one.div(two).toString();
  }
  if (operation === '%') {
    return one.mod(two).toString();
  }
  throw Error(`无法识别的运算符'${operation}'`);
}
