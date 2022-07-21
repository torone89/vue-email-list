
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)



new Vue({
    el: '#root  ',
    data: {
        mailList: [],
        emailNumber: 10,
    },
    computed: {
        isLoading() { return this.mailList.length !== this.emailNumber },
    },
    methods: {
        generateTenMail: function () {
            // Attraverso l'apposita API di Boolean
            // https://flynn.boolean.careers/exercises/api/random/mail
            // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')

                    .then((response) => {

                        const result = response.data.response;
                        this.mailList.push(result)

                    });
            };
        },
        // FUNZUONE PER ELIMINARE L'ARRAY E PORTARMELO A 0 Email Create
        clearMail: function () {
            this.mailList = [];
        }
    },

    created() {
        this.generateTenMail();
    }
});




