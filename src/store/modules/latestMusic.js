import {
    getMusicUrl,
    getMusicInfo
} from "@/apis/getLatestMusic"
export default {
    namespaced: true,
    state: {
        latestMusicUrl: '',
        picUrl: '',
        songName: '',
        artistsName: ''
    },
    getters: {

    },
    mutations: {
        GetLatestMusicUrl(state, latestMusicUrl) {
            state.latestMusicUrl = latestMusicUrl
        },
        GetLatestMusicInfo(state, object) {
            state.picUrl = object.al.picUrl
            state.songName = object.name
            state.artistsName = object.ar[0].name
        }
    },
    actions: {
        getLatestMusicUrl(context, id) {
            getMusicUrl(id).then(res => {
                context.commit('GetLatestMusicUrl', res.data.data[0].url)
            })
        },
        getLatestMusicInfo(context, ids) {
            getMusicInfo(ids).then(res => {
                context.commit('GetLatestMusicInfo', res.data.songs[0])
                localStorage.setItem("latestMusicInfo", res.data.songs[0])
            })
        }
    }
}