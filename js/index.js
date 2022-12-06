const { createApp } = Vue;

createApp({
    
    data (){
        return{
            email: [],
        }
    },
    methods:{
        
    },
    mounted(){
        for (let index = 1; index <= 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.email.push(response.data.response);
            });
        }
    }

}).mount('#app')