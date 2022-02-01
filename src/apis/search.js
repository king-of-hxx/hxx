import request from "@/utils/request";
export function searchMusic(keywords, limit, type) {
  return request({
    url: "/search",
    method: "get",
    params: {
      keywords,
      limit,
      type,
    },
  });
}
//热搜详细列表
export function hotSearchMusic() {
  return request({
    url: "/search/hot/detail",
    method: "get",
  });
}
