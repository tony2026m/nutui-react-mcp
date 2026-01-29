# Price 价格

用来对商品价格数值的小数点前后部分应用不同样式，还支持人民币符号、千位分隔符、设置小数点位数等功能。

## 引入

```tsx
import { Price } from '@nutui/nutui-react'
```

## 示例代码

### 支持尺寸：small、normal、large、xlarge

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo1.tsx
	- thumbnail: 

:::

### 场域分类：原子级、模块级、列表级、页面级

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo9.tsx
	- thumbnail: 

:::

### 不保留小数

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo2.tsx
	- thumbnail: 

:::

### 有人民币符号，无千位分隔

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo3.tsx
	- thumbnail: 

:::

### 带人民币符号，有千位分隔，保留小数点后三位

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo4.tsx
	- thumbnail: 

:::

### 调整 symbol 符号位置

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo5.tsx
	- thumbnail: 

:::

### 不展示 symbol 符号

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo6.tsx
	- thumbnail: 

:::

### 异步随机变更

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo7.tsx
	- thumbnail: 

:::

### 划线价

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo8.tsx
	- thumbnail: 

:::

### 自定义颜色

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo10.tsx
	- thumbnail: 

:::

### 数据原样输出

:::demo

- [外部示例代码]
	- description: 
	- src: /price/demos/h5/demo11.tsx
	- thumbnail: 

:::

## Price

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| color | 价格类型, 支持自定义颜色 | `primary` \| `gray` \| `darkgray` \| `string` | `primary` |
| price | 价格数量 | `number` | `0` |
| symbol | 符号类型 | `string` | `&yen;` |
| digits | 小数位位数，传入`null`数据原样输出 | `number` \| `null` | `2` |
| thousands | 是否按照千分号形式显示 | `boolean` | `false` |
| position | 符号显示在价格前或者后，`before`、`after` | `string` | `before` |
| size | 价格尺寸，`xlarge` \| `large` \| `normal` \| `small` | `string` | `normal` |
| line | 是否划线价 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-price-primary-color | type为primary时文字颜色 | `#ff0f23` |
| \--nutui-price-color | type为gray时文字颜色 | `#888b94` |
| \--nutui-price-darkgray-color | type为darkgray时文字颜色 | `#1a1a1a` |
| \--nutui-price-line-color | 划线价颜色 | `#888b94` |
| \--nutui-price-symbol-padding-right | 符号的右内边距 | `0px` |
| \--nutui-price-symbol-xlarge-size | xlarge 尺寸符号字体大小 | `12px` |
| \--nutui-price-integer-xlarge-size | xlarge 尺寸整数部分字体大小 | `24px` |
| \--nutui-price-decimal-xlarge-size | xlarge 尺寸小数部分字体大小 | `12px` |
| \--nutui-price-symbol-large-size | large 尺寸符号字体大小 | `12px` |
| \--nutui-price-integer-large-size | large 尺寸整数部分字体大小 | `18px` |
| \--nutui-price-decimal-large-size | large 尺寸小数部分字体大小 | `12px` |
| \--nutui-price-symbol-normal-size | normal 尺寸符号字体大小 | `12px` |
| \--nutui-price-integer-normal-size | normal 尺寸整数部分字体大小 | `16px` |
| \--nutui-price-decimal-normal-size | normal 尺寸小数部分字体大小 | `12px` |
| \--nutui-price-symbol-small-size | small 尺寸符号字体大小 | `12px` |
| \--nutui-price-integer-small-size | small 尺寸整数部分字体大小 | `12px` |
| \--nutui-price-decimal-small-size | small 尺寸小数部分字体大小 | `12px` |

<Contribution name="Price" />
