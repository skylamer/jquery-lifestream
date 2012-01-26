(function($) {
$.fn.lifestream.feeds.googleplus = function( config, callback ) {

  var template = $.extend({},
    {
    posted: '<a href="${actor.url}">${actor.displayName}</a> has posted a new entry <a href="${url}" '
        + 'title="${id}">${title}</a> <!--With--> ${object.replies.totalItems} replies, ${object.plusoners.totalItems} +1s, ${object.resharers.totalItems} Reshares'
    },
    config.template),

  parseGooglePlus = function( input ) {
    var output = [], i = 0, j, item;

    if(input && input.items) {
      j = input.items.length;
      for( ; i<j; i++) {
        item = input.items[i];
        output.push({
<<<<<<< HEAD
          date: new Date(item.published),
=======
          date: new Date( item.published ),
>>>>>>> upstream/master
          config: config,
          html: $.tmpl( template.posted, item )
        });
      }
    }

    return output;
  };

  $.ajax({
    url: "https://www.googleapis.com/plus/v1/people/" + config.user +
<<<<<<< HEAD
	"/activities/public",
	data:{
	key: config.key
	},
=======
	    "/activities/public",
	  data: {
	    key: config.key
	  },
>>>>>>> upstream/master
    dataType: 'jsonp',
    success: function( data ) {
	   if (data.error) {
        callback([]);
        if (console && console.error) {
          console.error('Error loading Google+ stream.', data.error);
        }
        return;
<<<<<<< HEAD
      }
      callback(parseGooglePlus(data));
=======
      } else {
        callback(parseGooglePlus(data));
      }
>>>>>>> upstream/master
    }
  });

  // Expose the template.
  // We use this to check which templates are available
  return {
    "template" : template
  };

};
<<<<<<< HEAD
})(jQuery);
=======
})(jQuery);
>>>>>>> upstream/master
