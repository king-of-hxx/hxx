import request from "@/utils/request";
export function getFindMusicBanner() {
  return request({
    url: "/banner",
  });
}
export function getFindMusicRecommend() {
  return request({
    url: "/personalized",
    params: {
      limit: 10,
    },
  });
}
export function getExclusiveMusic() {
  return request({
    url: "/personalized/privatecontent/list",
    params: {
      limit: 3,
    },
  });
}
export function getLatestMusic() {
  return request({
    url: "/personalized/newsong",
    params: {
      limit: 12,
    },
  });
}
export function getRecommendMV() {
  return request({
    url: "/personalized/mv",
    params: {
      limit: 2,
    },
  });
}
