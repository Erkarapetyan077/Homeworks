const obj = {
    value: 100,
    get() {
      const inner = () => this.value;
     return inner();
    }
   };

   console.log(obj.get());
   