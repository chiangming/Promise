// https://www.jianshu.com/p/9d6995bf771f
class Promise {
  constructor(fn) {
    this.value = ''
    this.succallbacks = []
    this.failcallbacks = [];
    try {
      fn.call(this, this.resolve.bind(this), this.reject.bind(this))
    } catch (e) {
      this.reject.call(this, e)
    }
  }

  resolve(value) {
    this.value = value
    setTimeout(() => {
      this.succallbacks.forEach((callback) => {
        callback(value);
      })
      return this
    }, 0)
  }

  reject(value) {
    this.value = value
    setTimeout(() => {
      console.log(this)
      this.failcallbacks.forEach((callback) => {
        callback(value);
      })
      return this
    }, 0)
  }

  then(onFullfilled, onRejected) {
    this.succallbacks.push(onFullfilled)
    onRejected ? this.failcallbacks.push(onRejected) : void 0
    return this
  }

  catch (onRejected) {
    this.failcallbacks.push(onRejected)
    return this
  }
}

//test
var fn = new Promise((resolve, reject) => {
  console.log(111)
  resolve(333)
  throw new Error('1111111')
  console.log(222)
})

fn.then((val) => {
  console.log(val)
}).catch(e => {
  console.log("????" + 'e')
})