const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:'', 
      confirmedName:''
    };
  },
  methods:{
    add(num){
      this.counter=this.counter+num;
    }, 
    reduce(num){
      this.counter=this.counter-num;
    }, 
    setName(event, lastName){
      this.name=event.target.value + " " + lastName;
    }, 
    submitForm(){
      alert('Submitted!');
    }, 
    confirmedInput(){
      this.confirmedName=this.name;
    }, 
    alert(){
      alert("Submitted");
    }
  }
});

app.mount('#assignment');