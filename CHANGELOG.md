# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-01-29

### Added

- 🎉 Initial release of NutUI-React MCP Service
- 🔧 基于 Model Context Protocol SDK 实现 MCP 服务器
- 📚 提供 4 个核心工具：
  - `list-components` - 列出所有可用组件（支持 H5/Taro）
  - `get-component-doc` - 获取组件详细文档
  - `get-component-example` - 获取组件示例代码
  - `get-nutui-info` - 获取 NutUI 版本和简介信息
- 📖 自动从 NutUI-React 仓库提取文档
- ⚡ 使用 node-cache 实现缓存机制，提升查询性能
- 🛠️ CLI 工具支持文档提取命令
- 🤖 专业的系统提示词，指导 AI 正确使用工具
- 📦 TypeScript + tsup 构建配置
- 🔍 支持 MCP Inspector 调试

### Technical Stack

- `@modelcontextprotocol/sdk: ^1.25.3`
- `node-cache: ^5.1.2`
- `zod: ^3.24.2`
- Node.js >= 20.0.0

### Notes

- 基于 NutUI-React v3.0.18
- 支持 H5 和 Taro（小程序）两种场景
- 包含 80+ 组件文档
- 适配 Cursor IDE 和 Claude Desktop

---

[0.1.0]: https://github.com/tony2026m/nutui-react-mcp/releases/tag/v0.1.0
