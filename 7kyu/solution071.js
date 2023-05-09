// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }