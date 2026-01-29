import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { getComponentDocumentation } from "../utils/components";

/** 获取组件文档 */
const registryTool = (server: McpServer) => {
  server.tool(
    "get-component-doc",
    `通过组件名称，获取 NutUI(NutUI-React) 特定组件的详细文档
适用场景：
1. 用户询问如何使用特定组件
2. 用户需要查看该组件的 api、props 属性，示例代码等

参数说明：isH5(是否H5页面，true:H5页面，false:非H5页面（小程序等）)，componentName(组件名称)
`,
    {isH5: z.boolean().describe("是否H5页面（true:H5页面，false:非H5页面（小程序等））"), componentName: z.string().describe("组件名称。例如：Button，Form，Input等") },
    async ({ isH5, componentName }) => {
      const documentation = await getComponentDocumentation(isH5, componentName);
      return {
        content: [
          {
            type: "text",
            text: `${componentName} 组件的文档：${documentation}`,
          },
        ],
      };
    },
  );
}

export default registryTool;
