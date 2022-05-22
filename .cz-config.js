module.exports = {
  types: [
    { value: "feat", name: "feat: 添加新特性" },
    { value: "fix", name: "fix: 修复bug" },
    { value: "docs", name: "docs: 仅仅修改了文档" },
    {
      value: "style",
      name: "style: 仅仅修改了空格、格式缩进、都好等等，不改变代码逻辑",
    },
    { value: "refactor", name: "refactor: 代码重构，没有加新功能或者修复bug" },
    { value: "perf", name: "perf: 增加代码进行性能测试" },
    { value: "test", name: "test: 增加测试用例" },
    { value: "chore", name: "chore: 改变构建流程、或者增加依赖库、工具等" },
  ],
  messages: {
    type: "请选择提交类型:",
    // customScope:'请输入修改范围(可选):',
    customScope: "按规范不需要填写直接回车跳过(Enter):",
    subject: "请简要描述提交(必填):",
    body: "请输入详细描述(可选):",
    footer: "请输入要关闭的issue(可选):",
    confirmCommit: "确认要使用以上信息提交? (y/n)",
  },
  // 跳过步骤
  skipQuestions: ["body", "footer"],
  // 默认长度72
  subjectLimit: 72,
};
