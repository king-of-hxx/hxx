import request from "@/utils/request";
export function getPhoneLogin(keywords, limit, type) {
  return request({
    url: "/search",
    method: "get",
    data: {
      keywords,
      limit,
      type,
    },
  });
}
