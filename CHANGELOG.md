# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2026-01-29

### Added

#### Core Features
- 🎉 Initial release of NutUI-React MCP Service
- 🔧 Implemented MCP server based on Model Context Protocol SDK
- 📚 Four core tools for NutUI-React component queries:
  - `list-components` - List all available components (H5/Taro)
  - `get-component-doc` - Get detailed component documentation
  - `get-component-example` - Retrieve component example code
  - `get-nutui-info` - Get NutUI version and overview information

#### Documentation System
- 📖 Automatic documentation extraction from NutUI-React repository
- 🔄 Support for both H5 and Taro (mini-program) scenarios
- 📝 Component index generation for H5 and Taro
- 💾 Local storage of component docs and examples
- 🗂️ Component metadata including name, description, and usage scenarios

#### Developer Tools
- 🛠️ CLI tool with extract command
- 🐍 Python scripts for documentation processing:
  - `extract_nutui_react.py` - Main extraction script
  - `operate_markdown.py` - Markdown processing utilities
- 🔨 Shell script for automated repository cloning and extraction
- ⚙️ Configurable paths via `config.json`

#### Performance Optimization
- ⚡ Implemented caching mechanism using node-cache
- 🚀 Reduced repeated file system operations
- 💨 Fast response times for repeated queries

#### System Instructions
- 🤖 Professional system prompt for AI assistant
- 📋 Usage guidelines and best practices
- 🎯 Context-aware tool invocation rules
- 🔍 Smart component matching and query optimization

#### Build & Development
- 📦 TypeScript-based project with ES modules
- 🏗️ Build configuration with tsup and esbuild
- 🔍 MCP Inspector support for debugging
- 🧪 Test server for local development
- 📋 Comprehensive package configuration

#### Project Infrastructure
- 📄 MIT License
- 📝 Package ready for npm publishing
- 🔗 GitHub repository setup
- 👥 Contributor guidelines
- 🌐 Support for Node.js >= 20.0.0

### Technical Details

#### Architecture
- Server implementation using `@modelcontextprotocol/sdk`
- StdioServerTransport for communication
- Modular tool registration system
- Centralized prompt management
- Utility functions for component data handling

#### Dependencies
- `@modelcontextprotocol/sdk: ^1.25.3` - MCP protocol implementation
- `node-cache: ^5.1.2` - In-memory caching
- `zod: ^3.24.2` - Schema validation
- `vfile-matter: ^5.0.1` - YAML front matter parsing
- `to-vfile: ^8.0.0` - Virtual file system utilities

#### Dev Dependencies
- TypeScript 5.8.2
- tsup 8.4.0 for bundling
- tsx 4.19.3 for testing
- ESBuild 0.27.2 for fast builds

#### File Structure
- Organized source code in `src/` directory
- Component docs stored in `componentDocs/`
- Extraction scripts in `script/`
- Configuration centralized in `config.json`
- Type definitions in `global.d.ts` and `src/typings.d.ts`

### Documentation
- Comprehensive README with:
  - Project introduction and features
  - Architecture explanation
  - Installation instructions
  - Usage examples
  - Development guide
  - Configuration details
  - Contribution guidelines

### Notes
- Based on NutUI-React version 3.0.18
- Supports both H5 and Taro component documentation
- Includes 80+ NutUI components documentation
- Chinese language documentation and prompts
- Designed for integration with Cursor IDE and Claude Desktop

---

## Upcoming Features (Planned)

### Version 0.2.0 (Future)
- [ ] English documentation support
- [ ] Component changelog tracking
- [ ] Version comparison tools
- [ ] Enhanced search capabilities
- [ ] Component dependency analysis

### Version 0.3.0 (Future)
- [ ] Real-time documentation sync
- [ ] Custom component documentation support
- [ ] Advanced caching strategies
- [ ] Performance metrics and monitoring
- [ ] Web UI for documentation browsing

---

[0.1.0]: https://github.com/tony2026m/nutui-react-mcp/releases/tag/v0.1.0
