/*data中的每个属性都会被创建一个dep对象。 */
class Dep {
  constructor() {
    // 这个数组就是专门用于管理某个属性所有的观察者对象的s
    //存放观察者
    this.subs = [];
  }
  // 订阅观察的方法
  addSub(watcher) {
    this.subs.push(watcher);
  }
  // 发布订阅的方法
  notify() {
    this.subs.forEach((watcher) => {
      watcher.update();
    });
  }
}

export default Dep;
