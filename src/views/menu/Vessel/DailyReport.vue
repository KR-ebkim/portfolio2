<script setup>
import { defineComponent, reactive } from "vue";
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const ShipType = ref([
    {
        name: 'ADONIS',
    },
    {
        name: 'LAS PALMAS',
    },
    {
        name: 'BUSAN PIONEER',
    },
    {
        name: 'ELECTRA',
    },
])
</script>


<template>
    <div style="width: 100%; height:100%; background-color: #EFF3F6;">

        <v-container style="padding: 45px;">
            <div flat class="d-flex align-center">
                <span style="font-size:18px" class="font-weight-bold">
                    선박에서 오는 실시간 알림 현황
                </span>
                <v-spacer>
                </v-spacer>
                <v-btn icon flat color="transparent"><v-icon>mdi-home-outline</v-icon></v-btn>
                <v-icon>mdi-chevron-right</v-icon> <v-btn style="font-size:14px" variant="text">{{ route.name }}</v-btn>
            </div>
            <v-card class="pa-5">
                <div class="d-flex justify-space-between">
                    <div class="mt-1">
                        <v-icon class="" size="30px" style="color:gray">mdi-arrow-left-box</v-icon>
                        <span class="mx-5" style="font-size:17px; font-weight:700">2022-11</span>
                        <v-icon class="" size="30px" style="color:gray">mdi-arrow-right-box</v-icon>
                    </div>
                    <div class="d-flex justify-end">
                        <v-sheet class="d-flex" width="500">
                            <span class="mr-2 mt-2" style="font-size:15px">show</span>
                            <v-select density="compact" class="mr-2" :items="items" label="" variant="outlined"
                                style="max-width:100px;"></v-select>
                            <v-text-field density="compact" variant="outlined" filled label="Search"
                                prepend-inner-icon="mdi-magnify"></v-text-field>
                        </v-sheet>
                    </div>
                </div>
                <table class="Table mb-10">
                    <thead>
                        <tr>
                            <th class="tt" style="padding: 15px 10px 15px 10px;">선박종류</th>
                            <th class="tt">날짜</th>
                            <th class="tt">기기 작동 현황</th>
                            <th class="tt">중화제 투입 정도</th>
                            <th class="tt">투입된 물의 부피</th>
                            <th class="tt">발생 문제 코드</th>
                            <th class="tt" width="350">Comment</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <!--입력할 데이터-->
                            <td class="tt" style="padding: 15px 10px 15px 10px;">
                                <v-icon color="#A6A6A6">mdi-alert-octagon-outline</v-icon> BUSAN PIONEER
                            </td>
                            <td class="tt"><v-icon color="#0054D1">mdi-map-marker-outline</v-icon> 2022-09-27</td>
                            <td class="tt">BALLAST</td>
                            <td class="tt">3.84</td>
                            <td class="tt">4,948</td>
                            <td class="tt">-</td>
                            <td class="lastTable">이상없음</td>
                        </tr>
                    </tbody>
                    <tr>
                        <td class="tt" rowspan="4"><v-icon color="red">mdi-alert-octagon-outline</v-icon> ELECTRA</td>
                        <td class="tt" rowspan="2"><v-icon color="#0054D1">mdi-map-marker-outline</v-icon> 2022-08-26
                        </td>
                        <td class="tt">BALLAST</td>
                        <td class="tt">7.79</td>
                        <td class="tt">85</td>
                        <td class="tt">-</td>
                        <td rowspan="4" class="lastTable">
                            [CODE 152]<br>
                            발생원인 : Flow Rate가 필요 이상으로 높거나 낮을 때 또는 FMU 자체 불량<br>
                            선원 대처방법 :<br>
                            1. HMI의 Flow Rate를 확인<br>
                            2. HMI의 OP.MODE 클릭<br>
                            <div class="d-flex">3. <div class="pl-1">Select Operation Mode에서 원하는 OPERATION 선택</div></div>
                            <div class="d-flex">4. <div class="pl-1">현재 Flow Rate가 FMU Normal Range 내로 측정되는지 확인하고, 범위 밖이라면 Pump Valve 궤도 등을 이용하여 조절한다.</div></div>
                        </td>
                    </tr>
                    <tr>
                        <td class="tt">DEBALLAST</td>
                        <td class="tt">-</td>
                        <td class="tt">156</td>
                        <td class="tt" style="color:red; font-weight: 700;">152</td>
                    </tr>
                    <tr>
                        <td class="tt">2022-09-27</td>
                        <td class="tt">BALLAST</td>
                        <td class="tt">-</td>
                        <td class="tt">5</td>
                        <td class="tt">-</td>
                    </tr>
                    <tr>
                        <td class="tt">2022-09-27</td>
                        <td class="tt">BALLAST</td>
                        <td class="tt">-</td>
                        <td class="tt">-</td>
                        <td class="tt">-</td>
                    </tr>
                    <tr>
                        <td class="tt" style="padding: 15px 10px 15px 10px;"><v-icon
                                color="#A6A6A6">mdi-alert-octagon-outline</v-icon> BUSAN PIONEER</td>
                        <td class="tt"><v-icon color="#0054D1">mdi-map-marker-outline</v-icon> 2022-09-27</td>
                        <td class="tt">BALLAST</td>
                        <td class="tt">3.84</td>
                        <td class="tt">4,948</td>
                        <td class="tt">8.45 [48]</td>
                        <td class="lastTable">이상없음</td>
                    </tr>
                    <tbody v-for="item in ShipType" :key="item">
                        <tr>
                            <td class="tt" style="padding: 15px 10px 15px 10px;"><v-icon
                                    color="#A6A6A6">mdi-alert-octagon-outline</v-icon>{{ item.name }}</td>
                            <td class="tt"><v-icon color="#0054D1">mdi-map-marker-outline</v-icon> 2022-09-27</td>
                            <td class="tt">BALLAST</td>
                            <td class="tt">3.84</td>
                            <td class="tt">4,948</td>
                            <td class="tt">-</td>
                            <td class="lastTable">이상없음</td>
                        </tr>
                    </tbody>



                </table>
                <div class="text-center">
                    <v-pagination v-model="page" :length="5" rounded="circle"></v-pagination>
                </div>
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

.lastTable {
    border-color: #EBEBEB transparent #EBEBEB #EBEBEB;
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