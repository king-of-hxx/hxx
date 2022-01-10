import request from "@/utils/request"
export function getMusicUrl(id) {
    return request({
        url: '/song/url',
        params: {
            id: id
        }
    })
}
export function getMusicInfo(ids) {
    return request({
        url: '/song/detail',
        params: {
            ids: ids
        }
    })
}