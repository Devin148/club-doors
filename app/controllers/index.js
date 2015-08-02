import Ember from 'ember';

export default Ember.Controller.extend({
	route: 'index',

	actions: {
		submit: function() {
			// On Submit:
			//   - Save entry to db
			//   - Print reciept
			//   - Clear state

			alert('Action: Submit');
			var receipt = this.store.createRecord('receipt', {
				customers: 10,
				type: 'Credit: $5'
			});
			receipt.save();
		}
	}
});
