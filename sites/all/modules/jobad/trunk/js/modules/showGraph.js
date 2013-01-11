_newModule({

	info : {
		'identifier' : 'show_graph',
		'title' : 'Show dependency graph',
		'author' : 'Alexandru Toader',
		'description' : 'Shows the dependency graph',
		'dependencies' : []
	},

	options : {},

	validate : (function() {

		return function(event, container) {
			var target = event.target;
			var jTarget = $(target);
			semMap = [["sax-salarycosts", "sax-salarycostsperti"], ["sax-revenues-actual", "sax-revenuesperti-actual"], ["sax-salarycosts-actual", "sax-salarycostsperti-actual"], ["sax-expenses-actual", "sax-expensesperti-actual"], ["sax-utilitycosts-projected", "sax-utilitycostsperti-projected"], ["sax-expenses-actual", "sax-othercostsperti-actual"], ["sax-expenses-projected", "sax-othercostsperti-projected"], ["sax-revenues-projected", "sax-revenuesperti-projected"], ["sax-utilitycosts-actual", "sax-utilitycostsperti-actual"], ["sax-admincosts-actual", "sax-admincostsperti-actual"], ["sax-materialcosts-projected", "sax-materialcostsperti-projected"], ["sax-salarycosts-projected", "sax-salarycostsperti-projected"], ["sax-profits-actual", "sax-profitsperti-actual"], ["sax-salarycosts-projected", "sax-salaryperti-projected"], ["sax-materialcosts-actual", "sax-materialcostsperti-actual"], ["timeinterval", "timeinterval"], ["sax-expenses-projected", "sax-expensesperti-projected"], ["sax-admincosts-projected", "sax-admincostsperti-projected"], ["sax-profits-projected", "sax-profitsperti-projected"], ["sax-salarycosts-actual", "sax-salaryperti-actual"]];
			var obj = {};
			$.extend(obj, tContextMenu.templates.moduleOutput, {
				element : container,
				text : 'Show dependency graph',
				description : 'Module description',
				icon : 'js/modules/icons/module1.png',
				smallIcon : 'js/modules/icons/module1_small.png',
				weight : 50
			});

			obj.element.bind('click.switchViews', function() {
				tContextMenu.hide(function(view) {
					tContextMenu.setView(view);
				}, [$(this).data('identifier')]);
			});
		
			obj.element.bind('click',function(){
				cd = jTarget.attr("omdoc:cd");
				symbol = jTarget.attr("omdoc:name");
            	window.open("http://localhost:8080/sally/web/dependency?cd=" + cd + "&name=" + symbol + "&theoid=" + theoid, "_parent");
       
	 	});
		
			if(jTarget.is('.omdoc-term'))
				return obj;
			return false;
	

		}
	})()

});
