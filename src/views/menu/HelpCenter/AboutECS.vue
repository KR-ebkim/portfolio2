<script setup>
import { defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { useRoute } from 'vue-router'
import { usePDF, VuePDF } from "@tato30/vue-pdf";

const route = useRoute()
const itemGroup = ref(null)
const { pdf } = usePDF("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf");
const currentPage = ref(1);
const scale = ref(1);
const eCSList = ref([

    {
        text: "1 CPC",
        id: 1
    },
    { type: 'divider' },
    {
        text: "2 PDE",
        id: 2
    },
    { type: 'divider' },
    {
        text: "3 TSU",
        id: 3
    },
    { type: 'divider' },
    {
        text: "4 ANU",
        id: 4
    },
    { type: 'divider' },
    {
        text: "5 FTU HEU",
        id: 5
    },
    { type: 'divider' },
    {
        text: "6 ECU",
        id: 6
    },
    { type: 'divider' },
    {
        text: "7 Sensor",
        id: 7
    },
    { type: 'divider' },
    {
        text: "8 Mixing Operation",
        id: 8
    },

])

</script>

<script>


export default {
    data: () => ({
        open: ['ECS'],

    }),
}
</script>

<template>

    <div style="width: 100%; height:100%; background-color: #EFF3F6;">
        <v-container style="padding: 45px;">
            <div class="d-flex">
                <span style="font-size:18px" class="font-weight-bold">
                    About ECS
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
                    <v-card width="250" rounded="lg" style="border:1px #BFBFBF solid;" flat>
                        <v-list v-model:opened="open" active-class="activeClass1">
                            <v-list-group value="ECS">
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props" title="ECS"></v-list-item>
                                </template>

                                <v-list active-class="activeClass2" :items="eCSList" item-title="text"
                                    item-value="id"></v-list>
                            </v-list-group>
                        </v-list>
                    </v-card>
                </div>
                <div class="ml-5">
                    <v-btn-toggle class="mr-5" divided>
                        <v-btn class="ToggleBtn" height="35px">Korean</v-btn>
                        <v-btn class="ToggleBtn" height="35px">English</v-btn>
                    </v-btn-toggle>
                    <v-card width="65vw" style="background-color:white; border: 1px #EBEBEB solid;"
                        flat>
                        <v-card class="pa-2" style="background-color:#F9F9F9; border-bottom: 1px #EBEBEB solid;" flat>
                            <div class="text-center d-flex justify-center">
                                <v-btn class="primary mr-2" @click="scale = scale > 0.25 ? scale - 0.25 : 0.25"
                                    variant="outlined" color="grey" style="background-color:white" flat>
                                    <span
                                        class="material-icons-outlined"><v-icon>mdi-minus-circle-outline</v-icon></span>
                                </v-btn>
                                <div class="mr-2" style="margin-top: 6px">{{ scale * 100 }}%</div>
                                <v-btn class="primary mr-15" @click="scale = scale < 2 ? scale + 0.25 : 2"
                                variant="outlined" color="grey" style="background-color:white" flat>
                                    <span
                                        class="material-icons-outlined"><v-icon>mdi-plus-circle-outline</v-icon></span>
                                </v-btn>
                                <v-btn class="primary mr-2" flat
                                    @click="currentPage = currentPage > 1 ? currentPage - 1 : 1"
                                    variant="outlined" color="grey" style="background-color:white">Prev</v-btn>
                                <div style="margin-top: 6px">{{ currentPage }} / {{ pages }}</div>
                                <v-btn class="primary ml-2" flat
                                    @click="currentPage = currentPage < pages ? currentPage + 1 : pages"
                                    variant="outlined" color="grey" style="background-color:white">Next</v-btn>

                            </div>

                        </v-card>
                        <div class="mt-2 text-center">
                            <VuePDF :pdf="pdf" :page="currentPage" :scale="scale" />
                        </div>
                    </v-card>
                </div>
            </div>
        </v-container>
    </div>
</template>






<style>
.activeClass1 {
    background: #0054D1;
    color: white
}

.activeClass2 {
    background-color: #B7D4FF;
}

.ToggleBtn {
    background-color: white;
    border: 1px solid #DADADA;
}

.ToggleBtn:hover {
    background-color: #192032;
    color: white;
}
</style>