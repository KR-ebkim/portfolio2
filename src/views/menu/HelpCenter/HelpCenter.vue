<script setup>
import ArrowRight from "@/assets/IconSVG/ArrowRight.svg"
import HelpCenterPhoto1 from "@/assets/HelpCenter1.png"
import HelpCenterPhoto2 from "@/assets/HelpCenter2.png"
import HelpCenterPhoto3 from "@/assets/HelpCenter3.png"
</script>


<template>
    <div style="width: 100%; height:100%; background-color: #EFF3F6;">
        <v-container style="padding: 45px;">
            <span style="font-size: 18px; font-weight:700;">Help Center</span>
            <v-row class="mt-0">
                <v-col class="mb-3" md="4">
                    <v-card to="/aboutECS" max-width="510" height="400px" style="border: 1px solid #EBEBEB;" flat>
                        <v-img :src="HelpCenterPhoto1" height="250px" cover></v-img>

                        <v-card-subtitle class="pt-5">F.W & S.W Pump MCCB (AC 440V)</v-card-subtitle>

                        <v-card-title class="" style="line-height:25px; font-weight:700">
                            About ECS<br>
                            (부품에 대한 설명)
                        </v-card-title>

                        <v-btn color="#0054D1" variant="text">Read More<v-img :src="ArrowRight" width="25px"
                                class="ml-1"></v-img></v-btn>
                    </v-card>
                </v-col>
                <v-col md="4">
                    <v-card to="/troubleSolution" max-width="510" height="400px" style="border: 1px solid #EBEBEB;" flat>
                        <v-img :src="HelpCenterPhoto2" height="250px" cover></v-img>

                        <v-card-subtitle class="pt-5">F.W & S.W Pump MCCB (AC 440V)</v-card-subtitle>

                        <v-card-title class="" style="line-height:25px; font-weight:700">
                            Trouble Solution<br>
                            (고장에 대한 문제해결 방안)
                        </v-card-title>

                        <v-btn color="#0054D1" variant="text">Read More<v-img :src="ArrowRight" width="25px"
                                class="ml-1"></v-img></v-btn>
                    </v-card>
                </v-col>
                <v-col md="4">
                    <v-card to="/maintenanceECS" max-width="510" height="400px" style="border: 1px solid #EBEBEB;" flat>
                        <v-img :src="HelpCenterPhoto3" height="250px" cover></v-img>

                        <v-card-subtitle class="pt-5">GLOBAL EQUITIES</v-card-subtitle>

                        <v-card-title class="" style="line-height:25px; font-weight:700">
                            Maintenance ECS<br>
                            (ECS 유지 관리 방법)
                        </v-card-title>


                        <v-btn color="#0054D1" variant="text">Read More<v-img :src="ArrowRight" width="25px"
                                class="ml-1"></v-img></v-btn>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col sm="6">
                    <v-card class="mr-1" rounded="lg" min-height="250" style="border: 1px solid #EBEBEB;" flat>

                        <v-card-subtitle class="pt-10">Consulting System</v-card-subtitle>

                        <v-card-title class="mb-5" style="line-height:25px; font-weight:700">
                            Inquire about purchasing BWTS optimal management
                        </v-card-title>

                        <v-card-text style="font-size:15px ;font-weight:400;">24-hour consultation with a
                            counselor</v-card-text>

                        <v-btn class="mt-10" color="#0054D1" variant="text">Read More<v-img :src="ArrowRight"
                                class="ml-1" width="25px"></v-img></v-btn>
                    </v-card>
                </v-col>

                <v-col sm="6">
                    <v-card class="mr-1" rounded="lg" min-height="250" style="border: 1px solid #EBEBEB;" flat>
                        <v-card-subtitle class="pt-10">After care system</v-card-subtitle>

                        <v-card-title class="mb-5" style="line-height:25px; font-weight:700">
                            A/S by visiting the site
                        </v-card-title>

                        <v-card-text style="font-size:15px ;font-weight:400;">On average, it takes about three days</v-card-text>

                        <v-btn class="mt-10" color="#0054D1" variant="text">Read More<v-img :src="ArrowRight"
                                class="ml-1" width="25px"></v-img></v-btn>
                    </v-card>
                </v-col>
            </v-row>
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
</style>