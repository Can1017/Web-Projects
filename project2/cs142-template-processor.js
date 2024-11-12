// 定义 Cs142TemplateProcessor 构造函数
function Cs142TemplateProcessor(template) {
  this.template = template;
}

// 定义 fillIn 方法
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
  // 使用正则表达式匹配 {{property}} 格式的模板占位符
  return this.template.replace(/{{(.*?)}}/g, function(_match, property) {
    // 从字典中获取属性值，如果属性不存在，则返回空字符串
    return dictionary.hasOwnProperty(property) ? dictionary[property] : '';
  });
};
