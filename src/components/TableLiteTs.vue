<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div class="vtl vtl-card">
    <div class="vtl-card-title" v-if="title">{{ title }}</div>
    <div class="vtl-card-body">
      <div class="vtl-row">
        <div
          class="col-sm-12"
          :class="{
            'fixed-first-column': isFixedFirstColumn,
            'fixed-first-second-column': isFixedFirstColumn && hasCheckbox,
          }"
        >
          <div v-if="isLoading" class="vtl-loading-mask">
            <div class="vtl-loading-content">
              <span style="color: white">Loading...</span>
            </div>
          </div>
          <table
            class="vtl-table vtl-table-hover vtl-table-bordered vtl-table-responsive vtl-table-responsive-sm"
            ref="localTable"
            :style="'max-height: ' + maxHeight + 'px;'"
          >
            <thead class="vtl-thead">
              <tr class="vtl-thead-tr">
                <th class="vtl-thead-th">
                  <div>
                    <input
                      type=""
                      class="vtl-thead-checkbox"
                      v-model="setting.isCheckAll"
                    />
                  </div>
                </th>
                <th
                  v-for="(col, index) in (columns as Array<any>)"
                  class="vtl-thead-th"
                  :class="col.headerClasses"
                  :key="index"
                  :style="
                    Object.assign(
                      {
                        width: col.width ? col.width : 'auto',
                      },
                      col.headerStyles
                    )
                  "
                >
                  <div
                    class="vtl-thead-column"
                    :class="{
                      'vtl-sortable': col.sortable,
                      'vtl-both': col.sortable,
                      'vtl-asc': setting.order === col.field && setting.sort === 'asc',
                      'vtl-desc': setting.order === col.field && setting.sort === 'desc',
                    }"
                    @click="col.sortable ? doSort(col.field) : false"
                  >
                    {{ col.label }}
                  </div>
                </th>
              </tr>
            </thead>
            <template v-if="rows.length > 0">
              <tbody
                v-if="isStaticMode"
                class="vtl-tbody"
                :set="(templateRows = groupingKey == '' ? [localRows] : localRows)"
              >
                <template
                  v-for="(rows, groupingIndex) in templateRows"
                  :key="groupingIndex"
                >
                  <tr v-if="groupingKey != ''" class="vtl-tbody-tr vtl-group-tr">
                    <td
                      :colspan="hasCheckbox ? columns.length + 1 : columns.length"
                      class="vtl-tbody-td vtl-group-td"
                    >
                      <div class="flex">
                        <div v-if="hasGroupToggle" class="animation">
                          <a
                            :ref="(el: any) => (toggleButtonRefs[groupingIndex] as any) = el"
                            class="cursor-pointer"
                            @click="toggleGroup(groupingIndex.toString())"
                            >???</a
                          >
                        </div>
                        <div
                          class="ml-2"
                          v-html="
                            groupingDisplay
                              ? groupingDisplay(groupingIndex)
                              : groupingIndex
                          "
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr
                    v-for="(row, i) in rows"
                    :key="row[setting.keyColumn] ? row[setting.keyColumn] : i"
                    :ref="
                      (el: any) => {
                        if (!groupingRowsRefs[groupingIndex]) {
                          groupingRowsRefs[groupingIndex] = [];
                        }
                        groupingRowsRefs[groupingIndex][i] = el;
                      }
                    "
                    :name="'vtl-group-' + groupingIndex"
                    class="vtl-tbody-tr"
                    :class="
                      typeof rowClasses === 'function' ? rowClasses(row) : rowClasses
                    "
                    @click="$emit('row-clicked', row)"
                  >
                    <td v-if="hasCheckbox" class="vtl-tbody-td">
                      <div>
                        <input
                          type=""
                          class=""
                          :ref="
                            (el: any) => {
                              (rowCheckbox as Array<HTMLElement>).push(el);
                            }
                          "
                          :value="row[setting.keyColumn]"
                          @click="checked"
                        />
                      </div>
                    </td>
                    <td
                      v-for="(col, j) in (columns as Array<any>)"
                      :key="j"
                      class="vtl-tbody-td"
                      :class="col.columnClasses"
                      :style="col.columnStyles"
                    >
                      <div v-if="col.display" v-html="col.display(row)"></div>
                      <div v-else>
                        <div v-if="setting.isSlotMode && slots[col.field]">
                          <slot :name="col.field" :value="row"></slot>
                        </div>
                        <span v-else>{{ row[col.field] }}</span>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
              <tbody
                v-else
                :set="(templateRows = groupingKey == '' ? [rows] : groupingRows)"
              >
                <template
                  v-for="(rows, groupingIndex) in templateRows"
                  :key="groupingIndex"
                >
                  <tr v-if="groupingKey != ''" class="vtl-tbody-tr vtl-group-tr">
                    <td
                      :colspan="hasCheckbox ? columns.length + 1 : columns.length"
                      class="vtl-tbody-td vtl-group-td"
                    >
                      <div class="flex">
                        <div v-if="hasGroupToggle" class="animation">
                          <a
                            :ref="(el: any) => (toggleButtonRefs[groupingIndex] as any) = el"
                            class="cursor-pointer"
                            @click="toggleGroup(groupingIndex.toString())"
                            >???</a
                          >
                        </div>
                        <div
                          class="ml-2"
                          v-html="
                            groupingDisplay
                              ? groupingDisplay(groupingIndex)
                              : groupingIndex
                          "
                        ></div>
                      </div>
                    </td>
                  </tr>
                  <tr
                    v-for="(row, i) in rows"
                    :ref="
                      (el: any) => {
                        if (!groupingRowsRefs[groupingIndex]) {
                          groupingRowsRefs[groupingIndex] = [];
                        }
                        groupingRowsRefs[groupingIndex][i] = el;
                      }
                    "
                    :name="'vtl-group-' + groupingIndex"
                    :key="row[setting.keyColumn] ? row[setting.keyColumn] : i"
                    class="vtl-tbody-tr"
                    :class="
                      typeof rowClasses === 'function' ? rowClasses(row) : rowClasses
                    "
                    @click="$emit('row-clicked', row)"
                  >
                    <td v-if="hasCheckbox" class="vtl-tbody-td">
                      <div>
                        <input
                          type=""
                          class=""
                          :ref="(el: any) => (rowCheckbox as Array<HTMLElement>).push(el)"
                          :value="row[setting.keyColumn]"
                        />
                      </div>
                    </td>
                    <td
                      v-for="(col, j) in (columns as Array<any>)"
                      :key="j"
                      class="vtl-tbody-td"
                      :class="col.columnClasses"
                      :style="col.columnStyles"
                    >
                      <div v-if="col.display" v-html="col.display(row)"></div>
                      <div v-else>
                        <div v-if="setting.isSlotMode && slots[col.field]">
                          <slot :name="col.field" :value="row"></slot>
                        </div>
                        <span v-else>{{ row[col.field] }}</span>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </template>
          </table>
        </div>
      </div>
      <div class="vtl-paging vtl-row" v-if="rows.length > 0">
        <template v-if="!setting.isHidePaging">
          <div class="vtl-paging-info col-sm-12 col-md-4">
            <div role="status" aria-live="polite">
              {{
                stringFormat(messages.pagingInfo, setting.offset, setting.limit, total)
              }}
            </div>
          </div>
          <div class="vtl-paging-change-div col-sm-12 col-md-4">
            <span class="vtl-paging-count-label">{{ messages.pageSizeChangeLabel }}</span>
            <select class="vtl-paging-count-dropdown" v-model="setting.pageSize">
              <option
                v-for="pageOption in (pageOptions as Array<pageOption>)"
                :value="pageOption.value"
                :key="pageOption.value"
              >
                {{ pageOption.text }}
              </option>
            </select>
            <span class="vtl-paging-page-label">{{ messages.gotoPageLabel }}</span>
            <select class="vtl-paging-page-dropdown" v-model="setting.page">
              <option
                v-for="n in setting.maxPage"
                :key="n"
                :value="parseInt(n.toString())"
              >
                {{ n }}
              </option>
            </select>
          </div>
          <div class="vtl-paging-pagination-div col-sm-12 col-md-4">
            <div class="dataTables_paginate">
              <ul class="vtl-paging-pagination-ul vtl-pagination">
                <li
                  class="vtl-paging-pagination-page-li vtl-paging-pagination-page-li-first page-item"
                  :class="{ disabled: setting.page <= 1 }"
                >
                  <a
                    class="vtl-paging-pagination-page-link vtl-paging-pagination-page-link-first page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                    @click="setting.page = 1"
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">First</span>
                  </a>
                </li>
                <li
                  class="vtl-paging-pagination-page-li vtl-paging-pagination-page-li-prev page-item"
                  :class="{ disabled: setting.page <= 1 }"
                >
                  <a
                    class="vtl-paging-pagination-page-link vtl-paging-pagination-page-link-prev page-link"
                    href="javascript:void(0)"
                    aria-label="Previous"
                    @click="prevPage"
                  >
                    <span aria-hidden="true">&lt;</span>
                    <span class="sr-only">Prev</span>
                  </a>
                </li>
                <li
                  class="vtl-paging-pagination-page-li vtl-paging-pagination-page-li-number page-item"
                  v-for="n in setting.paging"
                  :key="n"
                  :class="{ disabled: setting.page === n }"
                >
                  <a
                    class="vtl-paging-pagination-page-link vtl-paging-pagination-page-link-number page-link"
                    href="javascript:void(0)"
                    @click="movePage(n)"
                    >{{ n }}</a
                  >
                </li>
                <li
                  class="vtl-paging-pagination-page-li vtl-paging-pagination-page-li-next page-item"
                  :class="{ disabled: setting.page >= setting.maxPage }"
                >
                  <a
                    class="vtl-paging-pagination-page-link vtl-paging-pagination-page-link-next page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                    @click="nextPage"
                  >
                    <span aria-hidden="true">&gt;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
                <li
                  class="vtl-paging-pagination-page-li vtl-paging-pagination-page-li-last page-item"
                  :class="{ disabled: setting.page >= setting.maxPage }"
                >
                  <a
                    class="vtl-paging-pagination-page-link vtl-paging-pagination-page-link-last page-link"
                    href="javascript:void(0)"
                    aria-label="Next"
                    @click="setting.page = setting.maxPage"
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Last</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </template>
      </div>
      <div class="vtl-row" v-else>
        <div class="vtl-empty-msg col-sm-12 text-center">
          {{ messages.noDataAvailable }}
        </div>
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  onBeforeUpdate,
  nextTick,
  onMounted,
} from "vue";

