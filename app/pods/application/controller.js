import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    openLoginDialog() {
      $('#login-dialog').modal('open');
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
