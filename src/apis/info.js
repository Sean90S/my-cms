import API from './api'

const infoAJAX = {
    recommendedList(params) {
        return API.save('vote_api/vote/start', params)
    }
}

export default infoAJAX;