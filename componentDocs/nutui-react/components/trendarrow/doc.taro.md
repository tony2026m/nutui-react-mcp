# TrendArrow 指标趋势

带有箭头指示的百分比数字,用以展示指标趋势

## 引入

```tsx
import { TrendArrow } from '@nutui/nutui-react-taro'
```

## 示例代码

### 基础用法

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo1.tsx
	- thumbnail: 

:::

### 改变文字颜色

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo2.tsx
	- thumbnail: 

:::

### 指定小数位

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo3.tsx
	- thumbnail: 

:::

### 箭头在前面

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo4.tsx
	- thumbnail: 

:::

### 显示正负号

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo5.tsx
	- thumbnail: 

:::

### 是否展示0

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo6.tsx
	- thumbnail: 

:::

### 自定义颜色

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo7.tsx
	- thumbnail: 

:::

### 自定义图标

:::demo

- [外部示例代码]
	- description: 
	- src: /trendarrow/demos/taro/demo8.tsx
	- thumbnail: 

:::

## TrendArrow

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 数值，大于0时箭头向上，小于0时箭头向下 | `number` | `-` |
| digits | 小数位精度 | `number` | `2` |
| symbol | 是否显示加减号 | `boolean` | `false` |
| zero | 是否显示 0 | `boolean` | `false` |
| left | 是否在数字左侧显示箭头 | `boolean` | `false` |
| sync | 文字颜色是否与箭头同步 | `boolean` | `true` |
| color | 文字颜色 | `string` | `#333333` |
| riseColor | 向上箭头颜色 | `string` | `#FF0F23` |
| dropColor | 向下箭头颜色 | `string` | `#64b578` |
| riseIcon | 自定义向上箭头icon | `React.ReactNode` | `<TriangleUp/>` |
| dropIcon | 自定义向下箭头icon | `React.ReactNode` | `<TriangleDown/>` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-trendarrow-font-size | 指标趋势的文字大小 | `14px` |
| \--nutui-trendarrow-icon-margin | 指标趋势的文字与图标间距 | `4px` |

<Contribution name="TrendArrow" />
