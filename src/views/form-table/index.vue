<!--  -->
<template>
  <div class="form">
    <HeaderDesc
      title="Form-Table 表单"
      desc="用于结合form和table 提供布局和表单。"
      tip="基于Element 快速配置生成Form-Table表单"
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
