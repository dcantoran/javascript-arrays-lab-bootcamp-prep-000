var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name) 
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop() 
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift() 
  return kittens;
}

function appendKitten(name) {
  var newKittens = [...kittens, name];
  return newKittens;
}

function prependKitten(name) {
  var newKitt = kittens[0].concat(name)
  return newKitt;
}