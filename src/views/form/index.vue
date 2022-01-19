<!--  -->
<template>
  <div class="form">
    <HeaderDesc
      title="Form 表单"
      desc="表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。"
      tip="全新更新"
    />
    <div class="preview">
      <Preview />
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
import HeaderDesc from "@/components/header-desc";
import Preview from "./preview";
</script>
<style lang="less" scoped>
.preview {
  width: 80%;
}
</style>
