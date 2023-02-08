


<template>
    <div style="width: 100%; height:100%; background-color: #EFF3F6;">
        <v-container style="padding: 45px;">
            <div flat class="d-flex align-center">
                <span style="font-size:18px" class="font-weight-bold">
                    Vessel
                </span>
                <v-spacer>
                </v-spacer>
                <v-btn icon flat color="transparent"><v-icon>mdi-home-outline</v-icon></v-btn>
                <v-icon>mdi-chevron-right</v-icon> <v-btn style="font-size:14px" variant="text">Vessel</v-btn>
            </div>
            <v-card class="pa-5">
                <div class="d-flex justify-end">
                    <v-sheet class="d-flex" width="500">
                        <span class="mr-2 mt-3" style="font-size:17px">show</span>
                        <v-select class="mr-2" :items="items" label="" variant="outlined" style="max-width:100px;"
                            density="comfortable"></v-select>
                        <v-text-field variant="outlined" filled label="Search" prepend-inner-icon="mdi-magnify"
                            density="comfortable"></v-text-field>
                    </v-sheet>
                </div>
                <table-lite style="position:relative" :is-static-mode="false" :is-slot-mode="true" :is-loading="table.isLoading"
                    :columns="table.columns" :rows="table.rows" :total="table.totalRecordCount"
                    :sortable="table.sortable" @rowClicked="rowClicked" @return-checked-rows="updateCheckedRows"
                    :has-checkbox="true" :is-re-search="table.isReSearch" :rowClasses="table.rowClasses"
                    :messages="table.messages" @do-search="doSearch" @is-finished="tableLoadingFinish">
                </table-lite>
            </v-card>
        </v-container>
    </div>
</template>

<script>
/**
*
*  Show controls example
*
*  @author  M Atif
*  @email   atif@starzdev.com
*  @website https://websengineer.me/
*
*/
import { reactive, ref, defineComponent, computed } from "vue";
import { useRoute } from 'vue-router'
import TableLite from "@/components/TableLite.vue";

