//歌曲id数组的数据持久化
const token = "token";
const profile = "currentUserInfo";
const musicIds = "musicIds";
const songId = "songId";
const currentMusicUrl = "currentMusicUrl";
//存token
export function setToken(Token) {
  return localStorage.setItem(token, Token);
}

export function getToken() {
  return localStorage.getItem(token);
}
//存个人信息
export function setProfile(profileobj) {
  return localStorage.setItem(profile, JSON.stringify(profileobj));
}

export function getProfile() {
  return JSON.parse(localStorage.getItem(profile));
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
//存缓存下来的音乐url
export function setCurrentMusicUrl(url) {
  return localStorage.setItem(currentMusicUrl, url);
}

export function getCurrentMusicUrl() {
  return localStorage.getItem(currentMusicUrl);
}
