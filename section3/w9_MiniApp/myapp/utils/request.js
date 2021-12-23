export const baseUrl = 'http://120.76.247.5:2002'
export const apiUrl = baseUrl + '/api'

export default function request(url){
  return new Promise((resolve,reject)=>{
      wx.request({
        url:apiUrl + url,
        success(res){
          resolve(res.data)
        },
        fail:reject
      })
    
  })
}