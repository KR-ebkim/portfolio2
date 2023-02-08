<script setup>
import { ref, watch } from 'vue';
import { Bar, Doughnut } from 'vue-chartjs'
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
import { useRoute } from 'vue-router'

/* import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; */


import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { whileStatement } from '@babel/types';
import { Container } from 'postcss';

/* Chart.register(ChartDataLabels); */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

/*라우터*/
const route = useRoute()

/*세로 바 차트 */
const VerticalChartData = ref({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{ 
        label: 'IN',
        borderWidth: 2,
        borderColor: ['white'],
        backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0,350,0,0);

            gradient.addColorStop(0, '#00C2FF');
            gradient.addColorStop(1, '#00BB8E');

            return gradient;
            },
        barThickness: 10,
        borderRadius: Number.MAX_VALUE,
        data: [40, 20, 12, 60, 40, 50, 70, 80, 90, 20, 10, 100] 
    },
    { 
        label: 'OUT',
        borderWidth: 2,
        borderColor: ['white'],
        backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0,350,0,0);

            gradient.addColorStop(0, '#EB00FF');
            gradient.addColorStop(1, '#4200FF');

            return gradient;
            },
        barThickness: 10,
        borderRadius: Number.MAX_VALUE,
        data: [10, 50, 70, 30, 2, 17, 20, 100, 50, 20, 40, 10] }]
});
const VerticalChartOptions = ref({
    responsive: true,
    maintainAspectRatio:true,
    plugins: {
        legend: {
            labels: {
            usePointStyle: true,
            },
        }
    }
});

/*도넛 차트*/
const doughnutChart1 = {
    type: "doughnut",
    data: {
        labels: ["Ballast (hour)", "Dwballast (hour)", "Stripping (hour)", "etc."],
        datasets: [
        {
            backgroundColor: ["#0054D1", "#00D1AC", "#FFD600", "#FF5C00"],
            data: [1035, 802, 296, 0],
        },
        ],
    },
    };
    const doughnutChart2 = {
    type: "doughnut",
    data: {
        labels: ["Ballast (hour)", "Dwballast (hour)", "Stripping (hour)", "etc."],
        datasets: [
        {
            backgroundColor: ["#8E00D1", "#00D1FF", "#FF7A00", "#FF00A8"],
            data: [1035, 802, 296, 0],
        },
        ],
    },
    };

/*가로 차트*/
const HorizontalChartData = ref({
    labels: ['Passenger', 'UFT', 'ETC', 'Cargo', 'Container', 'Carrier', 'Tanker', 'Bulker'],
    datasets: [{ 
        borderRadius: Number.MAX_VALUE,
        barThickness: 5,
        backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(200,0,0,0);

            gradient.addColorStop(0, '#0054D1');
            gradient.addColorStop(1, '#00A3FF');

            return gradient;
            },
        data: [40, 20, 12, 60, 40, 50, 70, 80, 90, 20, 10, 100] },
    ]
});
const HorizontalChartOptions = ref({
    responsive: true,
    indexAxis: 'y',
    plugins: {
        options:{
        datalabels: {
        color: '#36A2EB'
        }},
        legend: {
        position: 'right',
        display:false,
    },
    }
});

/*라인 차트*/
const LineChart = {
    type: "line",
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
            label: 'ECU',
                    backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0,0,0,200);

            gradient.addColorStop(0, 'rgba(0, 117, 255, 0.25)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            return gradient;
            },
            data: [65, 59, 80, 81, 56, 55, 40, 22, 5, 10, 15, 30],
            fill: true,
            borderWidth: 1,
            borderColor: '#0075FF',
            tension: 0.4,
            radius:0
            },

            {
            label: 'ANU',
                    backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0,0,0,200);

            gradient.addColorStop(0, 'rgba(255, 255, 184, 0.25)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            return gradient;
            },
            data: [80, 50, 60, 30, 20, 70, 65, 70, 80, 0, 30, 40],
            fill: true,
            borderWidth: 1,
            borderColor: '#FFB800',
            tension: 0.4,
            radius:0,
            },
            {
            label: 'PDE',
                    backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0,0,0,200);

            gradient.addColorStop(0, 'rgba(173, 0, 255, 0.25)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            return gradient;
            },
            data: [20, 10, 20, 11, 26, 65, 90, 72, 55, 20, 55, 90],
            fill: true,
            borderWidth: 1,
            borderColor: '#AD00FF',
            tension: 0.4,
            radius:0
            },
            {
            label: 'TSU', 
                    backgroundColor: (ctx) => {
            const canvas = ctx.chart.ctx;
            const gradient = canvas.createLinearGradient(0,0,0,200);

            gradient.addColorStop(0, 'rgba(0, 211, 173, 0.25)');
            gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

            return gradient;
            },
            data: [15, 49, 10, 61, 46, 75, 50, 42, 25, 30, 35, 50],
            fill: true,
            borderWidth: 1,
            borderColor: '#00D3AD',
            tension: 0.4,
            radius:0,            
            },            
        ],
    },
    
};



