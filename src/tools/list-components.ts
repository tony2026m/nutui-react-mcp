import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { loadComponentsList } from "../utils/components";

/** 列出所有可用的 Pro-Components 组件 */
const registryTool = (server: McpServer) => {
  server.tool(
    "list-components", `当用户请求做成一个新的移动端页面(UI)，或实现新的移动端业务页面时，使用 NutUI(NutUI-React) 组件时使用此工具。
此工具仅返回可用的组件列表。
调用此工具后，你必须根据你的业务需求、来选择符合你业务需求的组件，编辑或添加前端页面代码实现
组件列表元素数据结构：
\`ts
export interface ComponentData {
  // 组件名称
  name: string;
  // 组件文档所在文件夹名称
  dirName: string;
  // 组件描述
  description: string;
  // 何时使用组件
  whenToUse: string;
}

参数说明：isH5(是否H5页面，true:H5页面，false:非H5页面（小程序等）)
\`
`,
      {isH5: z.boolean().describe("是否H5页面（true:H5页面，false:非H5页面（小程序等））")},
      async ({isH5}) => {
      const components = await loadComponentsList(isH5);
      return {
        content: [
          {
            type: "text",
            text: `以下是NutUI可用的移动端组件：${JSON.stringify(components)}`,
          },
        ],
      };
    });
}

export default registryTool;
