import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import listComponents from "./list-components";
import getComponentDoc from "./get-component-doc";
import getComponentExample from "./get-component-example";
import getNutuiInfo from "./get-nutui-info";

export default function registryTools(server: McpServer) {
  [listComponents, getComponentDoc, getComponentExample, getNutuiInfo].forEach((registryFn) => {
    registryFn(server)
  })
}
