import Mork from 'mockjs'

Mork.mock('/mork/cls/common/newMenuList', {
    code: 1000,
    data: [
        {
            id: '1', icon: 'icon-guanliyuan', menuName: '管理员', children: [
                {id: '1-1', menuName: '管理员列表'},
                {id: '1-2', menuName: '角色管理'}
            ]

        },
        {
            id: '2', icon: 'icon-goods', menuName: '商品管理', children: [
                {id: '2-1', menuName: '商品列表'},
                {id: '2-2', menuName: '商品分类'},
                {id: '2-3', menuName: '商品评价'},
            ]
        },
        {
            id: '3', icon: 'icon-order', menuName: '订单管理', children: [
                {id: '3-1', menuName: '全部订单'},
                {id: '3-2', menuName: '待发货'},
                {id: '3-3', menuName: '待收货'},
                {id: '3-4', menuName: '待付款'},
                {id: '3-5', menuName: '已完成'},
                {id: '3-6', menuName: '已取消'},
                {id: '3-7', menuName: '售货管理'},
            ]
        },
        {
            id: '4', icon: 'icon-user', menuName: '用户管理', children: []
        },
        {
            id: '5', icon: 'icon-shop', menuName: '门店管理', children: [
                {
                    id: '5-1', menuName: '门店管理',
                    children: [
                        {id: '5-1-1', menuName: '门店列表'},
                        {id: '5-1-2', menuName: '店员管理'},
                    ]
                },
                {
                    id: '5-2', menuName: '订单核销记录',
                }
            ]
        },
        {
            id: '6', icon: 'icon-wenzhang', menuName: '内容管理', children: [
                {
                    id: '6-1', menuName: '文章管理',
                    children: [
                        {id: '6-1-1', menuName: '文章列表'},
                        {id: '6-1-2', menuName: '文章分类'},
                    ]
                }
            ]

        },
        {
            id: '7', icon: 'icon-marketing', menuName: '营销设置', children: [
                {
                    id: '7-1', menuName: '优惠券',
                    children: [
                        {id: '7-1-1', menuName: '优惠券列表'},
                        {id: '7-1-2', menuName: '领取记录'},
                        {id: '7-1-3', menuName: '满额包邮'},
                    ]
                }
            ]
        },
        {
            id: '8', icon: 'icon-wxapp', menuName: '小程序', children: [
                {id: '8-1', menuName: '小程序设置'},
                {
                    id: '8-2', menuName: '页面管理',
                    children: [
                        {id: '8-1-1', menuName: '页面设计'},
                        {id: '8-1-2', menuName: '分类模块'},
                        {id: '8-1-3', menuName: '页面链接'},
                        {id: '8-1-4', menuName: '帮助中心'},
                    ]
                },
            ]

        },
        {
            id: '9', icon: 'icon-setting', menuName: '设置', children: [
                {id: '9-1', menuName: '商城设置'},
                {id: '9-2', menuName: '交易设置'},
                {id: '9-3', menuName: '配送设置'},
                {id: '9-4', menuName: '物流公司'},
                {id: '9-5', menuName: '酸辛通知'},
                {id: '9-6', menuName: '模版消息'},
                {id: '9-7', menuName: '退货地址'},
                {id: '9-8', menuName: '上传设置'},
                {
                    id: '9-9', menuName: '小票打印机', children: [
                        {id: '9-9-1', menuName: '打印机管理'},
                        {id: '9-9-2', menuName: '打印设置'}
                    ]
                },
                {
                    id: '9-10', menuName: '其他', children: [
                        {id: '9-10-1', menuName: '清楚缓存'}
                    ]
                },
            ]
        }
    ]
})

export default Mork