// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// My Solution without recursion
function mygcd(x,y){
    let xArr = []
    let yArr = []
  for(let i=0; i <= x; i++){
  	if(x / i % 1 == 0){
    xArr.push(i)
    }
  }
  
  for(let i=0; i <= y; i++){
  	if(y / i % 1 == 0){
    yArr.push(i)
    }
  }
  let diff = xArr.filter(val => yArr.includes(val))
  return Math.max(...diff)
}

// Leon's without recursion
function mygcd(x,y){
    for(let i = Math.min(x,y); i > 0; i--){
        if(x % i === 0 && y % i === 0){
            return i
        }
    }
}

console.log(mygcd(30,12))

// With recursiono
function mygcd(x,y){
   if(y == 0){
    return x
   }else {
    return mygcd(y, (x % y))
   }
}
      
mygcd(270, 192)
// mygcd(y, (x % y)
// mygcd(192, (270 % 192)) x=192 y=78
// mygcd(78, (192 % 78)) x=78 y=36
// mygcd(36, (78 % 36)) x=36 y=6
// mygcd(6, (36 % 6)) x=6 y=0

