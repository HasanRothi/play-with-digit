export function digitBn (n) {
    return Intl.NumberFormat('bn').format(n)
}

export function digitFormat (n)  {
    if (n < 1e3) { return n }
    if (n >= 1e3 && n < 1e6) { return +(n / 1e3).toFixed(1) + 'K' }
    if (n >= 1e6 && n < 1e9) { return +(n / 1e6).toFixed(1) + 'M' }
    if (n >= 1e9 && n < 1e12) { return +(n / 1e9).toFixed(1) + 'B' }
    if (n >= 1e12) { return +(n / 1e12).toFixed(1) + 'T' }
}
export function digitDateEnToBn (date) {
  return Intl.DateTimeFormat('bn').format(date)
}
export function digitTimeEnToBn (date) {
  return new Intl.DateTimeFormat('bn-BN', { timeStyle: 'long' }).format(date)
}
export function dateEnToBn (date) {
  return new Intl.DateTimeFormat('bn-BN', { dateStyle: 'full'}).format(date)
}
export function dateTimeEnToBn (date) {
  return new Intl.DateTimeFormat('bn-BN', { dateStyle: 'full', timeStyle: 'long' }).format(date)
}
  
export default { digitBn, digitFormat, digitDateEnToBn, digitTimeEnToBn, dateEnToBn, dateTimeEnToBn }