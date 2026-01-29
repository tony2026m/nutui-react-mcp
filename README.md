# NutUI-React MCP Service

<div align="center">

[![npm version](https://img.shields.io/npm/v/@tony2026m/nutui-react-mcp.svg)](https://www.npmjs.com/package/@tony2026m/nutui-react-mcp)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)

</div>

## 📖 介绍

`nutui-react-mcp` 是一个基于 Model Context Protocol (MCP) 的 NutUI-React 组件库智能助手服务。通过提供组件文档查询、API 文档、代码示例等功能，显著减少 AI 在生成 NutUI 组件代码时的幻觉问题，帮助开发者更准确、高效地使用 NutUI-React 组件库开发移动端应用。

### 核心特性

- 🎯 **精确的组件查询** - 支持 H5 和小程序（Taro）两种场景的组件列表查询
- 📚 **完整的文档支持** - 提供组件属性、API、使用方法等详细文档
- 💡 **代码示例获取** - 获取组件的外部示例代码，快速理解使用方法
- 🚀 **智能缓存机制** - 使用 node-cache 缓存查询结果，提升响应速度
- 🔧 **自动化文档提取** - 支持从 NutUI-React 仓库自动提取和更新组件文档

## 📦 安装

### 全局安装

```bash
npm install -g @tony2026m/nutui-react-mcp
```

### 作为依赖安装

```bash
npm install @tony2026m/nutui-react-mcp
```

或使用 pnpm:

```bash
pnpm add @tony2026m/nutui-react-mcp
```

## 🚀 使用说明

### 启动 MCP 服务

```bash
# 使用全局安装
nutui-react-mcp

# 使用 npx
npx @tony2026m/nutui-react-mcp

# 本地开发
pnpm start
```

### 提取组件文档

```bash
# 从默认位置提取（../.temp/nutui-react）
nutui-react-mcp extract

# 从指定路径提取
nutui-react-mcp extract /path/to/nutui-react
```

### 在 Cursor/Claude Desktop 中配置

在 MCP 配置文件中添加（通常在 `~/Library/Application Support/Claude/claude_desktop_config.json` 或 Cursor 配置中）:

```json
{
  "mcpServers": {
    "NutUI Components": {
      "command": "npx",
      "args": ["@tony2026m/nutui-react-mcp"]
    }
  }
}
```

### 可用工具

1. **list-components** - 列出所有可用组件
   - 参数: `isH5` (boolean) - 是否查询 H5 组件
   
2. **get-component-doc** - 获取组件详细文档
   - 参数: `isH5` (boolean) - 是否查询 H5 组件, `componentName` (string) - 组件名称
   
3. **get-component-example** - 获取组件示例代码
   - 参数: `src` (string) - 示例代码路径
   
4. **get-nutui-info** - 获取 NutUI 版本和简介信息

### 示例提示词

```
# 查询 H5 组件列表
我需要开发一个 H5 表单页面，有哪些可用的组件？

# 查询组件文档
告诉我 Form 组件在小程序中如何使用？

# 获取示例代码
获取 Form 组件基础用法的示例代码（路径：/form/demos/taro/demo1.tsx）
```

## 🔧 开发

### 环境要求

- Node.js >= 20.0.0
- pnpm (推荐)
- Python 3.x (用于文档提取)

### 开发命令

```bash
# 安装依赖
pnpm install

# 开发模式（带 watch）
pnpm dev

# 构建
pnpm build

# 测试服务
pnpm test

# 使用 MCP Inspector 调试
pnpm inspector
```

## 🤝 参与贡献

欢迎贡献代码、报告问题或提出建议！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 许可证

本项目采用 [MIT](LICENSE) 许可证。

## 🔗 相关链接

- [NutUI-React 官方文档](https://nutui.jd.com/react/)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [问题反馈](https://github.com/tony2026m/nutui-react-mcp/issues)

## 👤 作者

**tony2026m**
- Email: mly7758@163.com
- GitHub: [@tony2026m](https://github.com/tony2026m)

---

<div align="center">
Made with ❤️ by tony2026m
</div>
