<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { whileStatement } from '@babel/types';
import { Container } from 'postcss';

/* Chart.register(ChartDataLabels); */
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const route = useRoute()
const VerticalChartData1 = ref({
    labels: ['2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11'],
    datasets: [{
        label: 'Ballast Volume (m3)',
        backgroundColor: ['#0054D1'],
        data: [40, 20, 12, 15, 40, 50, 10, 20, 30, 20, 10, 50]
    },
    {
        label: 'Ballast Power (kW)',
        backgroundColor: ['#00D1AC'],
        data: [10, 50, 10, 30, 2, 17, 20, 50, 50, 20, 40, 10]
    }]
});
const VerticalChartOptions1 = ref({
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
            },
        }
    }
});
const VerticalChartData2 = ref({
    labels: ['2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11'],
    datasets: [{
        label: 'Discharge Volume (m3)',
        backgroundColor: ['#FFD600'],
        data: [5000, 8000, 4000, 2000, 7000, 3000, 5000, 2000, 5000, 3000, 9000, 2000]
    },
    {
        label: 'Discharge Neutralizer (L)',
        backgroundColor: ['#FF7A00'],
        data: [1000, 2000, 3000, 4000, 8000, 6000, 10000, 5000, 1000, 7000, 12000, 6000]
    }]
});
const VerticalChartOptions2 = ref({
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
            },
        }
    }
});
</script>

<template>




    <div style="width: 100%; height:100%; background-color: #EFF3F6;">

        <v-container style="padding: 45px;">
            <div flat class="d-flex align-center mb-5">
                <span style="font-size:18px" class="font-weight-bold">
                    Vessel Monthly Report
                </span>
                <v-spacer>
                </v-spacer>
                <v-btn icon flat color="transparent"><v-icon>mdi-home-outline</v-icon></v-btn>
                <v-icon>mdi-chevron-right</v-icon> <span class="mx-5">Vessel</span>
                <v-icon>mdi-chevron-right</v-icon> <v-btn style="font-size:14px" variant="text">{{ route.name }}</v-btn>
            </div>

            <div class="d-flex justify-space-between mb-2">
                <div>
                    <v-icon class="" size="30px" style="color:gray">mdi-arrow-left-box</v-icon>
                    <span class="mx-5" style="font-size:17px; font-weight:700">2022-11</span>
                    <v-icon class="" size="30px" style="color:gray">mdi-arrow-right-box</v-icon>
                </div>
                <div>
                    <span class="" style="color:gray">Date of last data recevied : 2022-11-23 18:12:45</span>
                </div>
            </div>


            <v-card class="pa-5" flat>
                <v-card-title class="pa-0 mb-3">General Information</v-card-title>

                <table class="Table mb-10">
                    <thead>
                        <tr>
                            <th class="tt" style="padding: 15px 10px 15px 10px;">Ship Name</th>
                            <th class="tt">Class</th>
                            <th class="tt">IMO Number</th>
                            <th class="tt">Vessel Type</th>
                            <th class="tt">Capacity</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <!--입력할 데이터-->
                            <td class="tt">ELECTRA</td>
                            <td class="tt">KR LR</td>
                            <td class="tt">1242157</td>
                            <td class="tt">BULKER</td>
                            <td class="tt">3,000 x 2 Set(s)</td>
                        </tr>
                    </tbody>
                </table>
                <v-card-title class="pa-0 mb-3">Operation Summary</v-card-title>

                <table class="Table mb-10">
                    <thead>
                        <tr>
                            <th class="tt"></th>
                            <th class="tt" style="padding: 15px 0px 15px 0px;">Ballast</th>
                            <th class="tt">Deballast</th>
                            <th class="tt">Stripping</th>
                        </tr>
                    </thead>


                    <tbody>
                        <tr>
                            <!--입력할 데이터-->
                            <td class="tm">Longest Operationg Time<span style="font-weight:400;"> (hh:mm:ss)</span></td>
                            <td class="tt">429:35:21</td>
                            <td class="tt">237:48:29</td>
                            <td class="tt">54:13:18</td>
                        </tr>
                        <tr>
                            <!--입력할 데이터-->
                            <td class="tm" style="width: 400px">Cumulative Operationg Time<span
                                    style="font-weight:400;"> (hh:mm:ss)</span></td>
                            <td class="tt">1035:35:21</td>
                            <td class="tt">802:48:29</td>
                            <td class="tt">296:53:18</td>
                        </tr>
                    </tbody>
                </table>

                <v-card-title class="pa-0 mb-3">Monthly Comparison</v-card-title>
                <Bar :chart-options="VerticalChartOptions1" :chart-data="VerticalChartData1" class="px-5 mb-15"
                    width="30" height="10" />
                <Bar :chart-options="VerticalChartOptions2" :chart-data="VerticalChartData2" class="px-5 mb-16"
                    width="30" height="10" />


                <v-card-title class="pa-0 mb-3">Period Summary</v-card-title>
                <table class="mb-10">
                    <tbody>
                        <tr>
                            <!--입력할 데이터-->
                            <td class="tt" style="width:50%; height: 60px;">현재위치 : 부산항</td>
                            <td class="tt" style="width:50%">BWMS 작동 현황 : Ballast</td>
                        </tr>
                    </tbody>
                </table>


                <v-card-title class="pa-0 mb-3">Abnormal</v-card-title>
                <table class="Table mb-10">
                    <thead>
                        <tr>
                            <th class="tt" style="padding: 15px 0px 15px 0px; width: 50%;">Alarm</th>
                            <th class="tt" style="width: 50%">Trip</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <!--입력할 데이터-->
                            <td class="tt" style="width:50%; height: 90px;">Code 발생횟수 3회<br>위험 코드 발생 1회 [CODE 152]</td>
                            <td class="tt" style="width:50%">Trip (기기 재부팅) 발생 : 1회</td>
                        </tr>
                    </tbody>
                </table>


                <v-card-title class="pa-0 mb-3">Comment</v-card-title>
                <v-card variant="outlined" style="color:#BFBFBF">
                    <v-card-text class="" style="color:black; font-weight:500;">[CODE 152]<br>
                        발생원인 : Flow Rate가 필요 이상으로 높거나낮을 때 또는 FMU 자체 불량<br>
                        선원 대처방법 :<br>
                        HMI의 Flow Rate를 확인<br>
                        HMI의 OP.MODE 클릭<br>
                        Select Operation Mode에서 원하는 OPERATION 선택<br>
                        현재 Flow Rate가 FMU Normal Range 내로 측정되는지 확인하고, 범위 밖이라면 Pump Valve 궤도 등을 이용하여 조절한다.<br>
                    </v-card-text>
                </v-card>
            </v-card>



        </v-container>
    </div>

</template>

<style>
table {
    width: 100%;
    border-collapse: collapse;
}

.Table {
    border-top: 3px solid;
    border-top-color: #0054D1;
}

th {
    background: #EFF3F6;
    color: black;
    font-weight: bold;
}

td,
th {
    padding: 10px;
    border: 1px solid #EBEBEB;
    text-align: left;
    font-size: 18px;
}

th:first-child,
td:first-child {
    border-color: #EBEBEB #EBEBEB #EBEBEB transparent;
}

th:last-child,
td:last-child {
    border-color: #EBEBEB transparent #EBEBEB transparent;
}

.labels tr td {
    background-color: #2cc16a;
    font-weight: bold;
    color: #fff;
}

.label tr td label {
    display: block;
}


[data-toggle="toggle"] {
    display: none;
}

.tm {
    font-weight: 700;
}

.tt {
    text-align: center;
}
</style>