<template>
  <div class="page-content">
    <YgTable
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :selectionChange="selectionChange"
    >
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" @click="handleNewClick"> 新建用户 </el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #handler="scope">
        <div class="handle-btns">
          <el-button
            icon="el-icon-edit"
            type="text"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            icon="el-icon-delete"
            type="text"
            @click="handleDeleteClick(scope.row)"
            >删除</el-button
          >
        </div>
      </template>

      <!-- 在page-content中动态插入剩余的插槽 -->
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </YgTable>
  </div>
</template>

<script>
import { defineComponent, computed, ref, watch } from "vue";

import YgTable from "./table.vue";

export default defineComponent({
  components: {
    YgTable,
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true,
    },
    pageName: {
      type: String,
      required: true,
    },
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    let dataList = ref([
      {
        id: 1,
        name: "菜单1",
        type: 1,
        createAt: 12345,
        children: [{ id: "1-1", name: "菜单1", type: 1, createAt: 12345 }],
      },
      { id: 2, name: "菜单2", type: 1, createAt: 12345 },
    ]);
    let dataCount = ref(50); //分页数量
    const pageInfo = ref({ currentPage: 1, pageSize: 10 });

    watch(pageInfo, () => getPageData());

    // 2.发送网络请求
    const getPageData = (queryInfo) => {};

    // 4.获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter((item) => {
      //   if (item.slotName === "status") return false;
      return true;
    });

    // 5.删除/编辑/新建操作
    const handleDeleteClick = (item) => {};
    const handleNewClick = () => {
      emit("newBtnClick");
    };
    const handleEditClick = (item) => {
      emit("editBtnClick", item);
    };
    const selectionChange = (i) => {
      console.log(i);
    };

    return {
      dataList,
      getPageData,
      dataCount,
      pageInfo,
      otherPropSlots,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      selectionChange,
    };
  },
});
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
