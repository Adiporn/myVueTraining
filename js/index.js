var discount = .25;

function Discount(price) {
   var DR = 1 - discount;
   FPrice = (price * DR).toFixed(2);
   return FPrice;
}

function Count(price){
    var mul = price*2;
    return mul;
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

var tableApp = new Vue({
    el: '#tableApp',
    data: tableModel,
    methods: {
       ProductFil: function (e) {
          
       }
    }
 });

new Vue({
    el:'Test',
    data:{
        ListName: '',
        Quitity:'',
        Price:'',
        ListName:{
            'computer':'Computer',
            'c2':'C2',
        },
        Quitity:{
            'sfks':'Sfks',
            'gggg':'GGGG'
        },
        Price:{
            2:2,
            3:3,

        }
    }
});

// var tableTest = new Vue({
//     el: '#tableTest',
//     data: { DurableList: [ 
//         {
//         ListName: "Computer",
//         Quitity: 15,
//         price: 20000
//         },
//         {
//         ListName: "Projector",
//         Quitity: 40,
//         price: 34000
//         }
//     ]

//     }
//  });

  