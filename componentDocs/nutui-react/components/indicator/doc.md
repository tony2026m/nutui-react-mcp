# Indicator 指示器

显示一个任务或流程的进度，常用于开通流程。

## 引入

```tsx
import { Indicator } from '@nutui/nutui-react'
```

## 示例代码

### 基础用法

:::demo

- [外部示例代码]
	- description: 
	- src: /indicator/demos/h5/demo1.tsx
	- thumbnail: 

:::

### 白色

:::demo

- [外部示例代码]
	- description: 
	- src: /indicator/demos/h5/demo5.tsx
	- thumbnail: 

:::

### 类型

:::demo

- [外部示例代码]
	- description: 
	- src: /indicator/demos/h5/demo6.tsx
	- thumbnail: 

:::

### 自定义节点

:::demo

- [外部示例代码]
	- description: 
	- src: /indicator/demos/h5/demo2.tsx
	- thumbnail: 

:::

### 自定义颜色大小

:::demo

- [外部示例代码]
	- description: 
	- src: /indicator/demos/h5/demo3.tsx
	- thumbnail: 

:::

### 竖向展示

:::demo

- [外部示例代码]
	- description: 
	- src: /indicator/demos/h5/demo4.tsx
	- thumbnail: 

:::

## Indicator

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前页 | `number` | `0` |
| total | 总页数 | `number` | `2` |
| direction | 方向，默认为水平方向 | `horizontal` \| `vertical` | `horizontal` |
| color | 颜色 | `primary` \| `default` | `primary` |
| type | 交互类型 | `anchor` \| `slide`\| `dualScreen` | `anchor` |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-indicator-color | 指示器焦点时色值 | `$color-primary` |
| \--nutui-indicator-dot-color | 指示器默认色值 | `$color-text-disabled` |
| \--nutui-indicator-dot-size | 指示器尺寸 | `3px` |
| \--nutui-indicator-dot-active-size | 指示器焦点时尺寸 | `6px` |
| \--nutui-indicator-border-radius | 指示器焦点时的border值 | `$radius-xxs` |
| \--nutui-indicator-dot-margin | 指示器横向时的margin值 | `$spacing-xxxs` |

<Contribution name="Indicator" />
