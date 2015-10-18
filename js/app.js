// app.js
var App = App || {};
//$LAB
//.script('js/lib/jquery.js').script('js/lib/underscore.js').wait()
//.script('js/lib/backbone.js');

App.main = (function main() {

	var self = this;

	// Extend View prototype to cleanup after the view
	Backbone.View.prototype.close = function() {
		console.log('Closing view ' + this);
		if (this.beforeClose) {
			this.beforeClose();
		}
		this.remove();
		this.unbind();
    };

	var AppRouter = Backbone.Router.extend({

		initialize: function () {
			$('#header').html(new HeaderView().render());
		},
		routes: {
            "": "list"
        },
        before: function (callback) {
        	if(!this.data) {
        		this.preload();
        	} 
        	 callback.call(self); 
        },
        preload: function () {

        },
        list: function () {
            this.before(function () {
            	this.showView('#content', new StartView());
            });
        }
	});



	self.tpl.loadTemplates(['header','start'], function () {
		Backbone.history.start();
	});

});

App.main();


