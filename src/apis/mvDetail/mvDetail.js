import request from "@/utils/request";
//获取mv详细信息
export function getMVInfo(mvid) {
  return request({
    url: "/mv/detail",
    method: "get",
    params: {
      mvid,
    },
  });
}
//获取mv的url
export function getMVUrl(id) {
  return request({
    url: "/mv/url",
    method: "get",
    params: {
      id,
    },
  });
}
//获取相关mv
export function getRelateMV(mvid) {
  return request({
    url: "/simi/mv",
    method: "get",
    params: {
      mvid,
    },
  });
}
