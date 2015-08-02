import DS from 'ember-data';

let Receipt = DS.Model.extend({
	customers: DS.attr('number'),
	type: DS.attr('string'),
	time: DS.attr('date', {defaultValue: function() {
		return new Date();
	}})
});

Receipt.reopenClass({
	FIXTURES: [
		{id: 1, customers: 1, type: 'foo', time: '2015-02-07T16:44:57.000Z'},
		{id: 2, customers: 2, type: 'bar', time: '2015-03-07T17:44:57.000Z'},
		{id: 3, customers: 3, type: 'zzz', time: '2015-04-07T18:44:57.000Z'}
	]
});

export default Receipt;
