# CalendarCard 日历

日历

## 引入

```tsx
import { CalendarCard } from '@nutui/nutui-react-taro'
```

## 示例代码

### 选择单个日期

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo1.tsx
	- thumbnail: 

:::

### 选择多个日期

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo2.tsx
	- thumbnail: 

:::

### 选择范围

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo3.tsx
	- thumbnail: 

:::

### 选择周

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo4.tsx
	- thumbnail: 

:::

### 受控模式

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo5.tsx
	- thumbnail: 

:::

### 自定义日期信息

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo6.tsx
	- thumbnail: 

:::

### 自定义周起始日

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo7.tsx
	- thumbnail: 

:::

### 自定义选择范围

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo8.tsx
	- thumbnail: 

:::

### 自定义禁止选择日期

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo9.tsx
	- thumbnail: 

:::

### 与 Popup 组合使用

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo10.tsx
	- thumbnail: 

:::

### 使用 Ref 上的方法

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo11.tsx
	- thumbnail: 

:::

### 搭配 Ref 使用自定义头

:::demo

- [外部示例代码]
	- description: 
	- src: /calendarcard/demos/taro/demo12.tsx
	- thumbnail: 

:::

## CalendarCard

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，单个日期 `single`，多个日期 `multiple`，日期范围 `range`，周选择 `week` | `string` | `single` |
| title | 自定义标题 | `ReactNode` | `-` |
| defaultValue | 默认值，单个日期 Date 格式，多个日期/范围选择 Date[] 格式 | `Date \| Date[]` | `-` |
| startDate | 限制范围开始日期 | `Date` | `-` |
| endDate | 限制范围结束日期 | `Date` | `-` |
| firstDayOfWeek | 设置周起始日，0 为周日，1 为周一 | `0-6` | `1` |
| disableDay | 设置不可选日期 | `(day: CalendarCardDay) => boolean` | `-` |
| renderDay | 日期信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayTop | 日期顶部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| renderDayBottom | 日期底部信息 | `(date: CalendarCardDay) => ReactNode` | `-` |
| value | 受控模式下的值，与 onChange 搭配使用 | `Date \| Date[]` | `-` |
| onDayClick | 点击后触发 | `(day: CalendarCardDay) => void` | `-` |
| onPageChange | 切换月份时触发 | `(val: { year, month }) => void` | `-` |
| onChange | 选择值发生变化时触发 | `(val: Date \| Date[]) => void` | `-` |

### CalendarCardDay

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| year | `number` | 年 |
| month | `number` | 月 |
| date | `number` | 日 |
| type | `prev \| current \| next` | 可选项。表示上一个月、当月、下一个月 |

### Ref

通过 ref 可以获取到 CalendarCard 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| jump | 在当前基础上前进或后退月数，正数向前，负数向后 | `step: number` |
| jumpTo | 跳转至特定的年月 | `year: number, month: number` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-calendar-active-background-color | 选中状态时的元素背景色 | `$color-primary` |
| \--nutui-calendar-choose-background-color | 选中时区间内元素的背景色，区别区间两头元素的背景色 | `rgba(#fa2c19, 0.09)` |
| \--nutui-calendar-disable-color | 不可选元素的字色 | `#bfbfbf` |
| \--nutui-calendar-base-font-size | 字号 | `$font-size-l` |
| \--nutui-calendar-day-width | 日历元素宽度 | `14.28%` |
| \--nutui-calendar-choose-color | 日历选中元素的字色 | `$color-primary` |
| \--nutui-calendar-day-active-border-radius | 日历选中元素的圆角 | `4px` |

<Contribution name="CalendarCard" />
