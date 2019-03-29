import * as types from './types'
import getters from './getters';
import Util from '@/components/util'
import state from './state'

/*const state = {
    ERROR_OK: 200,          // ajax 正常状态
    newMenuListContent: [], // 导航数据承载
};*/

const mutations = {
    /**
     * 待定
     * @param state
     */
    [types.NEWMENULIST](state) {
        state.newMenuListContent = Util.newMenuList;
        // state.constantsOption=9999
    }
}

export default {
    state,
    mutations,
    getters
}


// 只有mutation 才能改变state.  mutation 类似事件，每一个mutation都有一个类型和一个处理函数，
// 因为只有mutation 才能改变state, 所以处理函数自动会获得一个默认参数 state.。