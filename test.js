const Promise = require('./promise')
  // 测试
let test = function(n) {
  return new Promise((resolve, reject) => {
    if (n > 0) {
      setTimeout(() => {
        resolve(n)
      })
    } else {
      setTimeout(() => {
        reject(n)
      })
    }
  })
}

test(1).then(val => {
  console.log(val) //1
  return val + 1
}).then(val => {
  console.log(val) //2
  return test(0)
}).then(val => {
  console.log(val)
}).catch(err => {
  console.log(err) //0
})

let p1 = Promise.resolve(1)
let p2 = Promise.resolve(2)
let p3 = Promise.resolve(3)
Promise.all([p1, p2, p3]).then(res => {
  console.log(res)
})
Promise.race([p1, p2, p3]).then(res => {
  console.log(res)
})

Promise.all([]).then(res => {
  console.log(res)
})
Promise.race([]).then(res => {
  console.log(res)
})