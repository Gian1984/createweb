<template>
  <form class="space-y-8 divide-y divide-gray-200 pt-10 mx-10">
    <div class="space-y-8 divide-y divide-gray-200 sm:space-y-5">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-white">
            Profile
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-white">
            This information will be displayed publicly so be careful what you share.
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

      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Personal Information
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-black">
            Use a permanent address where you can receive mail.
          </p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="first_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              First name
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="first_name" id="first_name" autocomplete="given-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="last_name" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Last name
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="email" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Email address
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input id="email" name="email" type="email" autocomplete="email" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="country" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Country / Region
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <select id="country" name="country" autocomplete="country" class="max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="street_address" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              Street address
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="city" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              City
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="city" id="city" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="state" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              State / Province
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="state" id="state" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>

          <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label for="zip" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
              ZIP / Postal
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <input type="text" name="zip" id="zip" autocomplete="postal-code" class="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
        </button>
        <button v-on:click="register" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </div>
  </form>
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
