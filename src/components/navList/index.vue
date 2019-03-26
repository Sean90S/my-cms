<template>
    <div class="nav-list">
        <div class="left-sidebar dis-flex">
            <ul class="sidebar-nav">
                <li class="sidebar-nav-heading">萤火商城-商业版</li>
                <li class="sidebar-nav-link" v-for="item in newMenuListData" :key="item.id">
                    <router-link :to="{ name: 'storeUserList', query: { id: item.id } }">
                        <i :class="[iconfont, sidebar, item.icon]"
                           :style="{ color: item.icon === 'icon-wxapp' ? '#36b313' : '' }"
                           v-html="item.icon === '' ? h : ''"></i>
                        {{ item.menuName }}
                    </router-link>
                </li>
            </ul>
            <!-- 子级菜单-->
            <ul class="left-sidebar-second">
                <li class="sidebar-second-title">门店管理</li>
                <li class="sidebar-second-item">
                    <!-- 三级菜单-->
                    <div class="sidebar-third-item">
                        <a href="javascript:void(0);" class="sidebar-nav-sub-title active">
                            <i class="iconfont icon-caret"></i>
                            门店管理
                        </a>
                        <ul class="sidebar-third-nav-sub">
                            <li>
                                <a class="active">
                                    门店列表
                                </a>
                            </li>
                            <li>
                                <a class="">
                                    店员管理
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- 二级菜单 -->
                    <a class="">
                        订单核销记录
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import Util from '@/components/util'
    import API from '@/apis'

    export default {
        name: "navList",
        data() {
            return {
                iconfont: 'iconfont',
                newMenuListData: [],
                sidebar: 'sidebar-nav-link-logo',
                h: `<svg class="icon sidebar-nav-link-logo" aria-hidden="true">
                        <use xlink:href="#icon-application"></use>
                    </svg>`
            }
        },
        watch: {
            $route(val) {
                console.log(val.query)
            }
        },
        methods: {
            async newMenuList() {
                this.newMenuListData = Util.newMenuList;
                let data = { theme_id: 11, user_id: 'oNsTb0rz7jEi2REvht0GvTrNvDOI' };
                const a = await API.recommendedList(data);
                console.log(a)
            }
        },
        mounted() {
            this.newMenuList()
        }
    }
</script>

<style lang="scss">

</style>