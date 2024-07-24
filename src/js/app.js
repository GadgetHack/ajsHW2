// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

export function calcHealth({ name, health }) {
  if (health >= 50) {
    return 'healthy';
  } else if (health < 50 && health >= 15) {
    return 'wounded';
  } else if (health < 15) { 
    return 'critical';
  }
}
