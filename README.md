# Easyv 图标库

用 Figma + Gitlab CI 完成自动化交付 icon

## 流程

插件侧

1. figma 插件填写提交信息，点击开始发布流程
1. 本地校验 icons 的命名规范以及是否存在同名 icon
1. 基于 master 分支创建一个新分支
1. 修改 package.json 的版本号
1. 比较当前 icons 和旧的 icons，diff 生成变化的 icons。存在增、删、改三种情况
1. 通过 Figma API 下载上一步 diff 生成变化的 icons
1. 下载完成后，提交一个 mr 合并到 master 分支

gitlab 侧

1. 触发 CI 流程
1. 根据更新数据，生成 react-icons 组件
1. 推送代码到 gitlab
1. 自动合并 mr
