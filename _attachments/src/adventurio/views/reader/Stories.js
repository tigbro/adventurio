adventurio.views.reader.Stories = Backbone.View.extend({

	el : $('#mainpage'),
	initialize : function() {
		return this.render();
	},
	render : function(event) {
		console.log("mainpage was renedered");

		// data = adventurio.mocks.listStories;
		var data = new adventurio.collections.StoriesCollection;
		data.fetch({
			success : this.showStories
		});
		// function(collection, response){ console.log("sUCCESs");}

	},
	events : {
		"click .viewStoryLink" : "viewStory"
	},
	showStories : function(collection, response) {

		var context = {
			storyObjects : collection.toJSON()
		};
		console.log("Data to display:");
		var html = adventurio.templates.listviews.SimpleList.compile(context);

		this.$("#listedStories").html(html);
		try{
		 $("#listedStories").listview("refresh");
		}catch(e){
			console.log("Error occurred" + e);
		}
		 
		 $.mobile.changePage("#mainpage", {
			transition : 'slideup',
			reverse : false,
			changeHash : false
		});
	},
	viewStory : function(e) {
		// var dataUrl = $(e.currentTarget).attr("data-url");
		var dataUrl = $(e.currentTarget).attr("data-identity");
		// if(dataUrl != null) {
		// dataUrl

		location.hash = "reader/stories" + dataUrl;
		// adventurio.routers.MainRouter.navigate
		// }

		// $.mobile.changePage("index.html#singleStory");
	}
});

// var adventurio_views_ShowStories = Backbone.View.extend({
// el : $('#showStories'),
// render : function(event) {
// var compiled_template = _.template($("#showStories-template").html());
// this.el.html(compiled_template(this.model.toJSON()));
// return this;
// },
// events : {
//
// }
// });