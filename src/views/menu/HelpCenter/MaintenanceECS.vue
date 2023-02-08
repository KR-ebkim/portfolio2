<script setup>
import { defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()
const itemGroup = ref(null)
const eCSList = ref([

    {
        text: "Maintenance",
        id: 1
    },
    { type: 'divider' },
    {
        text: "1 ECU",
        id: 2
    },
    { type: 'divider' },
    {
        text: "2 TSU",
        id: 3
    },
    { type: 'divider' },
    {
        text: "3 TSU",
        id: 4
    },
    { type: 'divider' },
    {
        text: "4 ANU",
        id: 5
    },
    { type: 'divider' },
    {
        text: "5 FTU HEU",
        id: 6
    },
    { type: 'divider' },
    {
        text: "6 ECU",
        id: 7
    },
    { type: 'divider' },
    {
        text: "7 Sensor",
        id: 8
    },
    { type: 'divider' },
    {
        text: "8 Mixing Operation",
        id: 9
    },

])

</script>

<script>
export default {
    data: () => ({
        open: ['Maintenance'],
        ECU: [
            ['1.1 EM Cleaning 🎬'],
            ['1.2 P.S(Pressure Switch) 🎬'],
            ['1.3 PRU cooling Strainer Cleaning 🎬']
        ],
        TSU: [
            ['2.1'],
            ['2.2'],
        ],
    }),
}
</script>

<template>

    <div style="width: 100%; height:100%; background-color: #EFF3F6;">
        <v-container style="padding: 45px;">
            <div class="d-flex">
                <span style="font-size:18px" class="font-weight-bold">
                    Maintenance ECS
                </span>
                <v-spacer>
                </v-spacer>
                <div>
                    <v-btn icon flat color="transparent"><v-icon>mdi-home-outline</v-icon></v-btn>
                    <v-icon>mdi-chevron-right</v-icon> <v-btn style="font-size:14px" variant="text">{{ route.name
                    }}</v-btn>
                </div>
            </div>

            <div class="d-flex">
                <div>
                    <v-card width="250px" rounded="lg" style="border:1px #BFBFBF solid" flat>
                        <v-list v-model:opened="open">
                            <v-list-group value="Maintenance">
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" title="Maintenance"
                                        active-class="activeClass1"></v-list-item>
                                </template>

                                <v-list-group value="ECU">
                                    <template v-slot:activator="{ props }">
                                        <v-list-item v-bind="props" title="1 ECU"></v-list-item>
                                    </template>


                                    <v-list-item v-for="([title], i) in ECU" :key="i" :title="title" :value="title"
                                        active-class="activeClass2"></v-list-item>

                                </v-list-group>

                                <v-list-group value="TSU">
                                    <template v-slot:activator="{ props }">
                                        <v-list-item v-bind="props" title="2 TSU"></v-list-item>
                                    </template>


                                    <v-list-item v-for="([title], i) in TSU" :key="i" :title="title" :value="title"
                                        active-class="activeClass2"></v-list-item>
                                </v-list-group>
                            </v-list-group>
                        </v-list>
                    </v-card>
                </div>
                <div class="ml-5">
                    <v-btn-toggle class="mr-5" active-class="ToggleBtnActive" style="margin-bottom:-8px" divided>
                        <v-btn class="ToggleBtn" height="35px">Korean</v-btn>
                        <v-btn class="ToggleBtn" height="35px">English</v-btn>
                        <v-btn class="ToggleBtn" height="35px">Video</v-btn>
                    </v-btn-toggle>

                    <!--로컬저장소 비디오-->
                    <!-- <video controls width="1280" height="720" style="border-radius:15px">
                        <source src="@/assets/videos/test.mp4" type="video/mp4">
                    </video> -->
                    
                    <!--유투브 비디오-->
                    <iframe style="border-radius:15px" width="1280" height="720" src="https://www.youtube.com/embed/VyMFdjCPiFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </v-container>
    </div>
</template>

<style>
.activeClass1 {
    background-color: #0054D1;
    color: white
}

.activeClass2 {
    background-color: #B7D4FF;
}

.activeClass3 {
    background-color: #eeeeee;
}


.ToggleBtn {
    background-color: white;
    border: 1px solid #DADADA;
}

.ToggleBtn:hover {
    background-color: #192032;
    color: white;
}

.ToggleBtnActive {
    background-color: #192032;
    color: white;
}
</style>