import request from "@/utils/request";
//获取歌曲的url地址
export function getMusicUrl(id) {
  return request({
    url: "/song/url",
    method: "get",
    params: {
      id,
    },
  });
}
//获取歌曲的详细信息
export function getMusicInfo(ids) {
  return request({
    url: "/song/detail",
    method: "get",
    params: {
      ids,
    },
  });
}
//获取每个歌单里面的歌曲
export function getSongList(id) {
  return request({
    url: "/playlist/detail",
    method: "get",
    params: {
      id,
    },
  });
}
//歌单收藏者
export function getSongSubscribersList(id, limit, offset) {
  return request({
    url: "/playlist/subscribers",
    method: "get",
    params: {
      id,
      limit,
      offset,
    },
  });
}
