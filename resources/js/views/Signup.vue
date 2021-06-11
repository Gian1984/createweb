<template>
    <section id="intro" class="py-20" style="background-image: url('/img/astronaut.jpg'); background-size: cover;">
        <div class="bg-warm-gray-50">
            <div class="py-24 lg:py-32">
                <div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
                    <h1 class="text-4xl font-extrabold tracking-tight text-yellow-600 sm:text-5xl lg:text-6xl">Subscribe!</h1>
                </div>
            </div>
        </div>
    </section>
    <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12 bg-gradient-to-b from-gray-800 to-blueGray-700">
      <form class="space-y-8 divide-y divide-gray-200 pt-10 mx-10">
        <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div>
              <header class="text-center mb-16">
                  <h2 class="leading-tight text-2xl sm:text-3xl font-bold mb-3 text-white">Ti aiutiamo in ogni fase del percorso seguendo <a href="https://agilemanifesto.org/iso/it/principles.html" class="text-green-600">i principi sottostanti al Manifesto Agile.</a></h2>
                  <h4 class="leading-tight text-xl text-gray-500">La nostra massima priorità è soddisfare il cliente rilasciando software di valore, fin da subito e in maniera continua.</h4>
              </header>
            <div>
              <h3 class="text-lg leading-6 font-medium text-white">
                Profilo
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-white">
                Inserisci le tue credenziali:
              </p>
            </div>

            <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="username" class="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                  Username
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <input v-model="username" :rules="userRules" type="text" name="username" id="username" autocomplete="username" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="username" class="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                  Password
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <input v-model="password" :rules="passwordRules" type="text" name="username" id="username" autocomplete="username" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                  </div>
                </div>
              </div>

              <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label for="username" class="block text-sm font-medium text-white sm:mt-px sm:pt-2">
                  Email
                </label>
                <div class="mt-1 sm:mt-0 sm:col-span-2">
                  <div class="max-w-lg flex rounded-md shadow-sm">
                    <input v-model="email" :rules="emailRules" type="text" name="username" id="username" autocomplete="username" class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-5">
          <div class="flex justify-end">
            <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Cancel
            </button>
            <button v-on:click="register" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-green-500 hover:bg-green-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
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
    }


}
</script>
