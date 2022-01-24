import request from "@/utils/request";
//歌单评论
export function getCommentPlayList(id, limit) {
  return request({
    url: "/comment/playlist",
    method: "get",
    params: {
      id,
      limit,
    },
  });
}
//更多精彩评论
export function getMoreGreatComment(id, type, limit) {
  return request({
    url: "/comment/hot",
    method: "get",
    params: {
      id,
      type,
      limit,
    },
  });
}