</script>


<template>
    <div style="width: 100%; height:100%; background-color: #EFF3F6;">
        <v-container style="padding: 35px;">
            <div class="d-flex justify-space-between">
            <p style="font-size:18px; font-weight:700">Analytics</p>
                <div class="d-flex">
                    <div>
                        <v-btn-toggle class="mr-5" divided>
                        <v-btn class="ToggleBtn" height="35px">Days</v-btn>
                        <v-btn class="ToggleBtn" height="35px">Weeks</v-btn>
                        <v-btn class="ToggleBtn" height="35px">Months</v-btn>      
                        </v-btn-toggle>                        
                    </div>
                        <v-btn class="ToggleBtn" height="35px" flat><v-icon>mdi-calendar-blank-outline</v-icon>Jan, 2022 ~ Dec, 2022</v-btn>
                </div>
            </div>
            <v-row class="mb-4">
                <v-col sm="6">
                    <v-card class="mr-2 Graph1" rounded="lg" min-height="370" style="border: 1px solid #EBEBEB;" to="/ballastTrend" flat>
                        <div class="d-flex justify-space-between">
                        <h1 class="ma-5" style="font-size:20px">Ballast Report</h1>
                        <v-btn class="ma-5" variant="outlined" color="#697186"><v-icon>mdi-export-variant</v-icon>Export</v-btn>
                        </div>
                        <Bar :chart-options="VerticalChartOptions" :chart-data="VerticalChartData" class="px-5"  width="30" height="10" />
                    </v-card>
                </v-col>

                <v-col sm="3">
                    <v-card class="mr-2" rounded="lg" min-height="370" style="border: 1px solid #EBEBEB;" flat>
                        <h1 class="text-center mx-5 my-3" style="font-size:20px">Total Operation Time(hour)</h1>
                        <div class="mx-auto mb-4" style="max-width: 240px">
                            <vue3-chart-js v-bind="{ ...doughnutChart1 }" />
                        </div>
                        <div class="d-flex justify-center">
                        <v-btn variant="outlined" style="font-size:15px;" color="#697186">More Insights</v-btn>
                        </div>
                    </v-card>
                </v-col>

                <v-col sm="3">
                    <v-card rounded="lg" min-height="370" style="border: 1px solid #EBEBEB;" flat>
                        <h1 class="text-center mx-5 my-3" style="font-size:20px">Total Flow (㎡)</h1>
                        <div class="mx-auto mb-4" style="max-width: 240px">
                            <vue3-chart-js v-bind="{ ...doughnutChart2 }" />
                        </div>
                        <div class="d-flex justify-center">
                        <v-btn variant="outlined" style="font-size:15px;" color="#697186">More Insights</v-btn>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="3">
                    <v-card class="mr-2" to="/vessel" rounded="lg" min-height="300" style="border: 1px solid #EBEBEB;" flat>
                    <h1 class="mt-5 ml-4" style="font-size:20px">Number of Installation<br>Vessel Type</h1>
                    <div>
                        <Bar :chart-options="HorizontalChartOptions" :chart-data="HorizontalChartData" class="pa-7" height="250" style="margin-top:-20px" />
                    </div>
                    </v-card>
                </v-col>

                <v-col sm="9">
                    <v-card rounded="lg" min-height="300px" style="border: 1px solid #EBEBEB;" to="/alarmTrend" flat>
                        <div class="d-flex justify-space-between">
                            <h1 class="mt-5 ml-4" style="font-size:20px">Monthly Equipment Alarm Trend</h1>
                            

                            <v-menu rounded>
                                <template v-slot:activator="{ props }">
                                    <v-btn class="ma-5" variant="outlined" min-width="150px" height="40px" v-bind="props" style="font-size:15px;" color="#697186">
                                        Last Dates
                                    <v-icon class="ml-1" size="x-large" style="margin-left:-15px" color="black">mdi-menu-down</v-icon>
                                    </v-btn>
                                </template>
                                
                                

                                <v-card width="150px" >
                                    <v-card-text>
                                        <div class="mx-auto text-center">
                                            {data}
                                        </div>
                                    </v-card-text>
                                </v-card>
                            </v-menu>
                        </div>


                        <div class="pa-5">
                            <vue3-chart-js style="width:200px; height: 35px; margin-top: -9px;" v-bind="{ ...LineChart } "/>                      
                        </div> 
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
.ToggleBtn{
    background-color: white;
    border: 1px solid #DADADA; 
}

.ToggleBtn:hover{
    background-color: #192032;
    color: white;
}

</style>
 