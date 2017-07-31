/**
 * Models（模型）是任何Javascript应用的核心，包括数据交互及与其相关的大量逻辑：
 * 转换、验证、计算属性和访问控制。你可以用特定的方法扩展
 *
 *
 * url:model在服务器上面对应的url。
 * fetch:获取模型url对应的数据
 * attributes:模式上面键值对。
 * toJSON:把model转化为json对象。
 * 
 * 'change'事件:当数据请求完成,设置到model上面的时候,有change事件触发。
 *
 * */
var PersonModel = Backbone.Model.extend({

    //模型里面有这几个字段
    url:'api/person.json'
});


