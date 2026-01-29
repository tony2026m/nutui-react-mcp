import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {getNutuiInfo} from "../utils/components";

/** 获取组件示例代码 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-nutui-info",
    `获取 NutUI(NutUI-React) 简介、概况信息、version
适用场景：
1. 用户询问什么是 NutUI(NutUI-React)
2. 用户需要知道 NutUI(NutUI-React) 的版本信息时
`,
    async () => {
      const changelog = await getNutuiInfo();
      return {
        content: [
          {
            type: "text",
            text: `NutUI(NutUI-React) 的概况信息：${changelog}`,
          },
        ],
      };
    },
  );
}

export default registryTool;
