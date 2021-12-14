/*
    枚举类型
*/



// 200:success,400:fail,401:no access
const resData1 = {
    code:200,
    data:[],
    msg:'success'
}

// 数字枚举：从0开始递增的数字，也可以指定数字实现递增
enum Status {
    Success,    // 0,200
    Fail,       // 1,201
    NoAccess,   // 2,202
}


// 字符串枚举: 不能自动递增，必须为每个成员赋值
enum Gender {
    Male = '男',
    Female = '女',
    Unno = '未知'
} 

const resData2 = {
    code:Status.Success, // 
}

const user = {
    username:'laoxie',
    gender:Gender.Male
}