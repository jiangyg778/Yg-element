<!--  -->
<template>
  <div class="form">
    <HeaderDesc
      title="Form 表单"
      desc="表单包含 输入框, 单选框, 下拉选择, 多选框 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。"
      tip="基于Element 快速配置生成Form表单"
    />
    <div class="preview">
      <Preview />
    </div>
    <h2>组件使用</h2>
    <div class="todo" v-highlight>
      <pre><code class="html">{{toUse}}</code></pre>
    </div>
    <h2>配置信息</h2>
    <div class="todo" v-highlight>
      <pre><code class="html">{{toConfigCode}}</code></pre>
    </div>
  </div>
</template>

<script setup>
import {} from "vue";
import HeaderDesc from "@/components/header-desc";
import Preview from "./preview";
import { toUse, toConfigCode } from "./code";
</script>
<style lang="less" scoped>
.preview {
  width: 80%;
}
.todo {
  width: 80%;
  font-size: 15px;
  max-height: 500px;
  overflow: auto;
  position: relative;
  z-index: 1;
  margin: 0;
  padding: 5px;
  background: transparent;
  border: 1px solid #c0c4cc;
}
</style>
