import { getList, getData, getUrl } from '../4.ajax'

// jest.mock('../4.ajax')
jest.mock('axios')

describe('测试ajax获取数据', function () {
  it('测试getList', async () => {
    let list = await getList()
    expect(list).toEqual([1, 2, 3, 4])
  })

  it('测试getData', async () => {
    let data = await getData()
    expect(data).toEqual(['香蕉'])
  })

  it('测试getUrl', async () => {
    let url = await getUrl()
    expect(url).toEqual(['http://baidu.com'])
  })
})