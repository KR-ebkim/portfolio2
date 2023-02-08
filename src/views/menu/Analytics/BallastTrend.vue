<script setup>
import { ref, onMounted, watch } from 'vue';
import { Bar } from 'vue-chartjs';
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useRoute } from 'vue-router'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'


/* import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; */


import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { whileStatement } from '@babel/types';
import { Container } from 'postcss';

/* Chart.register(ChartDataLabels); */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
/*라우터*/
const route = useRoute()

const date = ref();
const VerticalChartData1 = ref({
    labels: ['08 Sep', '09 Sep', '10 Sep', '11 Sep', '12 Sep', '13 Sep', '14 Sep', '15 Sep', '16 Sep', '17 Sep', '18 Sep', '19 Sep', '20 Sep', '21 Sep', '22 Sep', '23 Sep', '24 Sep', '25 Sep', '26 Sep', '27 Sep'],
    datasets: [{ 
        label:'Ballast',
        borderWidth: 2,
        borderColor: ['white'],
        backgroundColor: [
        'rgba(0, 84, 209, 1)'
        ],
        barThickness: 20,
        data: [500, 100, 500, 300, 400, 200, 500, 100, 500, 100, 500, 300, 400, 200, 500, 100, 500, 100, 500, 300] 
    },
    { 
        label: 'Dwballast',
        borderWidth: 2,
        borderColor: ['white'],
        backgroundColor: [
        'rgba(0, 209, 172, 1)'
        ],
        barThickness: 20,
        data: [300, 200, 400, 200, 100, 400, 500, 200, 300, 400, 300, 100, 500, 400, 300, 400, 100, 300, 200, 100] },
        { 
        label: 'Stripping',
        borderWidth: 2,
        borderColor: ['white'],
        backgroundColor: [
        'rgba(255, 214, 0, 1)'
        ],
        barThickness: 20,
        data: [200, 100, 300, 200, 500, 300, 200, 200, 400, 500, 400, 500, 300, 300, 200, 300, 400, 500, 100, 200] }
      ]
});
const VerticalChartOptions1 = ref({
    responsive: true,
    maintainAspectRatio:true,
    plugins: {
        legend: {         
            position: 'top',
            align: 'end',
            labels: {
            usePointStyle: true,
            padding: 20,
            },
        }
    }
});

const VerticalChartData2 = ref({
    labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '12 Sep', '02:00', '04:00', '06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],
    datasets: [{ 
        label:'IN',
        backgroundColor: [
        'rgba(0, 84, 209, 1)'
        ],
        barThickness: 40,
        data: [2000, 500, 1000, 1500, 1000, 500, 2000, 1000, 1500, 2000, 2000, 500, 1000, 1500, 1000, 500, 2000, 1000, 1500, 2000,] 
    },]
});
const VerticalChartOptions2 = ref({
    responsive: true,
    maintainAspectRatio:true,
    plugins: {
        legend: {
            display: false,
        }
    }
});



</script>

<template>
  <div style="width: 100%; height:100%; background-color: #EFF3F6;">
    <v-container style="padding: 35px;">
      <div class="d-flex justify-space-between">
        <p style="font-size:18px; font-weight:700">Ballast Trend</p>
        <div class="d-flex">
          <v-breadcrumbs :items="items">
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
        </div>
      </div>

      <div class="d-flex mb-2">
        <v-btn class="mr-2" variant="outlined" style="color: #0054D1; background-color: white;">
          <v-icon>mdi-filter-outline</v-icon>ADD
        </v-btn>
        <v-btn class="TopBtn mr-3" flat>BUSAN PIONEER</v-btn>
        <Datepicker class="mr-2" style="width:350px;" v-model="date" range />
        <span class="pa-2">INTERVAL</span>
        <div>
          <v-autocomplete density="compact" variant="outlined" class="searchField mb-1" bg-color="#FFFFFF"
            style="color: #BFBFBF; width: 100px;" hide-details
            v-model="model" chips clearable hide-selected item-text="name" item-value="symbol">
          </v-autocomplete>
        </div>
        <span class="pa-2">min</span>
        <v-btn color="primary" flat>Set</v-btn>
      </div>

      <v-card class="mb-6" rounded="lg" height="325px" variant="outlined"
        style="background-color: white; border-color: #EBEBEB;">
        <v-card-title style="font-weight: 700; margin-top: 10px;">FMU</v-card-title>
        <div class="mx-auto px-3" style="margin-top: -20px">
          <Bar :chart-options="VerticalChartOptions1" :chart-data="VerticalChartData1" class="px-5"  width="50" height="8" />
        </div>
      </v-card>
      <v-card class="mb-6" rounded="lg" height="325px" variant="outlined"
        style="background-color: white; border-color: #EBEBEB;">
        <v-card-title class="my-2" style="font-weight: 700;">Current / Neutralizer</v-card-title>
        <div class="mx-auto px-5">
          <Bar :chart-options="VerticalChartOptions2" :chart-data="VerticalChartData2" class="px-5"  width="50" height="8" />
        </div>
      </v-card>

    </v-container>
  </div>
</template>


<style>
.TopBtn {
  background-color: white;
  border: 1px solid #DADADA;
}

.TopBtn:hover {
  background-color: #192032;
  color: white;
}

</style>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "🏠",
        disabled: false,
        href: "Home",
      },
      {
        title: "Analytics",
        disabled: false,
        href: "Analytics",
      },
      {
        title: "Ballast Report",
        disabled: false,
        href: "BallastReport",
      },
      {
        title: "Ballast Trend",
        disabled: true,
        href: "BallastTrend",
      },
    ],
  }),
  components: { Bar }
}
</script>