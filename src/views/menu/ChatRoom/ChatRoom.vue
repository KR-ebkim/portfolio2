<script setup>
import { ref, watch } from 'vue';
import IconEmail from '@/assets/IconSVG/Envelope.svg'
import IconUser from '@/assets/IconSVG/Users.svg'
import IconDollar from '@/assets/IconSVG/CurrencyCircleDollar.svg'
import IconPercent from '@/assets/IconSVG/Percent.svg'
import IconArrowsCounter from '@/assets/IconSVG/ArrowsCounterClockwise.svg'

const itemGroup = ref(null)
const userList = ref([
  {
    title: "An electric circuit team",
  },
  {
    title: "S/W engineer",
  },
  {
    title: "H/W engineer",
  },
  {
    title: "Electro team",
  },
  {
    title: "Environment EPC team",
  },
  {
    title: "Providing compliance team"
  }
])

const innerList = ref([
  {    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
    name: "William",
    id:"Customer ID #1234",},
  {    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
    name: "Max",
    id:"Customer ID #5678",},
  {
    avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
    name: "Stella",
    id:"Customer ID #1153"
  },
  {    avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
    name: "Jenny",
    id:"Customer ID #2123"
  },
])

const rateTitle = ref([
  {
    title: "Total Users",
    data: "20K",
    rate: "1.3% ↑",
    src: IconUser,
  },
  {
    title: "Total Revenues",
    data: "$768,342",
    rate: "1.8% ↓",
    src: IconDollar,
  },
  {
    title: "Total Bounce Rate",
    data: "56%",
    rate: "2.1% ↑",
    src: IconPercent,
  },
  {
    title: "Total Sessions",
    data: "14K",
    rate: "2.3% ↑",
    src: IconArrowsCounter,
  },
])
</script>

<template>
  <div style="width: 100%; height:100%; background-color: #EFF3F6;">
    <v-container style="padding: 45px;">
      <v-row>
        <v-col cols="10">
          <v-row>
            <v-col v-for="item in userList" :key="item.title" cols="4">
              <v-card height="375" flat>
                <v-list>

                  <v-list-item>
                    <v-list-item-title class="mb-1" style="font-size: 17px; font-weight: 700; color: #101523;">
                      {{ item.title }}
                    </v-list-item-title>
                    <v-list-item v-for="item in innerList" :key="item.text" style="margin-left: -10px">
                      <div class="d-flex justify-space-between">
                          <div class="mb-2 d-flex">
                            <div>
                            <v-avatar size="50"><img :src="item.avatar" width="70"></v-avatar>
                            </div>
                            <div class="pt-1" style="line-height: 23px;">
                              <v-text class="pl-5 mb-1" style="font-size: 20px">{{ item.name }}</v-text><br>
                              <v-text class="pl-5" style="font-size:15px; color: gray;">{{ item.id }}</v-text>
                            </div>
                          </div>

                        <div>
                          <v-btn to="/chatRoomDetail" variant="outlined" color="#D9E8F6" style="background-color: #F2F6FC;" icon><v-icon color="#0054D1">mdi-email-outline</v-icon></v-btn>
                        </div>           
                      </div>
                    </v-list-item>                    
                  </v-list-item>

                </v-list>

                <div class="d-flex justify-center">
                  <v-btn variant="outlined" style="margin-top: -5px ; font-size:15px;" color="#697186">More Insights</v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2">

          <v-card v-for="item in rateTitle" :key="item.title" height="120" class="mb-5" flat>
              <v-card-title style="font-size: 15px; color: gray;">{{item.title}}</v-card-title>
              <div class="d-flex pr-5" style="margin-top: -15px;">
              <v-card-text style="font-size: 20px; font-weight: 700;">{{item.data}}</v-card-text>
              <v-avatar color="#D9E8F6" style="background-color: #F2F6FC;" variant="outlined"><v-img class="test" :src="item.src" max-width="26px"></v-img></v-avatar>
            </div>
              <div class="d-flex">
                <p class="ml-4" style="font-size: 15px; font-weight: 700; color: #0054D1;">{{item.rate}}</p>
                <p class="ml-3" style="font-size: 14px; color: gray; margin-top: -1px;">than last year</p>
              </div>
          </v-card>

        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style>
</style>