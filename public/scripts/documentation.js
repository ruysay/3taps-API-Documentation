$(function() {
	var examples = new ApiClientExamples();
	examples.render();
});

var ApiClientExamples = function() {
};

ApiClientExamples.prototype = {
	_attachCodeEvents: function() {
		$('div.code').click(function() {
			$(this).select();
		});
	},
	
	_attachEvents: function() {
		this._attachCodeEvents();
		this._attachNavEvents();
		this._attachTopEvents();
		this._attachRunEvents();
	},
	
	_attachNavEvents: function() {
		$('div#nav a').click(function() {
			var href = $(this).attr('href');
			var target_id = href.substr(href.indexOf('#') + 1);
			target_id_escaped = target_id.replace(/\./g, '\\\.');
			var target = $('#' + target_id_escaped);
			
			if (target.size() == 0) {
				return true;
			}
			
			$.scrollTo(target, 250, function() {
				window.location = '#' + target_id;
			});
			return false;
		});
	},

	_attachRunEvents: function() {
		$('a.run').click(function() {
			$(this).blur();
			var href = $(this).attr('href');
			var target_id = href.substr(1);
			target_id_escaped = target_id.replace(/\./g, '\\\.');
			var target = $('#' + target_id_escaped);
			var code = target.children('div.code').text();
			eval(code);
			return false;
		});
	},
	
	_attachTopEvents: function() {
		$('a.top').click(function() {
			$.scrollTo(document.body, 250, function() {
				window.location = '#';
			});
			return false;
		});
	},

	render: function() {
		this._attachEvents();
	}
};