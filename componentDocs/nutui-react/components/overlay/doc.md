# Overlay 遮罩层

创建一个遮罩层，通常用于阻止用户进行其他操作

## 引入

```tsx
import { Overlay } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

- [外部示例代码]
	- description: 
	- src: /overlay/demos/h5/demo1.tsx
	- thumbnail: 

:::

### 自定义遮罩样式

:::demo

- [外部示例代码]
	- description: 
	- src: /overlay/demos/h5/demo2.tsx
	- thumbnail: 

:::

### 设置动画时间

:::demo

- [外部示例代码]
	- description: 
	- src: /overlay/demos/h5/demo3.tsx
	- thumbnail: 

:::

### 不锁定背景滚动

:::demo

- [外部示例代码]
	- description: 
	- src: /overlay/demos/h5/demo4.tsx
	- thumbnail: 

:::

### 嵌套内容

:::demo

- [外部示例代码]
	- description: 
	- src: /overlay/demos/h5/demo5.tsx
	- thumbnail: 

:::

### 点击遮罩不关闭

:::demo

- [外部示例代码]
	- description: 
	- src: /overlay/demos/h5/demo6.tsx
	- thumbnail: 

:::

## Overlay

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 当前组件是否显示 | `boolean` | `false` |
| duration | 动画时长，单位毫秒 | `number` | `300` |
| lockScroll | 背景是否锁定，strict 用于支持 iOS12 | `boolean\|strict` | `true` |
| zIndex | 设置组件页面层级 | `number` | `1000` |
| closeOnOverlayClick | 是否点击遮罩关闭 | `boolean` | `true` |
| onClick | 点击时触发 | `event: Event` | `-` |
| afterClose | 完全关闭后触发 | `() => void` | `-` |
| afterShow | 完全展示后触发 | `() => void` | `-` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-overlay-bg-color | 遮罩层背景颜色 | `$color-mask` |
| \--nutui-overlay-content-bg-color | 遮罩层嵌套内容背景颜色 | `$white` |
| \--nutui-overlay-content-color | 遮罩层嵌套内容字体颜色 | `$color-title` |
| \--nutui-overlay-animation-duration | 遮罩层动画延时的时长 | `0.3s` |

<Contribution name="Overlay" />