const route = useRoute()
export default defineComponent({
    name: "App",
    components: { TableLite },
    setup() {
        const data = reactive([
            {
                ShipName: "LAS PALMAS",
                Imo: "2991891",
                Owner: "ebkim",
                Type: "BULKER",
                Class: "KR LR",
                Specification: "3000x2 Set(s)",
                DateofDelivery: "2022-05-18",
                LastReceiveDate: "2022-12-06",
            },
            {
                ShipName: "ELECTRA",
                Imo: "3587921",
                Owner: "ebkim",
                Type: "BULKER",
                Class: "KR LR",
                Specification: "3000x2 Set(s)",
                DateofDelivery: "2022-05-28",
                LastReceiveDate: "2022-12-05",
            },
            {
                ShipName: "BUSAN PIONEER",
                Imo: "7392471",
                Owner: "ebkim",
                Type: "TANKER",
                Class: "KR LR",
                Specification: "3000x2 Set(s)",
                DateofDelivery: "2022-06-07",
                LastReceiveDate: "2022-12-06",
            },
            {
                ShipName: "ADONIS",
                Imo: "1358395",
                Owner: "ebkim",
                Type: "CONTAINER",
                Class: "KR LR",
                Specification: "3000x2 Set(s)",
                DateofDelivery: "2022-06-14",
                LastReceiveDate: "2022-12-06",
            },
            {
                ShipName: "ebkim Bulker",
                Imo: "9999999",
                Owner: "ebkim",
                Type: "BULKER",
                Class: "KR LR",
                Specification: "3000x2 Set(s)",
                DateofDelivery: "2018-04-15",
                LastReceiveDate: "2022-03-23",
            },
            {
                ShipName: "ebkim Bulker",
                Imo: "9999999",
                Owner: "ebkim",
                Type: "BULKER",
                Class: "KR LR",
                Specification: "3000x2 Set(s)",
                DateofDelivery: "2018-04-15",
                LastReceiveDate: "2022-03-23",
            },
            {
                ShipName: "ebkim Bulker",
                Imo: "9999999",
                Owner: "ebkim",
                Type: "BULKER",
                Class: "KR LR",
                Specification: "3000x2 Set(s)",
                DateofDelivery: "2018-04-15",
                LastReceiveDate: "2022-03-23",
            },
        ]);
        const table = reactive({
            isLoading: false,
            columns: [
                {
                    label: "Ship Name",
                    field: "ShipName",
                    width: "8%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Imo",
                    field: "Imo",
                    width: "8%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Owner",
                    field: "Owner",
                    width: "7%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Type",
                    field: "Type",
                    width: "8%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Class",
                    field: "Class",
                    width: "1%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Specification",
                    field: "Specification",
                    width: "10%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "DateofDelivery",
                    field: "DateofDelivery",
                    width: "10%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "LastReceiveDate",
                    field: "LastReceiveDate",
                    width: "10%",
                    sortable: true,
                    isKey: true,
                },
                {
                    label: "Report",
                    field: "icon",
                    width: "9%",
                    sortable: true,
                    isKey: true,
                    display: function (row) {
                        return (
                            `<v-btn type="button" data-id="${row.id}" class="quickBtn1" style="padding: 10px; border: 1px #0054D1 solid; border-radius:5px; color:#0054D1; margin-right: 5px" ><a href="/monthlyReport" style="text-decoration: none; color:#0054D1;">Monthly</a></v-btn>
                    <v-btn type="button" data-id="${row.id}" class="quickBtn1" style="padding: 10px; border: 1px #0054D1 solid; border-radius:5px; color:#0054D1;" ><a href="/dailyReport" style="text-decoration: none; color:#0054D1;">Daily</a></v-btn>`
                        );

                    }
                },
            ],
            rows: data,
            totalRecordCount: computed(() => {
                return table.rows.length;
            }),
            sortable: {
                order: "name",
                sort: "asc",
            },
        });
        const onClickAway = () => {
            openModel.value = !openModel.value;
            clickedRow.value = !clickedRow.value;
        };
        let openModel = ref(false);
        let App = ref("");
        let allSubs = ref("");
        let extSubs = ref("");
        let marks = ref("");
        let clickedRow = ref("");
        const rowClicked = (row) => {
            if (clickedRow.value) {
                row.showEdit = !row.showEdit;
                openModel.value = !openModel.value;
                App.value = row.name;
                allSubs.value = row.allData.allSubjects;
                extSubs.value = row.allData.extSubs;
                marks.value = row.allData.marks;
            }
        };
        let deleteCurrentRow = (row) => {
            data.splice(data.indexOf(row), 1);
        };
        return {
            table,
            openModel,
            App,
            allSubs,
            extSubs,
            marks,
            onClickAway,
            clickedRow,
            rowClicked,
            deleteCurrentRow,
        };
    },
});

</script>

<style scoped>
.vtl-checkbox-th {
    width: 1%;
}

::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
    height: 50px;
    color: #101523;
    background-color: #EFF3F6;
    border-width: 2px 0px 0px 0px;
    border-color: #0054D1;
}

::v-deep(.vtl-table td) {
    border: none;
}

::v-deep(.vtl-table tr) {
    border: #eeeeee 1px solid;
}

::v-deep(.vtl-paging-info) {
    display: none;
    color: #0054D1;
}

::v-deep(.vtl-paging-count-dropdown),
::v-deep(.vtl-paging-page-dropdown) {
    display: none;
}

::v-deep(.vtl-paging-count-label),
::v-deep(.vtl-paging-page-label) {
    display: none;
    color: #0054D1;
}

::v-deep(.vtl-paging-pagination-page-link) {
    color: black;
    font-weight: 800;
    border: none;
}

::v-deep(.dataTables_paginate) {
    display: flex;
    justify-content: center;
}

.quickBtn {
    margin-right: 5px;
    border: 1px black solid;
}
</style>