
function parseTimezoneOffset(tz) {
  let execRet
  switch (typeof (tz)) {
    case 'string':
      if (/Z$/.test(tz)) return 0
      execRet = /([+-])(\d{2}):?(\d{2})/.exec(tz)
      return execRet && ((+execRet[3]) + (execRet[2] * 60)) * (execRet[1] === '+' ? 1 : -1)
    case 'number':
      if (Number.isNaN(tz)) return null
      return Math.abs(tz) < 16 ? tz * 60 : tz
    default:
      return null
  }
}

const padStart = (string, length, pad) => {
  const s = String(string)
  if (!s || s.length >= length) return string
  return `${Array((length + 1) - s.length).join(pad)}${string}`
}

const padZoneStr = (negMinuts) => {
  const minutes = Math.abs(negMinuts)
  const hourOffset = Math.floor(minutes / 60)
  const minuteOffset = minutes % 60
  return `${negMinuts <= 0 ? '+' : '-'}${padStart(hourOffset, 2, '0')}:${padStart(minuteOffset, 2, '0')}`
}

// eslint-disable-next-line import/prefer-default-export
export { parseTimezoneOffset, padZoneStr, padStart }
