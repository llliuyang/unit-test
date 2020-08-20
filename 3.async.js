export function getData(cb){
  setTimeout(() => {
    cb({country:'China'})
  }, 3000);
}

export function getDataPromise(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve({country:'China'})
    }, 3000);
  })
}