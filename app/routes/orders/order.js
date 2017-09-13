import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
  const id = params.order_id;
  const store = this.get('store');

  //This uses the function defined in the service to return data
  // based on the 'id' value passed to the Order route by the pages (via the Router)
  return store.getOrderById(id);
},

  store: Ember.inject.service('store')
});
