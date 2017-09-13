import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  //1. This is a FLAT ROUTE
  //This will direct the user to the main ORDERS pages that  has a list of orders
  // this.route('orders');
   //This will direct the user to the individual ORDER page
  // this.route('order', {path:'/orders/:order_id'});

//2. This is a NESTED ROUTE allowing mutiple/cascading templates (in a parent/child order)
// to be displayed
  this.route('orders', function(){
    this.route('order',{path:'/:order_id'});
  });
});

export default Router;
