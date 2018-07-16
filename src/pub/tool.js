export const $loading = function (...rest) {
  let msg = '正在拼命加载';
  let setting = {};
  if (rest.length) {
    typeof rest[0] === 'string' ? msg = rest[0] : setting = rest[0]
  }
  let options = Object.assign({
    lock: true,
    text: msg,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  }, setting)
  const loading = this.$loading(options);
  return loading;
}

export const $success = function (...rest) {
  let msg = '恭喜你，这是一条成功消息';
  let setting = {};
  if (rest.length) {
    typeof rest[0] === 'string' ? msg = rest[0] : setting = rest[0];
  }
  let options = Object.assign({
    showClose: true,
    message: msg,
    type: 'success'
  }, setting);
  this.$message(options);
}

export default {
  $loading,
  $success,
}