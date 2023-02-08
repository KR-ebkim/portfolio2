<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import router from './router'
import IconHome from '@/assets/IconSVG/Home.svg'
import IconAnalytics from '@/assets/IconSVG/Analytics.svg'
import IconVessel from '@/assets/IconSVG/Vessel.svg'
import IconChatRoom from '@/assets/IconSVG/ChatRoom.svg'
import IconCalendar from '@/assets/IconSVG/Calendar.svg'
import IconHelpCenter from '@/assets/IconSVG/HelpCenter.svg'
import IconSettings from '@/assets/IconSVG/Settings.svg'
import IconMessage from '@/assets/IconSVG/Messages.svg'
import IconBellRinging from '@/assets/IconSVG/BellRinging.svg'


const route = useRoute()
const drawer = ref(null)
const group = ref(null)
const model = ref(null)
const search = ref(null)
const tab = ref(null)
const isLoading = ref(false)

console.log(1)

const user = ref({
  avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
  fullName: '박상욱',
  job: 'Product Manager',
})
const navList = ref([{
  to: "/",
  src: IconHome,
  text: "Home"
},
{
  to: "/analytics",
  src: IconAnalytics,
  text: "Analytics"
},
{
  to: "/vessel",
  src: IconVessel,
  text: "Vessel"
},
{
  to: "/chatRoom",
  src: IconChatRoom,
  text: "ChatRoom"
},
{
  to: "/calendar",
  src: IconCalendar,
  text: "Calendar"
},
{
  to: "/helpCenter",
  src: IconHelpCenter,
  text: "HelpCenter"
},
{
  to: "/",
  src: IconSettings,
  text: "Settings"
},
])

</script>

<template>

  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <div v-if="route.path !== '/login'">
      <v-navigation-drawer v-model="drawer" style="background-color: #192032;" app>

        <v-list>

          <v-list-item :to="item.to" v-for="item in navList" :key="item.text">
            <v-list-item-title class="d-flex pa-3" style="font-size: 15px; color: #828795;">
              <v-img :src="item.src" max-width="25" class="mr-4"></v-img>{{ item.text }}
            </v-list-item-title>
          </v-list-item>

        </v-list>

        <template v-slot:append>
          <div>
            <v-menu rounded>
              <template v-slot:activator="{ props }">
                <v-btn min-width="255px" height="70px" v-bind="props" style="background-color:#121724;">
                  <v-avatar>
                    <v-img alt="아바타 사진" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                  </v-avatar>
                  <div class="ml-2 text-left" style="font-size:15px; color: white;">박상욱<br>
                    <div class="mt-1" style="font-size: 13px; color:#828795;">{{ user.job }}</div>
                  </div>

                  <v-icon class="ml-5" size="x-large" style="margin-left:-15px" color="white">mdi-menu-up</v-icon>
                </v-btn>
              </template>

              <v-card width="255px" style="margin-left:-11px; background-color: #2A3143; color: white;">
                <v-card-text>
                  <div class="mx-auto text-center">
                    <v-avatar class="mb-2">
                      <v-img alt="아바타 사진" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                    </v-avatar>


                    <h3>{{ user.fullName }}</h3>

                    <p class="text-caption mt-1">
                      {{ user.job }}
                    </p>

                    <v-divider class="my-3" color="#515F82"></v-divider>

                    <v-btn rounded variant="text">회원정보 수정</v-btn>

                    <v-divider class="my-3" color="#515F82"></v-divider>

                    <v-btn rounded variant="text">로그아웃</v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-menu>
          </div>
        </template>
      </v-navigation-drawer>
      <v-app-bar class="pl-4" height="55" style=" border: 1px solid #EBEBEB;" flat>
        <div>
          <v-autocomplete density="compact" variant="outlined" class="searchField ml-5" bg-color="#F2F6FC"
            style="color: #0054D1; width: 330px;" label="Search" prepend-inner-icon="mdi-magnify" hide-details
            v-model="model" :loading="isLoading" chips clearable hide-selected item-text="name" item-value="symbol">
          </v-autocomplete>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="mr-3" style="background-color:#F2F6FC" variant="outlined" icon color="#D9E8F6" size="small">
          <v-img :src="IconMessage" width="25px"></v-img>
        </v-btn>
        <v-btn class="mr-5" style="background-color:#F2F6FC" variant="outlined" icon color="#D9E8F6" size="small">
          <v-badge dot color="orange" bordered><v-img :src="IconBellRinging" width="25px"></v-img></v-badge>
        </v-btn>
      </v-app-bar>
    </div>
  </v-app>


</template>

<style>
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

.v-btn {
  text-transform: none !important;
}
</style>






