export const getBEMClasses = (base, modifiers, additionalClassName) => {
  const classes = [base]

  Object.keys(modifiers).forEach(modifier => {
    if (!modifiers[modifier]) return
    classes.push(`${base}--${modifier}`)
  })

  if (additionalClassName) {
    classes.push(additionalClassName)
  }

  return classes.join(' ')
}
