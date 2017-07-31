/**
 * Created by qingyun on 16/11/19.
 */
/*

require(moduleName):
 首先找当前目录里面的node_modules.
 找到之后,找moduleName文件夹。
 然后赌气package.json里面的main文件定位提供功能的js文件。
 之后把导出功能导出。

 如果当前目录找不到,回去上级目录的根目录路找,如果找不到,继续望上级。直到/.
* **/
var cls = require('1609class');
cls.say();