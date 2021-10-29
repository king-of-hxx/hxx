import request from "@/utils/request"
export function getPhoneLogin(phone, password) {
    return request({
        url: '/login/cellphone',
        method: "post",
        data: {
            phone,
            password
        }
    })
}

export function getPhoneLoginOut() {
    return request({
        url: '/logout'
    })
}

export function getPhoneLoginRefresh() {
    return request({
        url: '/login/refresh'
    })
}