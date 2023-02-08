<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'

import loginBg from '@/assets/login/loginBg.png'

const colorRef = ref(false)
const dialog = ref(false)


const focusAction = () => {

  colorRef.value = !colorRef.value
  console.log(colorRef.value)
}
console.log(11)
</script>

<template>
  <v-img :src="loginBg" width="100%" style="position:absolute"></v-img>
  <v-sheet style="height: 100vh" color="#EFF3F6" class="d-flex align-center justify-center">
    <v-card class="mx-auto" color="white" width="480px" height="505px" rounded="lg">
      <v-card-text class="mt-15 mb-10" style="padding: 0 40px 0px 40px; font-size: 24px; font-weight: 700;">Smart Platform
        Login</v-card-text>

      <v-form class="mx-10">
        <!--ID-->
        <v-text-field label="ID" variant="outlined" hide-details class="mb-5" bg-color="#F2F6FC"
          style="color: #0054D1;"></v-text-field>
        <!--Password-->
        <v-text-field label="Password" variant="outlined" hide-details class="mb-5" bg-color="#F2F6FC"
          style="color: #0054D1;"></v-text-field>
        <!--login-->
        <v-btn to="/" class="mb-5" color="#0054D1" width="400px" height="52px" style="color:white" flat>Login</v-btn>
        <!--Find Password-->
        <v-btn class="mb-10" color="#0054D1" width="400px" height="52px" flat variant="outlined" block
          @click="dialog = true">User Password
          Request</v-btn>

        <p style="font-size:12px" width="400px">This service is available only to the vessel who applied REMOTE SYSTEM.
        </p>

      </v-form>
    </v-card>
  </v-sheet>

  <v-dialog v-model="dialog">
    <v-card width="480px" height="380" class="mx-auto" rounded="lg">
      <v-card-actions class="d-flex justify-end" style="margin-bottom: -20px">
        <v-btn class="close-btn mt-3"><v-icon size="35" @click="dialog = false">mdi-close-circle-outline</v-icon></v-btn>
      </v-card-actions>
      <v-card-title class="text-center" style="font-size: 24px; font-weight: 700; margin-bottom: -10px;">
        Password Request
      </v-card-title>
      <v-card-text class="text-center" style="font-size:12px;">
        Enter your information
      </v-card-text>
      <!--ID-->
      <div class="mx-auto">
        <v-text-field label="ID" variant="outlined" class="mb-3" bg-color="#F2F6FC"
          style="color: #0054D1; width: 400px;" hide-details></v-text-field>
        <!--Email-->
        <v-text-field label="Email (Email registered in memeber information)" variant="outlined" class="mb-3" bg-color="#F2F6FC"
          style="color: #0054D1; width: 400px;" hide-details></v-text-field>
        <!--Continue-->
        <v-btn class="mb-10" color="#0054D1" width="400px" height="52px" style="color:white" flat>Continue</v-btn>
      </div>

    </v-card>
  </v-dialog>



</template>

<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.close-btn span{
  margin-left: 16px;
  padding-right: 16px;
  width: 40px;
}

.v-btn{
  text-transform: none !important;
}
</style>