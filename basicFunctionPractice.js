function sayHi() {
  return "Hi";
}

function myFunc() {
  return true;
}

function favFood(food) {
  return "My favorite food is " + food;
}

function centsInDollar() {
  return 100;
}

function double(num) {
  return num * 2;
}

function addition(one, two) {
  return one + two;
}

function favColor(color) {
  if(color === "blue") {
    return "That's my favorite color too!"
  } else {
    return "What a lame color."}
}

function numCompare(one, two) {
  if(one > two) {
    return "Greater Than";
  }
  else if(one < two) {
    return "Less Than";
  }
  else{
    return "Same Number";
  }
}

function threshold(num){
  if(num <= 100) {
    return true;
  }
  else{
    return false;
  }
}

function myOutfit(temp, weather) {
  if (temp >= 72 && weather === "rainy"){
    return "shorts and t-shirt, bring umbrella";
  }
  else if (temp >= 72 && weather === "sunny") {
    return "shorts and t-shirt";
  }
  else if(temp < 72 && weather === "rainy") {
    return "long pants and rain coat";
  }
  else if(temp < 72 && weather === "sunny") {
    return "long pants and sweater";
  }
}
