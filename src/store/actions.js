import * as types from './types'
// actions讲解：actions可以理解为通过将mutations里面处理数据的方法变成可异步的处理数据的方法，简单的说就是异步操作数据
export default {
    /**
     * 导航数据(待定)
     * @param context
     */
    newMenuList: (context) => {
        context.commit(types.NEWMENULIST)
    }
}