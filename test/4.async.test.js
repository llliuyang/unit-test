import {getData,getDataPromise} from '../3.async'

describe('测试异步获取数据的方法',function() {
  it('测试getData方法',(done)=>{ 
    getData(function(data){
      expect(data).toEqual({country:'China'})
      done()
    })
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