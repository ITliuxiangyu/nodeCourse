
   
#Backbone概述
	1.model(模型--key-value对,自定义事件)
	2.collections--有丰富的枚举的api
	3.views--声明的事件绑定
    
#入门
	当我们开发含有大量Javascript的web应用程序时，首先你需要做的事情之一便是停止向DOM对象附加数据。 通过复杂多变的jQuery选择符和回调函数很容易创建Javascript应用程序，包括在HTML UI，Javascript逻辑和数据之间保持同步，都不复杂。 但对富客户端应用来说，良好的架构通常是有很多益处的。
	
	通过Backbone，你可以将数据呈现为 Models, 你可以对模型进行创建，验证和销毁，以及将它保存到服务器。 任何时候只要UI事件引起模型内的属性变化，模型会触发"change"事件； 所有显示模型数据的 Views 会接收到该事件的通知，继而视图重新渲染。 你无需查找DOM来搜索指定id的元素去手动更新HTML。 — 当模型改变了，视图便会自动变化。
	
	某种意义上说，在用javaScript来创建web项目时，Backbone试图定义一组最小而高效的集合，包括了数据结构（models（模型） 和 collections（集合））和用户接口（views（视图） 和 URLS）。在web开发环境里，到处都是框架（帮你写好了一切），不过这些库需要你的网站在构建的时候符合该框架的样子，风格，默认的行为。但是，Backbone还是作为一个工具，让你可以随心所欲的设计你的网站。


##Models 和 Views

<img src="imgs/intro-model-view.svg"/>

	backbone 可以帮助你把业务逻辑和UI分开。当它们两个纠缠一块的时候，很难对代码进行维护和新增功能。

	###Model	
		1.处理数据和业务逻辑
		2.加载和保存服务器上面的数据
		3.当数据改变的时候，触发事件
		
	###View
		1.监听changes事件并且渲染ui
		2.处理用户输入和交互
		3.发送用户的输入到model
	
	Model
		一个Model管理一个内部的数据属性的表，并且当数据变化的时触发一个change事件。
		model处理数据和后端数据库的同步。
		设计你的Model做位一个可重用的对象（上面包含工具方法来维护它们的内部数据）
		
	View
		View是一个UI原子块。他总是从一个特定的model来渲染数据。
		views监听model的“change”事件，并且重新渲染它们自己。
		
#Collections
				
<img src="imgs/intro-collections.svg"/>

	Collection帮助你处理一组有关的models，处理新modles从服务器的载入和保存。
	除了它们自己的事件，collections也代理models上面的所有事件，允许你监听其中一个model的任何改变。
	
	
#API 集成
	Backbone预配置和 RESTFULAPI保持一致。
	
	var Books = Backbone.Collection.extend({
	  url: '/books'
	});
	Collections和Model使用下列的方法自动映射服务器资源。
	
		GET  /books/ .... collection.fetch();
		POST /books/ .... collection.create();
		GET  /books/1 ... model.fetch();
		PUT  /books/1 ... model.save();
		DEL  /books/1 ... model.destroy();
		
	当从服务器获取一个JSON。Collection自动用数组格式来填充，
	model用对象格式填充。
	
#视图渲染
<img src="imgs/intro-views.svg"/>
	
	每个视图管理渲染和用户在 dom上面的交互。
	
#用URL路由
<img src="imgs/intro-routing.svg"/>
	
	在富应用程序中，我们想提供可分享的、可以加书签的URLS。
	这些URLS都对应APP中一个特定的位置。
	使用Router来更新URL党用户到APP中一个新的位置，对应的Router检测URL的改变－－告诉APP现在应该显示什么。
	
		
		