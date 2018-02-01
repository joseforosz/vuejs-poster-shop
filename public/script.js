new Vue({
  el: '#app',
  data:{
    total:  0,
    items:[
      {title: 'Item 1'},
      {title: 'Item 2'},
      {title: 'Item 3'},
    ],
    cart: []
  },
methods:{
  addItem: function(index){
    this.total += 10;
    var item = this.items[index];
    for(i=0; i<this.cart.length; i++){
      if(this.cart[i]===item){
        this.cart[i].qty++;
      }
    };
    this.cart.push(
      {
        title: item.title,
        qty: item.q
      }
      )
  }
}

})
