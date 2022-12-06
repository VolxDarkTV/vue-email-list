const { createApp } = Vue;

createApp({
    
    data (){
        return{
            emails: [],
        }
    },
    methods:{
        
    },
    mounted(){
        for (let index = 1; index <= 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                this.emails.push(response.data.response);
            });
        }
    }

}).mount('#app')