describe('测试常见的匹配器',function() {
  it('相等关系',()=>{
    expect(1+1).toBe(2) // toBe ===
    expect({}).toEqual({}) // toEqual  值相等
    expect(null).toBeNull()
    expect('ok').toBeTruthy()
  })

  it('不相等关系',()=>{
    expect(1+1).not.toBe(3)
    expect(1+1).toBeLessThan(5)
    expect(1+1).toBeGreaterThanOrEqual(1)
  })

  it('包含关系',()=>{
    expect('lovely').toContain('love')
    expect('lovely').toMatch('love')
    expect('lovely').toMatch(/love/)
  })
})