import request from "@/utils/request";

//获取用户的我喜欢列表
export function getMyLoveMusic(uid) {
  return request({
    url: "/likelist",
    method: "get",
    params: {
      uid,
    },
  });
}
//获取用户的歌单详情
export function getUserSong(uid) {
  return request({
    url: "/user/playlist",
    method: "get",
    params: {
      uid,
    },
  });
}
