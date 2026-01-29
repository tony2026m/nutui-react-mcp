import { readFile } from "node:fs/promises";
import {join, dirname} from 'node:path';
import { existsSync } from "node:fs";
import { fileURLToPath } from 'node:url';
import {ComponentData} from "../typings";
import config from '../../config.json';
import {getCache, hasKey, setCache} from "./cache";

const EXTRACTED_COMPONENTS_DIR = "components";

const FILE_COMPONENTS_INDEX = 'components-index';
const NUTUI_INFO = 'nutui.json';

// 获取当前文件所在目录的绝对路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 从 dist 目录向上一级到达项目根目录，然后拼接 componentDocs 路径
// 编译后的代码在 dist/cli.js，所以 __dirname 是 dist 目录
const DOC_ROOT = join(__dirname, config['js']['doc_root']['nutui']);

const DOC_FILE_NAME = 'doc';

const COMPONENT_LIST = 'component_list';

const COMPONENT_INFO = 'component_info';

const CACHE_PREFIX = 'nutui_:';

/** 加载ProComponents组件列表 */
export async function loadComponentsList(isH5: boolean) {
  const cacheKey = CACHE_PREFIX + COMPONENT_LIST + (isH5 ? '_h5' : '_taro');
  try {
    if(hasKey(cacheKey)) {
      return getCache(cacheKey);
    }

    let filePath = join(DOC_ROOT, FILE_COMPONENTS_INDEX + '.taro.json');
    if(isH5) {
      filePath = join(DOC_ROOT, FILE_COMPONENTS_INDEX + '.json');
    }
    const componentList = await readFile(filePath, "utf-8");
    const componentListJson = JSON.parse(componentList) as ComponentData[];

    setCache(cacheKey, componentListJson);

    return componentListJson
  } catch (error) {
    console.error(`加载组件列表错误: ${(error as Error).message}`);
    return [];
  }
}

/** 根据组件名称查找组件 */
export async function findComponentByName(isH5:  boolean,  componentName: string) {
  const components: ComponentData[] = await loadComponentsList(isH5);
  return components.find(
    (c: ComponentData) => (c.name.toLowerCase() === componentName.toLowerCase() ||
      c.name.toLowerCase().includes(componentName.toLowerCase()))
  );
}

/** 获取 ProComponents 特定组件文档 */
export const getComponentDocumentation = async (isH5: boolean, componentName: string) => {
  const cacheKey = CACHE_PREFIX + componentName + (isH5 ? '_h5' : '_taro');
  if(hasKey(cacheKey)) {
    return getCache(cacheKey);
  }

  const component = await findComponentByName(isH5, componentName);
  if (!component) {
    return ` "${componentName}" 组件文档不存在`;
  }

  let docPath = join(DOC_ROOT, EXTRACTED_COMPONENTS_DIR, component.dirName, DOC_FILE_NAME + '.taro.md');
  if(isH5){
    docPath = join(DOC_ROOT, EXTRACTED_COMPONENTS_DIR, component.dirName, DOC_FILE_NAME + '.md');
  }

  try {
    if (existsSync(docPath)) {
      const docResult = await readFile(docPath, "utf-8");

      setCache(cacheKey, docResult);

      return docResult
    }
    return `${component.name} 组件文档不存在`;
  } catch (error) {
    console.error(`获取 ${component.name} 组件文档错误: ${(error as Error).message}`);
    return `获取 ${component.name} 组件文档错误: ${(error as Error).message}`;
  }
};

/** 获取 ProComponents 特定组件外部示例代码 */
export const getComponentExample = async (src: string) => {
  if(hasKey(src)) {
    return getCache(src);
  }

  const examplePath = join(DOC_ROOT, EXTRACTED_COMPONENTS_DIR, src);

  try {
    if (existsSync(examplePath)) {
      const exampleResult = await readFile(examplePath, "utf-8");

      setCache(src, exampleResult);

      return exampleResult
    }
    return `外部示例代码 ${src} 不存在`;
  } catch (error) {
    console.error(`获取 ${src} 外部示例代码错误: ${(error as Error).message}`);
    return `获取 ${src} 外部示例代码错误: ${(error as Error).message}`;
  }
};

/** 获取 NutUI 介绍文档 */
export const getNutuiInfo = async () => {
  const cacheKey = CACHE_PREFIX + COMPONENT_INFO ;
  try {
    if(hasKey(cacheKey)) {
      return getCache(cacheKey);
    }
    const proInfo = await readFile(join(DOC_ROOT, NUTUI_INFO), "utf-8");

    setCache(cacheKey, proInfo);

    return proInfo
  } catch (error) {
    console.error(`加载NutUI概要信息错误: ${(error as Error).message}`);
    return "";
  }
};
