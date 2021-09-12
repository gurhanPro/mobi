
export function getGroupPremiumEstimate(groupSize, selectedProduct){
  if(selectedProduct && groupSize){
    const calculatedPremium = Number(selectedProduct.premiums[0].amount_in_cents/ 100 * groupSize)
    const productBenefit = Number(selectedProduct.fixed_indemnity_amount_benefit)
    return Math.max(calculatedPremium, productBenefit ) + " per " + selectedProduct.premiums[0].granularity
  }else{
    return undefined
  }
}

export function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() + 1).toString();
  const dd = date.getDate().toString();

  const mmChars = mm.split('');
  const ddChars = dd.split('');

  return `${yyyy}-${mmChars[1] ? mm : `0${mmChars[0]}`}-${
    ddChars[1] ? dd : `0${ddChars[0]}`
  }`;
}