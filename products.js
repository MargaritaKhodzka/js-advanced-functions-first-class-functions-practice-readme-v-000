const callback = function (el, i, arr) {
	console.log('The current element is', el)
	console.log('The index of the current element is', i)
	console.log('The current array is', arr)
	console.log('----------------')
}

['Red', 'Yellow', 'Blue'].forEach(callback)

// const myForEach = function (arr, cb) {
// 	for (const el of arr) {
// 		cb(el, arr.indexOf(el), arr)
// 	}
// }

----------------

const guestList = ['Kate', 'Jonas', 'Lisa', 'jan', 'kaitlin']
const comparator = function (a, b) {
  return a.localeCompare(b)
}
guestList.sort(comparator)

const primes = [13, 7, 17, 2, 5, 3]

const numberSorter = function (num1, num2) {
  return num1 - num2
}

primes.sort(numberSorter)

-----------------

const products = [
  {
    name: 'Head & Shoulders Shampoo',
    price: 4.99
  },
  {
    name: 'Twinkies',
    price: 7.99
  },
  {
    name: 'Oreos',
    price: 6.49
  },
  {
    name: 'Jasmine-scented bath pearls',
    price: 13.99
  }
]

// const getTotalAmountForProducts = function (products) {
//   let totalPrice = 0
//
//   products.forEach(function (product) {
//     totalPrice += product.price
//   })
//   return totalPrice
// }
//
// getTotalAmountForProducts(products)
//
// const gatherProductNames = function (products) {
//   const names = []
//
//   products.forEach(function (product) {
//     names.push(product.name)
//   })
//   return names
// }
// gatherProductNames(products)

-----------------

// const reduceProductNames = function (agg, el, i, arr) {
//   console.log('The aggregate up to this point is:', agg)
//   console.log("The current element's name is:", el)
//   console.log('The index of the current element is:', i)
//   console.log('---------')
//   return [...agg, el.name]
// }
// products.reduce(reduceProductNames, [])
//
// const reduceProductPrices = function (agg, el, i, arr) {
//   console.log('The aggregate up to this point is:', agg)
//   console.log('The index of the current element is:', i)
//   console.log("The current element's price is:", el.price)
//   console.log('---------')
//
//   return agg + el.price
// }
// products.reduce(reduceProductPrices, 0)

const stringify = function (agg, el, i, arr) {
  let stringifiedElement = el.name + ' is $' + el.price + '. '

  if (i === arr.length - 1) {
    stringifiedElement += 'The total price is $' + (agg.totalPrice + el.price) + '.'

    return agg.string + stringifiedElement
  }
  return {
    string: agg.string + stringifiedElement,
    totalPrice: agg.totalPrice + el.price
  }
}
products.reduce(stringify, {string: '', totalPrice: 0})
