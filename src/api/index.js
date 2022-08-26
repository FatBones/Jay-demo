import MyAxios from "./MyAxios";

// 注册
export const reguser = params => {
    return MyAxios({
        method: 'POST',
        url: '/api/reguser',
        data: params
    })
}

// 登录
export const login = params => {
    return MyAxios({
        method: 'POST',
        url: '/api/login',
        data: params
    })
}   

// 获取基本信息
export const person = () => {
    return MyAxios({
        method: 'GET',
        url: '/self/person',
    })
}

// 更改密码
export const updatePsw = params => {
    return MyAxios({
        method: 'POST',
        url: '/api/updatePsw',
        data: params
    })
}

// 收藏歌曲
export const addSong = params => {
    return MyAxios({
        method: 'POST',
        url: '/self/addSong',
        data: params
    })
}

// 显示收藏歌曲
export const selectSong = () => {
    return MyAxios({
        method: 'GET',
        url: '/self/selectSong',
    })
}

// 删除收藏歌曲
export const deleteSong = params => {
    return MyAxios({
        method: 'DELETE',
        url: '/self/deleteSong',
        data: params
    })
}

// 更改用户头像
export const updateUserPic = params => {
    return MyAxios({
        method: 'POST',
        url: '/self/updateUserPic',
        data: params
    })
}