import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import Order from 'woodland/models/order';
import Product from 'woodland/models/product';


//Define private data objects
const products=[Product.create({title:'Tent', price:10, description:' prod1 description'}),
                Product.create({title:'Sleeping bags', price:5, description:' prod2 description'}),
                Product.create({title:'Flashing', price:2, description:' prod3 description'}),
                Product.create({title:'Sleeping bags', price:5, description:' prod2 description'})];

//Use the above defined products to create Order object that has an array of line-items i.e. individual items
const orders =[
                Order.create({ id:'1234', name:'Bl',
                items:[
                       LineItem.create({product: products[0], quantity:1}),
                       LineItem.create({product: products[1], quantity:1}),
                       LineItem.create({product: products[2], quantity:0}),
                       LineItem.create({product: products[3], quantity:0})
                     ]
                   }),

            ];


export default Ember.Service.extend({
  //Define utility functions to access and return the privately define data objects
   getOrderById(id){return orders.findBy('id', id);},
   getOrders() {return orders;},
   getProducts(){return products;}

});
