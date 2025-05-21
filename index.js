const intvls = { s: 1000, m: 60000, h: 3600000, d: 86400000 }

export default (str) => {
  if (!str) return 0

  const strType = typeof str

  if (strType === 'number') return str
  if (strType !== 'string') return null

  const num = parseFloat(str)
  const intvl = str.slice(num.toString().length).trim()[0]

  if (intvl && !intvls[intvl]) return null

  return num * (intvls[intvl] || 1)
}