interface pageOption {
  value: number;
  text: number | string;
}

interface tableSetting {
  isSlotMode: boolean;
  isCheckAll: boolean;
  isHidePaging: boolean;
  keyColumn: string;
  page: number;
  pageSize: number;
  maxPage: number;
  offset: number;
  limit: number;
  paging: Array<number>;
  order: string;
  sort: string;
  pageOptions: Array<pageOption>;
}

interface column {
  isKey: string;
  field: string;
}

export default defineComponent({
  name: "my-table",
  emits: [
    "return-checked-rows",
    "do-search",
    "is-finished",
    "get-now-page",
    "row-clicked",
    "row-toggled",
  ],
  props: {
    // ??????????????? (is data loading)
    isLoading: {
      type: Boolean,
      require: true,
    },
    // ??????????????????????????? (Whether to perform a re-query)
    isReSearch: {
      type: Boolean,
      require: true,
    },

    checkedReturnType: {
      type: String,
      default: "key",
    },
    // ?????? (title)
    title: {
      type: String,
      default: "",
    },
    // ?????????????????????????????? (Fixed first column's position)
    isFixedFirstColumn: {
      type: Boolean,
      default: false,
    },
    // ?????? (Field)
    columns: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // ?????? (data)
    rows: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // ??????????????? (data row classes)
    rowClasses: {
      type: [Array, Function],
      default: () => {
        return [];
      },
    },
    // ?????????????????? (Display the number of items on one page)
    pageSize: {
      type: Number,
      default: 10,
    },
    // ????????? (Total number of transactions)
    total: {
      type: Number,
      default: 100,
    },
    // ???????????? (Current page number)
    page: {
      type: Number,
      default: 1,
    },
    // ???????????? (Sort condition)
    sortable: {
      type: Object,
      default: () => {
        return {
          order: "id",
          sort: "asc",
        };
      },
    },
    // ???????????? (Display text)
    messages: {
      type: Object,
      default: () => {
        return {
          pagingInfo: "Showing {0}-{1} of {2}",
          pageSizeChangeLabel: "Row count:",
          gotoPageLabel: "Go to page:",
          noDataAvailable: "No data",
        };
      },
    },
    // ???????????? (Static mode(no refresh server data))
    isStaticMode: {
      type: Boolean,
      default: false,
    },
    // ???????????? (V-slot mode)
    isSlotMode: {
      type: Boolean,
      default: false,
    },
    // ???????????????????????? (Hide paging)
    isHidePaging: {
      type: Boolean,
      default: false,
    },
    // ?????????????????????????????? (Dropdown of Display the number of items on one page)
    pageOptions: {
      type: Array,
      default: () => [
        {
          value: 10,
          text: 10,
        },
        {
          value: 25,
          text: 25,
        },
        {
          value: 50,
          text: 50,
        },
      ],
    },
    // ???????????? (Key of grouping)
    groupingKey: {
      type: String,
      default: "",
    },
    // ?????????????????????????????? (Has hide group rows toggle)
    hasGroupToggle: {
      type: Boolean,
      default: false,
    },
    // ????????????????????? (Customize grouping title)
    groupingDisplay: {
      type: Function,
      default: null,
    },
    // ?????????????????? (Table's max height)
    maxHeight: {
      default: "auto",
    },
    // ?????????????????????????????? (Grouping collapsed on start)
    startCollapsed: {
      type: Boolean,
      default: false,
    },
    // ??????????????????????????? (Keep collapsed status after refresh)
    isKeepCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit, slots }) {
    let localTable = ref<HTMLElement | null>(null);

    // ????????????????????????????????????????????????????????? (Validate dropdown's values have page-size value or not)
    let tmpPageOptions = props.pageOptions as Array<pageOption>;
    let defaultPageSize =
      props.pageOptions.length > 0 ? ref(tmpPageOptions[0].value) : ref(props.pageSize);
    if (tmpPageOptions.length > 0) {
      tmpPageOptions.forEach((v: pageOption) => {
        if (
          Object.prototype.hasOwnProperty.call(v, "value") &&
          Object.prototype.hasOwnProperty.call(v, "text") &&
          props.pageSize == v.value
        ) {
          defaultPageSize.value = v.value;
        }
      });
    }

    // ???????????????????????? (Internal set value for components)
    const setting: tableSetting = reactive({
      // ????????????Slot?????? (Enable slot mode)
      isSlotMode: props.isSlotMode,
      // ???????????? (Whether to select all)
      isCheckAll: false,
      // ???????????????????????? (Hide paging)
      isHidePaging: props.isHidePaging,
      // KEY???????????? (KEY field name)
      keyColumn: computed(() => {
        let key = "";
        Object.assign(props.columns).forEach((col: column) => {
          if (col.isKey) {
            key = col.field;
          }
        });
        return key;
      }),
      // ???????????? (current page number)
      page: props.page,
      // ?????????????????? (Display count per page)
      pageSize: defaultPageSize.value,
      // ???????????? (Maximum number of pages)
      maxPage: computed(() => {
        if (props.total <= 0) {
          return 0;
        }
        let maxPage = Math.floor(props.total / setting.pageSize);
        let mod = props.total % setting.pageSize;
        if (mod > 0) {
          maxPage++;
        }
        return maxPage;
      }),
      // ?????????????????? (The starting value of the page number)
      offset: computed(() => {
        return (setting.page - 1) * setting.pageSize + 1;
      }),
      // ?????????????????? (Maximum number of pages0
      limit: computed(() => {
        let limit = setting.page * setting.pageSize;
        return props.total >= limit ? limit : props.total;
      }),
      // ???????????? (Paging array)
      paging: computed(() => {
        let startPage = setting.page - 2 <= 0 ? 1 : setting.page - 2;
        if (setting.maxPage - setting.page <= 2) {
          startPage = setting.maxPage - 4;
        }
        startPage = startPage <= 0 ? 1 : startPage;
        let pages = [];
        for (let i = startPage; i <= setting.maxPage; i++) {
          if (pages.length < 5) {
            pages.push(i);
          }
        }
        return pages;
      }),
      // ?????????????????? (Sortable for local)
      order: props.sortable.order,
      sort: props.sortable.sort,
      pageOptions: computed(() => {
        const ops: pageOption[] = [];
        props.pageOptions?.forEach((o) => {
          ops.push({
            value: (o as pageOption).value,
            text: (o as pageOption).text,
          });
        });
        return ops;
      }),
    });

    // ?????????????????? (Data rows for local)
    const localRows = computed(() => {
      // sort rows
      let rows = props.rows as Array<any>;
      // refs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/compare
      var collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base",
      });
      let sortOrder = setting.sort === "desc" ? -1 : 1;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rows.sort((a: any, b: any): number => {
        return collator.compare(a[setting.order], b[setting.order]) * sortOrder;
      });

      let result = null;
      if (props.groupingKey) {
        // If have set grouping-key create group temp data
        let tmp = {} as any;
        rows.forEach((v: any) => {
          if (!tmp[v[props.groupingKey]]) {
            tmp[v[props.groupingKey]] = [];
          }
          tmp[v[props.groupingKey]].push(v);
        });

        result = {} as any;
        for (let index = setting.offset - 1; index < setting.limit; index++) {
          result[rows[index][props.groupingKey]] = tmp[rows[index][props.groupingKey]];
        }
      } else {
        result = [];
        for (let index = setting.offset - 1; index < setting.limit; index++) {
          result.push(rows[index]);
        }
      }

      nextTick(function () {
        // ???????????????????????????????????????
        callIsFinished();
      });

      return result;
    });

    ////////////////////////////
    //
    //  Checkbox ????????????
    //  (Checkbox related operations)
    //

    // ??????Checkbox?????? (Define Checkbox reference)
    const rowCheckbox = ref([]);
    if (props.hasCheckbox) {
      /**
       * ????????????????????? (Execute before re-rendering)
       */
      onBeforeUpdate(() => {
        // ???????????????????????????????????? (Clear all values before each update)
        rowCheckbox.value = [];
      });

      /**
       * ???????????????Checkbox (Check all checkboxes for monitoring)
       */
      watch(
        () => setting.isCheckAll,
        (state: boolean) => {
          let isChecked: Array<string | unknown> = [];
          rowCheckbox.value.forEach((val: HTMLInputElement, i: number) => {
            if (val) {
              val.checked = state;
              if (val.checked) {
                if (props.checkedReturnType == "row") {
                  isChecked.push(localRows.value[i]);
                } else {
                  isChecked.push(val.value);
                }
              }
            }
          });
          // ?????????????????????????????? (Return the selected data on the screen)
          emit("return-checked-rows", isChecked);
        }
      );
    }

    /**
     * Checkbox???????????? (Checkbox click event)
     */
    const checked = (event: Event) => {
      event.stopPropagation();
      let isChecked: Array<string | unknown> = [];
      rowCheckbox.value.forEach((val: HTMLInputElement, i: number) => {
        if (val && val.checked) {
          if (props.checkedReturnType == "row") {
            isChecked.push(localRows.value[i]);
          } else {
            isChecked.push(val.value);
          }
        }
      });
      // ?????????????????????????????? (Return the selected data on the screen)
      emit("return-checked-rows", isChecked);
    };

    /**
     * ????????????????????????????????? (Clear all selected data on the screen)
     */
    const clearChecked = () => {
      rowCheckbox.value.forEach((val: HTMLInputElement) => {
        if (val && val.checked) {
          val.checked = false;
        }
      });
      // ?????????????????????????????? (Return the selected data on the screen)
      emit("return-checked-rows", []);
    };

    ////////////////////////////
    //
    //  ????????????????? ????????????
    //  (Sorting, page change, etc. related operations)
    //

    /**
     * ?????????????????? (Call execution sequencing)
     */
    const doSort = (order: string) => {
      let sort = "asc";
      if (order == setting.order) {
        // ????????????????????? (When sorting items)
        if (setting.sort == "asc") {
          sort = "desc";
        }
      }
      let offset = (setting.page - 1) * setting.pageSize;
      let limit = setting.pageSize;
      setting.order = order;
      setting.sort = sort;
      emit("do-search", offset, limit, order, sort);

      // ?????????????????????????????? (Clear the selected data on the screen)
      if (setting.isCheckAll) {
        // ?????????????????????????????? (It will be cleared when you cancel all selections)
        setting.isCheckAll = false;
      } else {
        if (props.hasCheckbox) {
          clearChecked();
        }
      }
    };

    /**
     * ???????????? (Switch page number)
     *
     * @param page      number  ?????????    (New page number)
     * @param prevPage  number  ????????????  (Current page number)
     */
    const changePage = (page: number, prevPage: number) => {
      setting.isCheckAll = false;
      let order = setting.order;
      let sort = setting.sort;
      let offset = (page - 1) * setting.pageSize;
      let limit = setting.pageSize;
      if (!props.isReSearch || page > 1 || page == prevPage) {
        // ????????????????????????????????????????????????????????? (Call query will only be executed if the page number is changed without re-query)
        emit("do-search", offset, limit, order, sort);
      }
    };
    // ?????????????????? (Monitor page switching)
    watch(() => setting.page, changePage);
    // ???????????????????????? (Monitor manual page switching)
    watch(
      () => props.page,
      (val) => {
        if (val <= 1) {
          setting.page = 1;
          emit("get-now-page", setting.page);
        } else if (val >= setting.maxPage) {
          setting.page = setting.maxPage;
          emit("get-now-page", setting.page);
        } else {
          setting.page = val;
        }
      }
    );

    /**
     * ?????????????????? (Switch display number)
     */
    const changePageSize = () => {
      if (setting.page === 1) {
        // ??????????????? changePage()?????????????????????
        changePage(setting.page, setting.page);
      } else {
        // ?????????????????????,??????????????? changePage()
        setting.page = 1;
        setting.isCheckAll = false;
      }
    };
    // ????????????????????????????????? (Monitor display number switch from component)
    watch(() => setting.pageSize, changePageSize);
    // ????????????Prop????????????????????? (Monitor display number switch from prop)
    watch(
      () => props.pageSize,
      (newPageSize) => {
        setting.pageSize = newPageSize;
      }
    );

    /**
     * ????????? (Previous page)
     */
    const prevPage = () => {
      if (setting.page == 1) {
        // ????????????????????????????????? (If it is the first page, it will not be executed)
        return false;
      }
      setting.page--;
    };

    /**
     * ????????????????????? (Move to the specified number of pages)
     */
    const movePage = (page: number) => {
      setting.page = page;
    };

    /**
     * ????????? (Next page)
     */
    const nextPage = () => {
      if (setting.page >= setting.maxPage) {
        // ????????????????????????????????????????????? (If it is equal to or greater than the maximum number of pages, no execution)
        return false;
      }
      setting.page++;
    };

    // ?????????????????? (Monitoring data changes)
    watch(
      () => props.rows,
      () => {
        if (props.isReSearch || props.isStaticMode) {
          setting.page = 1;
        }
        nextTick(function () {
          // ??????????????????????????????????????? (Return the private components after the data is rendered)
          if (!props.isStaticMode) {
            callIsFinished();
          }
        });
      }
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stringFormat = (template: string, ...args: any[]) => {
      return template.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != "undefined" ? args[number] : match;
      });
    };

    // Call ???is-finished??? Method
    const callIsFinished = () => {
      if (localTable.value) {
        let localElement = localTable.value.getElementsByClassName("is-rows-el");
        emit("is-finished", localElement);
      }
      emit("get-now-page", setting.page);
    };

    // Toggle button elements
    const toggleButtonRefs = ref<{ [key: string]: HTMLElement }>({});
    // Grouping rows
    const groupingRowsRefs = ref<{ [key: string]: Array<HTMLElement> }>({});
    // Saved toggle status
    const groupingToggleStatus = ref<{ [key: string]: boolean }>({});

    // Data rows for grouping (Default-mode only)
    const groupingRows = computed(() => {
      let result = {} as any;
      props.rows.forEach((v: any) => {
        if (!result[v[props.groupingKey]]) {
          result[v[props.groupingKey]] = [];
        }
        result[v[props.groupingKey]].push(v);
      });

      nextTick(function () {
        if (props.startCollapsed || props.isKeepCollapsed) {
          for (const [groupIndex, el] of Object.entries(toggleButtonRefs.value)) {
            if (el && el.parentElement) {
              let isOpen = !props.startCollapsed;
              if (
                props.isKeepCollapsed &&
                groupingToggleStatus.value[groupIndex] !== undefined
              ) {
                isOpen = !groupingToggleStatus.value[groupIndex];
              }
              if (
                (isOpen && el.parentElement.classList.contains("rotated-90")) ||
                (!isOpen && !el.parentElement.classList.contains("rotated-90"))
              ) {
                el.parentElement.classList.toggle("rotated-90");
              }
              if (!isOpen) {
                groupingRowsRefs.value[groupIndex].forEach((element) => {
                  if (element) {
                    element.classList.add("hidden");
                  }
                });
              }
            }
          }
        }
        callIsFinished();
      });

      return result;
    });

    /**
     * Toggle Group rows
     *
     * @param {String} groupIndex
     */
    const toggleGroup = (groupIndex: string) => {
      let targetEl = toggleButtonRefs.value[groupIndex];
      if (targetEl && targetEl.parentElement) {
        targetEl.parentElement.classList.toggle("rotated-90");
        const isClose = targetEl.parentElement.classList.contains("rotated-90");
        groupingRowsRefs.value[groupIndex].forEach((element) => {
          if (isClose) {
            element.classList.add("hidden");
          } else {
            element.classList.remove("hidden");
          }
        });
        groupingToggleStatus.value[groupIndex] = isClose;
        emit("row-toggled", groupingRows.value[groupIndex], isClose);
      }
    };

    /**
     * ????????????????????? (Mounted Event)
     */
    onMounted(() => {
      nextTick(() => {
        if (props.rows.length > 0) {
          callIsFinished();
        }
      });
    });
  },
  watch: {
    pageSize() {
      this.setting.pageSize = this.pageSize;
    },
  },
});
</script>

