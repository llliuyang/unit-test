import { removeNode } from '../2.dom'

describe('测试dom库', () => {
  it('测试节点能否被移除',()=>{
    let div = document.createElement('div')
    div.id = 'oDiv'
    document.body.appendChild(div)
    let el = document.getElementById('oDiv')
    expect(el).not.toBeNull()
    removeNode(el)
    el = document.getElementById('oDiv')
    expect(el).toBeNull()
  })
})