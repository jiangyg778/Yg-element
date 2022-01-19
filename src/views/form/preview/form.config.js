export const searchFormConfig = {
  labelWidth: "120px",
  itemStyle: {
    padding: "10px 40px",
  },
  btnSettings: ["确定啊"],
  colLayout: { span: 8 },
  formItems: [
    {
      field: "id",
      type: "input",
      label: "用户ID",
      placeholder: "请输入id",
      rules: [
        {
          required: true,
          message: "请输入用户ID",
          trigger: "blur",
        },
      ],
    },
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
      rules: [{ required: true, message: "请输入真实姓名", trigger: "blur" }],
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        { title: "启用", value: 1 },
        { title: "禁用", value: 0 },
      ],
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
      },
    },
  ],
};
