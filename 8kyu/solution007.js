//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

//Use conditionals to return the proper message:

//My solution
function greet (name, owner) {
    if(name == owner){
        return `Hello boss`
    }else {
        return `Hello guest`
    }
  }

  greet('Nick', 'Nick')