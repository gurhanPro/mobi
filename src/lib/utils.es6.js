
export function getGroupPremiumEstimate(groupSize, selectedProduct){
  if(selectedProduct && groupSize){
    const calculatedPremium = Number(selectedProduct.premiums[0].amount_in_cents/ 100 * groupSize)
    const productBenefit = Number(selectedProduct.fixed_indemnity_amount_benefit)
    return Math.max(calculatedPremium, productBenefit ) + " per " + selectedProduct.premiums[0].granularity
  }else{
    return undefined
  }
}