<style scoped>


.vtl-both {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7X QMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC");
}

.vtl-sortable {
  cursor: pointer;
  background-position: right;
  background-repeat: no-repeat;
  padding-right: 30px !important;
}

.vtl-asc {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==);
}

.vtl-desc {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII=);
}

.vtl-loading-mask {
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-flow: column;
  transition: opacity 0.3s ease;
}

.vtl-loading-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vtl-card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
}

select {
  width: auto;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  height: auto;
  padding: 0;
  margin-bottom: 0;
}

.vtl-table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
  border-collapse: collapse;
}

th {
  text-align: inherit;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}

.vtl-table-bordered thead td,
.vtl-table-bordered thead th {
  border-bottom-width: 2px;
}

.vtl-table thead th {
  vertical-align: bottom;
  color: #fff;
  background-color: #343a40;
  border-color: #454d55;
  border-bottom: 2px solid #dee2e6;
}

.vtl-table-bordered td,
.vtl-table-bordered th {
  border: 1px solid #dee2e6;
}

.vtl-table td,
.vtl-table th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
  vertical-align: middle;
}

.vtl-table-hover tbody tr:hover {
  color: #212529;
  background-color: rgba(0, 0, 0, 0.075);
}

.vtl-table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  /* -webkit-overflow-scrolling: touch; */
}

