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
		}
	}
});
