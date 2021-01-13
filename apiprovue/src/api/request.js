import axios from '.'  //表示同级的index

export function getList(names,age){  //备注好是获取啥的接口
    return axios({
        methods:"get",
        url:`/home/page/${names}/${age}`,
        // data:{name:names,age:age},

    })
}