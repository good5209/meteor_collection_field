Data = new Meteor.Collection('data');

if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to collection_field.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		Data.remove({}); // initial
		Data.insert({"abc": 123, "def": 234});
		Data.insert({"bcd": 123, "efg": 234});
		Data.insert({"cde": 123, "fgh": 234});
		Data.insert({"def": 123, "ghi": 234});
		
		var result = {};
		Data.find({}).forEach(
			function(each) {
				for (key in each) {
					result[key] = true;
				}
			}
		);
		var fields = _.map(result, function (value, key) {return key;});
		console.log(fields);
	});
}