.vtl-table-responsive > .vtl-table-bordered {
  border: 0;
}

.vtl-row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.vtl-pagination {
  margin: 2px 0;
  white-space: nowrap;
  justify-content: flex-end;
  display: -ms-flexbox;
  display: flex;
  padding-left: 0;
  list-style: none;
  border-radius: 0.25rem;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  cursor: auto;
  background-color: #fff;
  border-color: #dee2e6;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.page-link {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

*,
::after,
::before {
  box-sizing: border-box;
}

.col-sm-12 {
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.text-center {
  text-align: center;
}

@media (min-width: 576px) {
  .vtl-table-responsive-sm {
    display: block;
    width: 100%;
    overflow-x: auto;
    /* -webkit-overflow-scrolling: touch; */
  }
  .vtl-table-responsive-sm > .table-bordered {
    border: 0;
  }
  .col-md-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

.vtl-table thead th {
  padding: 3px;
  position: sticky;
  top: 0;
  z-index: 1;
  background: white;
}
.vtl-table thead th:first-child {
  position: sticky;
  left: 0;
  z-index: 2;
}
.vtl-table tbody th {
  position: sticky;
  left: 0;
  background: white;
  z-index: 1;
}

.fixed-first-column {
  overflow-x: auto;
}
.fixed-first-column tr th:first-child,
.fixed-first-column tr td:first-child {
  position: sticky;
  left: 0;
}

.fixed-first-second-column tr th:nth-child(2),
.fixed-first-second-column tr td:nth-child(2) {
  position: sticky;
  left: 36px;
}

.fixed-first-column tr td:first-child,
.fixed-first-second-column tr td:nth-child(2) {
  background-color: white;
}

.flex {
  display: flex;
}
.animation {
  transform: rotate(0deg);
  transition: transform 0.3s;
}
.cursor-pointer {
  cursor: pointer;
}
.rotated-90 {
  transform: rotate(-90deg);
}
.hidden {
  display: none;
}
.ml-2 {
  margin-left: 0.5rem;
}
</style>
