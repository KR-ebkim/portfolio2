<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
/*라우터*/
const route = useRoute()
</script>


<template>
    <div style="width: 100%; height:100%; background-color: #EFF3F6;">
        <v-container style="padding: 35px;">
            <div class="d-flex justify-space-between">
                <p class="mb-5" style="font-size:18px; font-weight:700">BWTS Schedule</p>
<!--               <div>
                    <v-icon class="" size="30px" style="color:gray">mdi-arrow-left-box</v-icon>
                    <span class="mx-5" style="font-size:17px; font-weight:700">Today</span>
                    <v-icon class="" size="30px" style="color:gray">mdi-arrow-right-box</v-icon>
                </div>
                <v-btn-toggle class="mr-5" divided>
                    <v-btn class="ToggleBtn" height="35px">Months</v-btn>
                    <v-btn class="ToggleBtn" height="35px">Weeks</v-btn>
                    <v-btn class="ToggleBtn" height="35px">Days</v-btn>
                </v-btn-toggle>--> 

            </div>
            <v-card rounded="lg" flat>
                <vue-cal id="vuecal" selected-date="2022-12-10" :time-from="1 * 60"
                    :events="events" editable-events events-count-on-year-view events-on-month-view="short"
                    :disable-views="['years', 'year']"></vue-cal>
                </v-card>


        </v-container>
    </div>
</template>

<style>
.ToggleBtn {
    background-color: white;
    border: 1px solid #DADADA;
}

.ToggleBtn:hover {
    background-color: #192032;
    color: white;
}

.vuecal {
  margin: auto;
  max-width: 100%;
  max-height: 100%;
}

.vuecal__flex.vuecal__menu{
    background-color: #192032;
    color: white;
}
.vuecal__title-bar{
    background-color: #F5F9FF;
}

.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(177, 177, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(235, 240, 255, 0.4);}
.vuecal__cell--selected:before {border-color: rgba(124, 171, 236, 0.5);}

.vuecal__cell-date{
    text-align: start;
    padding: 10px 1px 65px 10px;
}

html, body, #vuecal { height: 100%; }
#vuecal {box-sizing: border-box;}
</style>

<!-- <script>
Vue.createApp({
  components: { VueCal: vuecal },
  data: () => ({
    events: [
      {
        start: '2018-11-19 10:35',
        end: '2018-11-19 11:30',
        title: 'Doctor appointment'
      },
      {
        start: '2018-11-19 18:30',
        end: '2018-11-19 19:15',
        title: 'Dentist appointment'
      },
      {
        start: '2018-11-20 18:30',
        end: '2018-11-20 20:30',
        title: 'Crossfit'
      },
      {
        start: '2018-11-21 11:00',
        end: '2018-11-21 13:00',
        title: 'Brunch with Jane'
      },
      {
        start: '2018-11-21 19:30',
        end: '2018-11-21 23:00',
        title: 'Swimming lesson'
      },
      {
        start: '2019-09-30 19:30',
        end: '2019-09-30 23:00',
        title: 'Swimming lesson'
      },
      {
        start: "2018-11-19 12:00",
        end: "2018-11-19 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true
      },
      {
        start: "2018-11-20 12:00",
        end: "2018-11-20 14:00",
        title: "LUNCH",
        class: "lunch",
        background: true
      }
    ]
  })
}).mount('#vuecal')
</script> -->
