/**
 * 命名空间:namespace
 * 命名空间与模块化结合
 */

export namespace HomePage{
    export const title = '首页'
    export function getData(url:string):void{

    }
}

export namespace LoginPage{
    export const title = '登录'
}

HomePage.title
HomePage.getData('/list')

LoginPage