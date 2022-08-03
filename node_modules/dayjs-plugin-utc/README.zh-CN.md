[English](./README.md) | 简体中文

> 这是适用于[dayjs](https://github.com/iamkun/dayjs)的一个插件，为dayjs赋予操作UTC时区的功能

---

## 使用方法

  * Via NPM:

  ```console
  npm i dayjs-plugin-utc --save
  ```

  ```javascript
  import dayjsPluginUTC from 'dayjs-plugin-utc'

  dayjs.extend(dayjsPluginUTC)
  ```

  * Via CDN:

  ```html
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://unpkg.com/dayjs"></script>
  <script src="https://unpkg.com/dayjs-plugin-utc"></script>
  <script>
    dayjs.extend(dayjsPluginUTC.default)
  </script>
  ```

  > **⚠️ 注意⚠️** 
  >
  > 当你 **没使用** 这个插件的时候，`dayjs()`返回的是基于你环境时区的实例
  > ```javascript
  > dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
  > ```
  > 而在你加载这个插件之后，`dayjs()`返回实例的时区将会与你传入的值有关
  > ```javascript
  > dayjs.extend(dayjsPluginUTC)
  > dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T03:04:05+06:00
  > ```
  > 如果你希望新建的实例的时区总是基于你本地时区，或者你使用这个插件之前已经在项目中使用了dayjs
  >
  > 你可以在引入插件时附上这个参数`parseToLocal: true`
  >
  > ```javascript
  > dayjs.extend(dayjsPluginUTC, { parseToLocal: true })
  > dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
  > ```
  >

## API

  ### 解析

  获得一个时区为UTC的实例

  ```javascript
    dayjs.utc() 
    dayjs.utc('2018-05-18T03:04:05+06:00') 
    /* (string | number | Date | Dayjs) 使用方法与 dayjs() 一致 */
  ```

  ### 取值

  你可以使用`dayjs().utcOffset()`来获取实例与UTC的时间差
  > 注意: `dayjs().utcOffset()` 返回的是与UTC真实的 _分钟_ 时差，与`Date.prototype.getTimezoneOffset`返回一个相反值不同

  你也可以使用`dayjs().isLocal()`或`dayjs().isUTC()`来确认当前实例的时区是否为本地时区或是否为UTC时区

  ```javascript
    dayjs().utcOffset() // (-480, -120, 0, 120, 480, etc.)
    dayjs().isLocal()   // true
    dayjs().isUTC()     // false
  ```

  ### 赋值

  使用`dayjs().utc()`和`dayjs().local()`可以将实例的时区切换到UTC或本地时区，你也可以使用`dayjs().utcOffset(Number)`将实例设置到一个指定的时区

  ```javascript
    let day = dayjs('2018-05-18T03:04:05+06:00')
    
    day.utc().format()           // 2018-05-17T21:04:05+00:00

    day.local().format()         // 2018-05-18T05:04:05+08:00

    day.utcOffset(240).format()  // 2018-05-18T01:04:05+04:00
  ```