import os
from pathlib import Path
import json
import shutil
from operate_markdown import read_markdown_to_string, replace_code, get_description_and_when_to_use

origin_packages = 'packages'
origin_sites = 'sites'

components_dir = 'components'

# 匹配 <CodeBlock ...>inner</CodeBlock>，支持跨行
code_block_pattern = r'<CodeBlock\s+([^>]*?)>\s*(.*?)\s*</CodeBlock>'

other_md = [{
        "name": "customizeTheme(customize-theme,theme) 主题定制",
        "description": "主题定制",
        "fileName": "theme-react",
        "folderName": "theme"
    },{
        "name": "officialTheme(official-theme) 官方主题",
        "description": "官方主题",
        "fileName": "official-theme-react",
        "folderName": "officialtheme"
    },{
        "name": "international 国际化",
        "description": "国际化",
        "fileName": "international-react",
        "folderName": "international"
    },{
        "name": "start 快速上手",
        "description": "快速上手",
        "fileName": "start-react",
        "folderName": "start"
    }]

def extract_nutui_react():

    with open('../config.json', 'r', encoding='utf-8') as file:
        json_data = json.load(file)
        origin_root = json_data['script']['doc_root']['nutui']
        target_root = json_data['js']['doc_root']['nutui']

    target_doc_root = Path(os.path.join(target_root, components_dir))
    target_doc_root.mkdir(parents=True, exist_ok=True)

    # 循环遍历路径做成components文档
    def list_all_components_docs(directory):
        # 遍历源根目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            if source_dir.is_dir():
                # 获取子文件夹名称
                subfolder_name = source_dir.name
                print(f"处理文件夹: {subfolder_name}")

                # 创建对应的目标子文件夹
                target_dir = target_doc_root / subfolder_name
                #target_dir.mkdir(parents=True, exist_ok=True)

                # 遍历子文件夹下的所有文件（包括子文件夹中的文件）
                for file_path in source_dir.rglob('*'):
                    if file_path.is_file():
                        # 文件名
                        filename = file_path.name

                        if filename == 'doc.md' or filename == 'doc.taro.md':
                            # 构建目标文件路径, 将文件压缩在一级目录下
                            target_file_path = target_dir / filename
                            print(f"目标文件路径: {target_file_path}")
                            # 确保目标文件的父目录存在
                            target_file_path.parent.mkdir(parents=True, exist_ok=True)

                            try:
                                # 读取Markdown文件
                                markdown_content = read_markdown_to_string(file_path)

                                # 替换外部代码块
                                new_content = replace_code(markdown_content, code_block_pattern, parent_folder=subfolder_name)

                                # 写入到目标文件
                                with open(target_file_path, 'w', encoding='utf-8') as f:
                                    f.write(new_content)
                            except Exception as e:
                                print(f"  处理文件失败 {file_path}: {e}")

                # 拷贝demos
                origin_demos_dir = Path(os.path.join(source_dir, 'demos'))
                if origin_demos_dir.exists():
                    shutil.copytree(origin_demos_dir, target_dir / 'demos', dirs_exist_ok=True)

    def make_components_json(directory):
        component_index = []
        # 遍历目标目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            # 遍历子文件夹下的所有文件（包括子文件夹中的文件）
            for file_path in source_dir.rglob('doc.md'):
                # 父级文件夹
                parentName = file_path.parent.name
                # 读取文件
                content = read_markdown_to_string(file_path)
                # 获取描述
                description = get_description_and_when_to_use(content)
                component_index.append({
                    "name": description['title'],
                    "dirName": file_path.parent.name,
                    "description": description['description'],
                    "whenToUse": description['when_to_use']
                })

        # 其他内容文档
        make_h5_other_md(component_index)

        json_path = os.path.join(target_root, 'components-index.json')
        # 写入到目标文件
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(component_index, f, ensure_ascii=False, indent=4)

    def make_h5_other_md(component_index):
        origin_h5_Path = Path(origin_root + '/sites/sites-react/doc/docs/react/')
        for item in other_md:
            # 构建目标文件路径, 将文件压缩在一级目录下
            origin_h5_file_path = origin_h5_Path / (item['fileName'] + '.md')

            target_h5_file_path = target_doc_root / item['folderName'] / 'doc.md'
            # 确保目标文件的父目录存在
            target_h5_file_path.parent.mkdir(parents=True, exist_ok=True)

            try:
                shutil.copy(origin_h5_file_path, target_h5_file_path)
                component_index.append({
                    "name": item['name'],
                    "dirName": item['folderName'],
                    "description": item['description'],
                    "whenToUse": ''
                })
            except Exception as e:
                print(f"其他文档做成失败: {e}")

    def make_taro_other_md(taro_component_index):
        origin_taro_Path = Path(origin_root + '/sites/sites-react/doc/docs/taro/')
        for item in other_md:
            # 构建目标文件路径, 将文件压缩在一级目录下
            origin_taro_file_path = origin_taro_Path / (item['fileName'] + '.md')

            target_taro_file_path = target_doc_root / item['folderName'] / 'doc.taro.md'
            # 确保目标文件的父目录存在
            target_taro_file_path.parent.mkdir(parents=True, exist_ok=True)

            try:
                shutil.copy(origin_taro_file_path, target_taro_file_path)

                taro_component_index.append({
                    "name": item['name'],
                    "dirName": item['folderName'],
                    "description": item['description'],
                    "whenToUse": ''
                })
            except Exception as e:
                print(f"其他文档做成失败: {e}")

    def make_nutui_components_json(directory):
        taro_component_index = []
        # 遍历目标目录下的所有子文件夹
        for source_dir in Path(directory).iterdir():
            # 遍历子文件夹下的所有文件（包括子文件夹中的文件）
            for file_path in source_dir.rglob('doc.taro.md'):
                # 父级文件夹
                parentName = file_path.parent.name
                # 读取文件
                content = read_markdown_to_string(file_path)
                # 获取描述
                description = get_description_and_when_to_use(content)
                taro_component_index.append({
                    "name": description['title'],
                    "dirName": file_path.parent.name,
                    "description": description['description'],
                    "whenToUse": description['when_to_use']
                })

        make_taro_other_md(taro_component_index)

        json_path = os.path.join(target_root, 'components-index.taro.json')
        # 写入到目标文件
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(taro_component_index, f, ensure_ascii=False, indent=4)

    def make_nutui_json():
        packagePath = os.path.join(origin_root, '../package.json')
        with open(packagePath, 'r', encoding='utf-8') as file:
            packageData = json.load(file)
            version = packageData['version']
        api_info = {
            "name": "NutUI(NutUI-React)",
            "description": "NutUI-React 组件库，适用于 React 技术栈的 移动端 H5、小程序 应用，开箱即用，帮助研发快速开发用户界面，提升开发效率，改善开发体验",
            "version": version
        }
        # 写nutui.json
        if api_info:
            with open(Path(target_root, 'nutui.json'), 'w', encoding='utf-8') as json_file:
                json.dump(api_info, json_file, ensure_ascii=False, indent=4)

    # 遍历文件夹做成components文档
    list_all_components_docs(os.path.join(origin_root, origin_packages))
    # 做成H5组件json
    make_components_json(os.path.join(target_root, components_dir))
    # 做成nutui组件json
    make_nutui_components_json(os.path.join(target_root, components_dir))
    make_nutui_json()

def main():
    extract_nutui_react()

if __name__ == '__main__':
    main()
