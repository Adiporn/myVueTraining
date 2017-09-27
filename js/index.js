var discount = .25;

function Discount(price) {
   var DR = 1 - discount;
   FPrice = (price * DR).toFixed(2);
   return FPrice;
}

var tableModel = {
   products: [
      { 
         name: "Shirt",
         size: 'Small, Medium',
         price: 14.99,
         discount: Discount(14.99)
      },
      { 
         name: "Pants",
         size: 'Medium, Large',
         price: 32.95,
         discount: Discount(32.95)
      },
      { 
         name: "Meerkat Pistol",
         size: 'Large, Obtuse',
         price: 2.50,
         discount: Discount(2.50)
      },
      { 
         name: "Hat Rescuer",
         size: 'Mini, Microscopic, Regular',
         price: 16.75,
         discount: Discount(16.75)
      }
   ]
}

//Add data for learning
var TestModel = {
    DurableList: [ 
        {
        ListName: "Computer",
        Quitity: 15,
        price: 20000
        },
        {
        ListName: "Projector",
        Quitity: 40,
        price: 34000
        }
    ]
}

var tableApp = new Vue({
   el: '#tableApp',
   data: tableModel,
   methods: {
      ProductFil: function (e) {
         
      }
   }
});

var tableTest = new Vue({
    el: '#tableTest',
    data: TestModel,
    methods: {
       ProductFil: function (e) {
          
       }
    }
 });
