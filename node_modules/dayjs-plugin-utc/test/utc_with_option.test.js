import dayjs from 'dayjs'
import utcPlugin from '../src'

dayjs.extend(utcPlugin, { parseToLocal: true })

const LOCALE_TZ = new Date().getTimezoneOffset()

it('new instance is local', () => {
  let timeStr = '2018-05-18T03:04:05+08:00'
  if (LOCALE_TZ === -480) timeStr = '2018-05-18T03:04:05+07:00'
  expect(dayjs(timeStr).isLocal()).toBe(true)
})
