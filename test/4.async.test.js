import {getData,getDataPromise} from '../3.async'

describe('测试异步获取数据的方法',function() {
  jest.useFakeTimers()

  it.only('测试getData方法',(done)=>{ 
    getData(function(data){
      expect(data).toEqual({country:'China'})
      done()
    })
    // jest.runAllTimers() //执行所有定时器
    // jest.advanceTimersByTime(3000) // 快进 时间段内的都将执行
    jest.runOnlyPendingTimers() // 只执行当前等待队列中的定时器
  })

  it('测试getDataPromise方法',(done)=>{
    getDataPromise().then(data=>{
      expect(data).toEqual({country:'China'})
      done()
    })
  })

  // Promise 的同步写法 async + await
  it('测试getDataPromise方法',async ()=>{
    let data = await getDataPromise()
    expect(data).toEqual({country:'China'})
  })
})