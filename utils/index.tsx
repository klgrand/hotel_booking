export const formatPrice = (price: number, decimal: number): string => {
  const currency = ''
  const formattedNumberWithCommas = Math.floor(price).toLocaleString()
  const fixedDecimalNumber = price.toFixed(decimal)
  if(decimal === 0) {
    return `${currency}${formattedNumberWithCommas}`
  }
  return `${currency}${formattedNumberWithCommas}.${
    fixedDecimalNumber.split('.')[1]
  }`
}