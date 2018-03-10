const newTaxFunction = function (countryName, taxRate, ...exemptItems) {
  return function (item, priceInCents) {
    const formattedPrice = '$' + (priceInCents / 100).toFixed(2)
    const exempt = exemptItems.indexOf(item) > -1
    const taxDue = exempt ? 0 : priceInCents * taxRate / 100
    const formattedTaxDue = '$' + taxDue.toFixed(2)

    console.log(`In ${countryName}, ${item} costs ${formattedPrice}.`)
    console.log('That item', exempt ? 'is' : 'is not', 'exempt from taxation.')
    console.log(`The total tax due is: ${formattedTaxDue}.`)
  }
}

const franceTax = newTaxFunction('France', 0.15, 'wine', 'macaron', 'baguette', 'croissant')
const canadaTax = newTaxFunction('Canada', 0.125, 'maple syrup', 'poutine', 'kindness')
const mexicoTax = newTaxFunction('Mexico', 0.05, 'queso', 'futbol', 'tequila', 'avocado')

canadaTax('poutine', 599)
canadaTax('futbol', 1999)
mexicoTax('Big Mac', 199)
franceTax('macaron', 149)

// const franceTax = function (item, priceInCents) {
//   const formattedPrice = '$' + (priceInCents / 100).toFixed(2)
//   const exemptItems = ['wine', 'macaron', 'baguette', 'croissant']
//   const exempt = exemptItems.indexOf(item.toLowerCase()) > -1
//
//   const taxRate = 0.15
//   const taxDue = exempt ? 0 : priceInCents * taxRate / 100
//   const formattedTaxDue = '$' + taxDue.toFixed(2)
//
//   console.log(`In France, ${item} costs ${formattedPrice}.`)
//   console.log('That item', exempt ? 'is' : 'is not', 'exempt from taxation.')
//   console.log(`The total tax due is: ${formattedTaxDue}.`)
// }
//
// const canadaTax = function (item, priceInCents) {
//   const formattedPrice = '$' + (priceInCents / 100).toFixed(2)
//   const exemptItems = ['maple syrup', 'poutine', 'kindness']
//   const exempt = exemptItems.indexOf(item.toLowerCase()) > -1
//
//   const taxRate = 0.125
//   const taxDue = exempt ? 0 : priceInCents * taxRate / 100
//   const formattedTaxDue = '$' + taxDue.toFixed(2)
//
//   console.log(`In Canada, ${item} costs ${formattedPrice}.`)
//   console.log('That item', exempt ? 'is' : 'is not', 'exempt from taxation.')
//   console.log(`The total tax due is: ${formattedTaxDue}.`)
// }
//
// const mexicoTax = function (item, priceInCents) {
//   const formattedPrice = '$' + (priceInCents / 100).toFixed(2)
//   const exemptItems = ['queso', 'futbol', 'tequila', 'avocado']
//   const exempt = exemptItems.indexOf(item.toLowerCase()) > -1
//
//   const taxRate = 0.05
//   const taxDue = exempt ? 0 : priceInCents * taxRate / 100
//   const formattedTaxDue = '$' + taxDue.toFixed(2)
//
//   console.log(`In Mexico, ${item} costs ${formattedPrice}.`)
//   console.log('That item', exempt ? 'is' : 'is not', 'exempt from taxation.')
//   console.log(`The total tax due is: ${formattedTaxDue}.`)
// }
