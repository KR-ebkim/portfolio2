<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import 'vuetify/styles'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const date = ref();
const route = useRoute()
const ShipType = ref([
    {
        title: 'BULKER',
    },
    { type: 'divider' },
    {
        title: 'CARGO',
    },
    { type: 'divider' },
    {
        title: 'CARRIER',
    },
    { type: 'divider' },
    {
        title: 'CONTAINER',
    },
    { type: 'divider' },
    {
        title: 'LIFT',
    },
    { type: 'divider' },
    {
        title: 'BULKER',
    },
])

const ShipName = ref([
    {
        name: 'MEGA PASSION - AFT',
    },
    {
        name: 'MEGA PASSION - FWD',
    },
    {
        name: 'MEGA CARAVAN 2 - PORT',
    },
    {
        name: 'MEGA CARAVAN 2 - STBD',
    },
    {
        name: 'MEGA CARAVAN - PORT',
    },
    {
        name: 'MEGA CARAVAN - PORT',
    },
    {
        name: 'MEGA CARAVAN - PORT',
    },
    {
        name: 'MEGA CARAVAN - PORT',
    },
])
</script>

<template>

    <div style="width: 100%; height:100%; background-color: #EFF3F6;">
        <v-container style="padding: 45px;">
            <div flat class="d-flex align-center">
                <span style="font-size:18px" class="font-weight-bold">
                    Alarm Trend
                </span>
                <v-spacer>
                </v-spacer>
                <v-btn icon flat color="transparent"><v-icon>mdi-home-outline</v-icon></v-btn>
                <v-icon>mdi-chevron-right</v-icon> <v-btn style="font-size:14px;" variant="text">{{ route.name
                }}</v-btn>
            </div>
            <v-card class="mb-6" width="1550px" height="325px" rounded="lg" variant="outlined"
                style="background-color: white; border-color: #EBEBEB;">

                <v-row>
                    <v-col>
                        <div class="mx-auto pa-5">
                            <h3 class="title mb-3">선박종류</h3>
                            <v-card id="tablelist" class="tablelist" height="240px" variant="outlined" flat>
                                <div max-width="300">
                                    <v-list class="scroll1" :items="ShipType"></v-list>
                                </div>
                            </v-card>
                        </div>
                    </v-col>

                    <v-col>
                        <div class="mx-auto pa-5">
                            <h3 class="title mb-3">선박이름</h3>
                            <v-text-field variant="outlined" label="Search" prepend-inner-icon="mdi-magnify"
                                style="width:300px; margin-bottom: -10px;"></v-text-field>
                            <v-card id="tablelist" class="tablelist" variant="outline" flat>
                                <v-table class="scroll2" variant="outlined" max-width="300" max-height="180"
                                    style="border: solid 1px #BFBFBF;">
                                    <tbody>
                                        <tr v-for="item in ShipName" :key="item.name">
                                            <td>
                                                <div class="d-flex" style="height:56px">
                                                    <div><v-checkbox color="primary" value="primary"
                                                            hide-details></v-checkbox></div>
                                                    <div class="my-auto" style="font-size: 15px;">{{ item.name }}</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </v-table>
                            </v-card>

                        </div>
                    </v-col>

                    <v-col>
                        <div class="mx-auto pa-5" style="height: 166px;">
                            <h3 class="title mb-3">기간</h3>
                            <Datepicker style="width:250px" v-model="date" />
                        </div>
                        <v-row>
                            <div class="px-8 py-5">
                                <h3 class="title">주요 장비</h3>
                                <v-row>
                                    <v-col style="margin-left: -10px;" md="4">
                                        <v-checkbox style="margin-top:-10px" label="All" color="primary" value="primary"
                                            hide-details></v-checkbox>
                                        <v-checkbox style="margin-top:-20px" label="ANU" color="primary" value="primary"
                                            hide-details></v-checkbox>

                                    </v-col>
                                    <v-col md="4">
                                        <v-checkbox style="margin-top:-10px" label="ECU" color="primary" value="primary"
                                            hide-details></v-checkbox>
                                        <v-checkbox style="margin-top:-20px" label="PMU" color="primary" value="primary"
                                            hide-details></v-checkbox>

                                    </v-col>
                                    <v-col>
                                        <v-checkbox style="margin-top:-10px" label="TSU" color="primary" value="primary"
                                            hide-details></v-checkbox>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-row>
                    </v-col>


                    <v-col>
                        <div class="mx-auto pa-5">
                            <h3 class="title">세부장비</h3>
                            <v-row>
                                <v-col style="margin-left: -10px;" md="3">
                                    <v-checkbox style="margin-top:-10px" label="All" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox style="margin-top:-20px" label="CSU" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox style="margin-top:-20px" label="FTS" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                </v-col>
                                <v-col md="3">
                                    <v-checkbox style="margin-top:-10px" label="HEU" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox style="margin-top:-20px" label="GDS" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox style="margin-top:-20px" label="FMU" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                </v-col>
                                <v-col md="3">
                                    <v-checkbox style="margin-top:-10px" label="FTU" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox style="margin-top:-20px" label="STS" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox style="margin-top:-20px" label="FCV" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                </v-col>
                            </v-row>
                        </div>
                        <v-row>
                            <div class="px-8">
                                <h3 class="title">오작동 상태</h3>
                                <v-row class="mb-2">
                                    <v-checkbox class="mr-8" label="All" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox class="mr-1" label="Alarm" color="primary" value="primary"
                                        hide-details></v-checkbox>
                                    <v-checkbox label="Trip" color="primary" value="primary" hide-details></v-checkbox>
                                </v-row>
                                <v-btn style="color: white" color="#0054D1" width="220px" flat>SET</v-btn>
                            </div>
                        </v-row>
                    </v-col>
                </v-row>
            </v-card>
            <v-card width="1550px" height="325px" rounded="lg" variant="outlined"
                style="background-color: white; border-color: #EBEBEB;">
                <div class="mx-auto pa-5">
                    <h3 class="title mb-3">발생한 문제 코드 및 알림 횟수</h3>
                    <v-sheet class="text-center pt-1" color="#CFE2FF" width="150px" height="30px"
                        style="font-weight: 700;">BUSAN PIONEER</v-sheet>
                    <v-col class="pl-0">
                        <div>TSU1 [CODE220] Sensor Fail : No Intake Water</div>
                        <div class="d-flex">
                            <v-progress-linear model-value="20" color="indigo" rounded></v-progress-linear>
                            <span style="margin: -11px 0 0 10px;">1(1/0)</span>
                        </div>
                    </v-col>
                    <v-col class="pl-0">
                        <div>[CODE604] FMU Flow Rate Low</div>
                        <div class="d-flex">
                            <v-progress-linear model-value="40" color="indigo" rounded></v-progress-linear>
                            <span style="margin: -11px 0 0 10px;">2(0/2)</span>
                        </div>
                    </v-col>
                    <v-col class="pl-0">
                        <div>[CODE721] Valve Opened</div>
                        <div class="d-flex">
                            <v-progress-linear model-value="60" color="indigo" rounded></v-progress-linear>
                            <span style="margin: -11px 0 0 10px;">1(2/0)</span>
                        </div>
                    </v-col>
                </div>
            </v-card>
        </v-container>
    </div>
</template>



<style>
.scroll1 {
    width: 298px;
    height: 240px;
    overflow: auto;
}

.scroll2 {
    width: 298px;
    height: 173px;
    overflow: auto;
    border-color: #BFBFBF;
}

.scroll1::-webkit-scrollbar,
.scroll2::-webkit-scrollbar {
    width: 10px;
}

.scroll1::-webkit-scrollbar-thumb,
.scroll2::-webkit-scrollbar-thumb {
    background-color: #4c6aac9d;
    border-radius: 10px;
}

.scroll1::-webkit-scrollbar-track,
.scroll2::-webkit-scrollbar-track {
    background-color: rgba(160, 185, 222, 0.542);
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
}

.title {
    color: #697186;
}

.tablelist {
    overflow-y: scroll;
    width: 300px;
    height: 250px;
    border-radius: 10px;
    color: #BFBFBF;
}
</style>