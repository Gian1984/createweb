<template>
    <main class="overflow-hidden">
        <!-- Header -->
        <section id="intro" class="py-6" style="background-image: url('/img/ops.jpg'); background-size: cover;">
        <div class="bg-warm-gray-50">
            <div class="py-20 lg:py-32">
                <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                    <h1 class="text-4xl font-extrabold tracking-tight text-teal-500 sm:text-5xl lg:text-6xl">Get in touch!</h1>
                    <p class="mt-6 text-xl text-white max-w-3xl">La personalizzazione non è una questione di nome e cognome. È una questione di contenuti rilevanti.
                        <br><strong><i>- Dan Jak </i></strong></p>
                </div>
            </div>
        </div>
        </section>

        <section>
            <div class="bg-white bg-gradient-to-b from-gray-800 to-blueGray-700 overflow-hidden">

                <div class="relative">
                    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                        <div class="md:ml-auto md:pl-10">
                            <p class="mt-2 text-white text-3xl text-center font-extrabold tracking-tight sm:text-4xl">
                                “…giusto il tempo di un caffè…”
                            </p>
                            <p class="mt-3 text-lg text-gray-300 text-center">
                                Chi l’ha detto che il tempo necessario a prenderci un caffè non sia sufficiente a vivere comunque un’esperienza importante? Quante cose possono succedere in quei pochi istanti?
                            </p>
                        </div>
                    </div>
                </div>


                <div class=" lg:block" aria-hidden="true" />
                <div class="max-w-7xl mx-auto lg:bg-transparent lg:px-3">
                    <div class="lg:grid lg:grid-cols-12">
                        <div class="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
                            <div class="inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
                            <div class="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0 md:block hidden sm:block ">
                                <div class="aspect-w-10 aspect-h-6 lg:aspect-w-1 hidden md:block hidden sm:block ">
                                    <img class="object-cover object-center rounded-3xl shadow-2xl" src="/img/meet.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="relative lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center sm:bg-gradient-to-b from-gray-800 to-blueGray-700 overflow-hidden">
                            <div class="hidden absolute inset-0 overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                                <svg class="absolute bottom-full left-full transform translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                    <defs>
                                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" class="text-indigo-500" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                                </svg>
                                <svg class="absolute top-full transform -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                                    <defs>
                                        <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                            <rect x="0" y="0" width="4" height="4" class="text-yellow-600" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                                </svg>
                            </div>
                            <div class="relative max-w-md mx-auto py-12 px-4 space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
                                <!-- Contact form -->
                                <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                                    <h3 class="text-lg font-medium text-white">Scrivi il tuo messaggio</h3>
                                    <h3 class="text-sm font-medium text-white">Ti risponderemo al più presto!</h3>
                                    <form @submit.prevent="register" ref="form" class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                        <div>
                                            <label for="first_name" class="block text-sm font-medium text-white">Nome</label>
                                            <div class="mt-1">
                                                <input v-model="firstname" :rules="firstRules" type="text" name="first_name" id="first_name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="last_name" class="block text-sm font-medium text-white">Cognome</label>
                                            <div class="mt-1">
                                                <input v-model="lastname" :rules="lastRules" type="text" name="last_name" id="last_name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="email" class="block text-sm font-medium text-white">Email</label>
                                            <div class="mt-1">
                                                <input v-model="email" :rules="emailRules" id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex justify-between">
                                                <label for="phone" class="block text-sm font-medium text-white">Telefono</label>
                                            </div>
                                            <div class="mt-1">
                                                <input v-model="phone" :rules="phoneRules" type="text" name="phone" id="phone" autocomplete="tel" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" aria-describedby="phone-optional" />
                                            </div>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <label for="subject" class="block text-sm font-medium text-white">Oggetto</label>
                                            <div class="mt-1">
                                                <input v-model="subject" :rules="subjectRules" type="text" name="subject" id="subject" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md" />
                                            </div>
                                        </div>
                                        <div class="sm:col-span-2">
                                            <div class="flex justify-between">
                                                <label for="message" class="block text-sm font-medium text-white">Messaggio</label>
                                                <span id="message-max" class="text-sm text-white">Max. 500 caratteri</span>
                                            </div>
                                            <div class="mt-1">
                                                <textarea v-model="message" :rules="messageRules" id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border border-warm-gray-300 rounded-md" aria-describedby="message-max" />
                                            </div>
                                        </div>
                                        <div class="sm:col-span-2 sm:flex sm:justify-end">
                                            <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-green-500 hover:bg-green-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Invia
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@heroicons/vue/outline'

export default {

    data: () => ({
        valid: true,

        firstname: '',
        firstRules: [
            v => !!v || 'Name is required',
        ],

        lastname: '',
        lastRules: [
            v => !!v || 'Name is required',
        ],

        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        phone: '',
        phoneRules:[
            v => !!v || 'Phone is required',
        ],

        subject:'',
        subjectRules:[
            v => !!v || 'Subject is required',
        ],


        message:'',
        messageRules:[
            v => !!v || 'Message is required',
            v => (v && v.length <= 500) || 'Message must be less than 500 characters',
        ],

        success:false,

    }),

    methods:{


        register(){

            const contact = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                phone: this.phone,
                subject: this.subject,
                message: this.message,
            }



            axios.post('api/contact',contact).then(response=>{
                this.success = response.data.success;
                if(this.success) {
                    this.$router.push({ path: "/messagesent" });
                }

                }).catch((error)=>{
                console.log(error);
                this.success = false
            })

        },

    },


    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MailIcon,
        MenuIcon,
        PhoneIcon,
        XIcon,
    },

}

</script>
