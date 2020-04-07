export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getDayOfWeek(date) {
  const table = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  }

  return table[date.getDay()]
}

export function buildAddress(address) {
  var string = [address['street'], address['street2'], address['city'], address['state']].filter(string => string).join(', ')

  if (address['zip']) {
    string = `${string} ${address['zip']}`
  }

  return string
}