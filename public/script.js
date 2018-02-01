new Vue({
  el: '#app',
  data: {
    total: 0,
    items: [{
        id: 1,
        title: 'Item 1',
        price: 9.99
      },
      {
        id: 2,
        title: 'Item 2',
        price: 5.99
      },
      {
        id: 3,
        title: 'Item 3',
        price: 11.99
      },
    ],
    cart: []
  },
  methods: {
    addItem: function(index) {
      var item = this.items[index];
      this.total += item.price;
      var found = false;
      for (i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === item.id) {
          found = true
          this.cart[i].qty++;
        }
      };

      if (!found) {
        this.cart.push({
          id: item.id,
          title: item.title,
          price: item.price,
          qty: 1
        })
      }
    }
  }

})
