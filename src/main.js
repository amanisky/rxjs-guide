/* eslint-disable */
import { Observable, Subject } from 'rxjs'

/**
 * 1、创建一个 Observable（可观察对象）
 * 2、然后让 Observer（观察者）去订阅 Observable
 * 3、订阅以后就会执行 Observable，它会将数据一个一个的推送给订阅它的 Observer
 * 4、Observer 定义了一些方法（next、error、complete）决定了怎么样去使用 Observale 推送过来的数据
 * 
 * Observable 是数据的生产者
 * Observer 是数据的消费者
 */

//  创建一个可观察对象
let fruitesObservable = Observable.create(observer => {
  // next 方法用来将数据一个一个的传递给 Observer
  observer.next('苹果')
  observer.next('香蕉')
  observer.error(new Error('some error'))
  observer.next('橘子')

  // error 和 complete 只会执行其中一个，会中断执行（即：不会再继续传递数据了）

  // error 方法会告知 Observer 发生了错误
  // observer.error()

  // complete 方法会告知 Observer 数据传递完成
  observer.complete()
})

// 创建一个观察者
let fruitesObserver = {
  next: data => console.log(data),
  error: error => console.log(error.message),
  complete: () => console.log('完成!')
}

// 订阅
fruitesObservable.subscribe(fruitesObserver)

let searchTerms = new Subject()
searchTerms.pipe
