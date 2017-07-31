/*
* Node.js 在调用某个包时,会首先检查包中 package.json 文件的 main 字段,将其作为
 包的接口模块,如果 package.json 或 main 字段不存在,会尝试寻找 index.js 或 index.node 作 为包的接口。


 package.json 是 CommonJS 规定的用来描述包的文件,完全符合规范的 package.json 文 件应该含有以下字段。

 1. name:包的名称,必须是唯一的,由小写英文字母、数字和下划线组成,不能包含 空格。
 2. description:包的简要说明
 3. version: 符合语义化版本识别1规范的版本字符串
 4. keywords: 关键字数组, 通常用于搜索。
 5. maintainers:维护者数组,每个元素要包含 name、email (可选)、web (可选)字段。
*6. contributors:贡献者数组,格式与maintainers相同。包的作者应该是贡献者
 数组的第一个元素。
 7. bugs:提交bug的地址,可以是网址或者电子邮件地址。
 8. licenses:许可证数组,每个元素要包含 type (许可证的名称)和 url (链接到许可证文本的地址)字段。
 9. repositories:仓库托管地址数组,每个元素要包含 type(仓库的类型,如 git )url (仓库的地址)和 path (相对于仓库的路径,可选)字段。
 10. dependencies:包的依赖,一个关联数组,由包名称和版本号组成。
*
*
* */