<template>
    <section id="intro" class="py-20" style="background-image: url('/img/astronaut.jpg'); background-size: cover;">
        <div class="bg-warm-gray-50">
            <div class="py-24 lg:py-32">
                <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                    <h1 class="text-4xl font-extrabold tracking-tight text-yellow-600 sm:text-5xl lg:text-6xl">See you soon!</h1>
                </div>
            </div>
        </div>
    </section>
    <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-gradient-to-b from-gray-800 to-blueGray-700">
        <div class="relative bg-gray-800 rounded-3xl">
            <div class="h-56 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                <img class="w-full h-full object-cover rounded-3xl" src="/img/answer.jpg" alt="" />
            </div>
            <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <div class="md:ml-auto md:w-1/2 md:pl-10">
                    <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                        Grazie per averci contattato!
                    </h2>
                    <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                       Siamo qua per aiutarti!
                    </p>
                    <p class="mt-3 text-lg text-gray-300">
                        Per noi, i clienti fanno parte della nostra famiglia ed è per questo che continuiamo a rinnovarci, per offrire la migliore qualità in ciascuno dei nostri prodotti. Cercheremo di risponderti il più velocemnte possibile. Grazie per la tua fiducia.
                    </p>
                    <div class="mt-8">
                        <div class="inline-flex rounded-md shadow">
                            <a href="/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 rounded-full">
                                Torna alla Home
                                <ExternalLinkIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ExternalLinkIcon } from '@heroicons/vue/solid'

export default {
    data: () => ({
            username: '',
            userRules: [
                v => !!v || 'Name is required',
            ],

            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be more than 6 characters',
            ],
    }),

    methods:{
        register(){

             const project = {
                name: this.username,
                email: this.email,
                password: this.password,

             }

             axios.post('api/register',project).then(response=>{
                console.log(response)
                this.$router.push({ path: "/" });

            }).catch((error)=>{
                console.log(error);
            })
        },
    },

    components: {
        ExternalLinkIcon,
    },

}
</script>
