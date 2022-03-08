import CompilerUtil from "./CompilerUtil";
import Dep from "./Dep";


//watcher(观察者又称订阅者)
/*在解析器解析el进行视图初始化的时候，
如果有地方用到data中的某个属性a，则该地方就会创建 出一个自己的watcher
放入到属性a的dep观察者数组中*/
class Watcher {
  constructor(vm, attr, cb) {
    this.vm = vm;
    this.attr = attr;
    this.cb = cb;

    // 在创建观察者对象的时候就去获取当前的旧值
    this.oldValue = this.getOldValue();
  }

  getOldValue() {
    Dep.target = this;
    let oldValue = CompilerUtil.getValue(this.vm, this.attr);
    Dep.target = null;
    return oldValue;
  }

  // 定义一个更新的方法, 用于判断新值和旧值是否相同
  update() {
    let newValue = CompilerUtil.getValue(this.vm, this.attr);
    if (this.oldValue !== newValue) {
      this.cb(newValue, this.oldValue);
    }
  }
}

export default Watcher;
