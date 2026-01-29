# Space 间距

#

元素排列中保持相同的宽度。

### 引入

```tsx
import { Space } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

- [外部示例代码]
	- description: 
	- src: /space/demos/h5/demo1.tsx
	- thumbnail: 

:::

### 换行

:::demo

- [外部示例代码]
	- description: 
	- src: /space/demos/h5/demo2.tsx
	- thumbnail: 

:::

### 垂直

:::demo

- [外部示例代码]
	- description: 
	- src: /space/demos/h5/demo3.tsx
	- thumbnail: 

:::

### 间距大小

:::demo

- [外部示例代码]
	- description: 
	- src: /space/demos/h5/demo4.tsx
	- thumbnail: 

:::

### 主轴对齐方式

:::demo

- [外部示例代码]
	- description: 
	- src: /space/demos/h5/demo5.tsx
	- thumbnail: 

:::

### 交叉轴对齐方式

:::demo

- [外部示例代码]
	- description: 
	- src: /space/demos/h5/demo6.tsx
	- thumbnail: 

:::

## Space

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 间距方向 | `'vertical'｜ 'horizontal'` | `'horizontal'` |
| align | 交叉轴对齐方式 | `'start'｜'end'｜'center'｜'baseline'` | `-` |
| justify | 主轴对齐方式 | `'start' ｜ 'end' ｜ 'center' ｜ 'between' ｜ 'around' ｜ 'evenly' ｜ 'stretch'` | `-` |
| wrap | 是否自动换行，仅在 horizontal 时有效 | `boolean` | `false` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 | 描述 |
| --- | --- | --- |
| \--nutui-space-gap | `8px` | 间距大小 |

<Contribution name="Space" />
