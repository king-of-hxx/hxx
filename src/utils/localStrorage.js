//歌曲id数组的数据持久化
const cookie = "cookie";
const profile = "currentUserInfo";
const musicIds = "musicIds";
const songId = "songId";
// const currentMusicUrl = "currentMusicUrl";
const searchKeywords = "searchKeywords";
const mvInfo = "mvInfo";
const mvurl = "mvurl";
const mvs = "mvs";
//存token
export function setCookie(Cookie) {
  return localStorage.setItem(cookie, Cookie);
}

export function getCookie() {
  return localStorage.getItem(cookie);
}
//存个人信息
export function setProfile(profileobj) {
  if (profileobj != undefined || profileobj != null) {
    return localStorage.setItem(profile, JSON.stringify(profileobj));
  }
  return;
}

export function getProfile() {
  if (
    localStorage.getItem(profile) != undefined ||
    localStorage.getItem(profile) != null
  ) {
    return JSON.parse(localStorage.getItem(profile));
  }
  return;
}
//存音乐id数组
export function setLocalStrorage(ids) {
  return localStorage.setItem(musicIds, JSON.stringify(ids));
}

export function getLocalStrorage() {
  return JSON.parse(localStorage.getItem(musicIds));
}
//存歌单id
export function setsongId(id) {
  return localStorage.setItem(songId, id);
}

export function getsongId() {
  return localStorage.getItem(songId);
}
// //存缓存下来的音乐url
// export function setCurrentMusicUrl(url) {
//   return localStorage.setItem(currentMusicUrl, url);
// }

// export function getCurrentMusicUrl() {
//   return localStorage.getItem(currentMusicUrl);
// }
//存搜索歌曲的关键字
export function setSearchKeywords(keywords) {
  return localStorage.setItem(searchKeywords, keywords);
}

export function getSearchKeywords() {
  return localStorage.getItem(searchKeywords);
}
//存mv的详细信息
export function setMvInfo(Info) {
  return localStorage.setItem(mvInfo, JSON.stringify(Info));
}

export function getMvInfo() {
  return JSON.parse(localStorage.getItem(mvInfo));
}
//存mv的url地址
export function setMvurl(url) {
  return localStorage.setItem(mvurl, url);
}

export function getMvurl() {
  return localStorage.getItem(mvurl);
}
// 存相似mv的数组
export function setMvArr(arr) {
  return localStorage.setItem(mvs, JSON.stringify(arr));
}

export function getMvArr() {
  return JSON.parse(localStorage.getItem(mvs));
}
