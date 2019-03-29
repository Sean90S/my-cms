<template>
    <div>
        <div class="left-sidebar dis-flex">
            <ul class="sidebar-nav">
                <li class="sidebar-nav-heading">萤火商城-商业版</li>
                <li class="sidebar-nav-link" v-for="item in newMenuListContent" :key="item.id">
                    <router-link :to="{ name: 'storeUserList', query: { id: item.id, blood: item.children.length !== 0 } }">
                        <i :class="[iconfont, sidebar, item.icon]"
                           :style="{ color: item.icon === 'icon-wxapp' ? '#36b313' : '' }"
                           v-html="item.icon === '' ? h : ''"></i>
                        {{ item.menuName }}
                    </router-link>
                </li>
            </ul>
            <ul class="left-sidebar-second" v-if="newMenuListChildrenData.length != 0">
                <li class="sidebar-second-title">{{ newMenuListTitle }}</li>
                <li class="sidebar-second-item" v-for="item in newMenuListChildrenData" :key="item.id">
                    <!-- 三级菜单 -->
                    <!--<NavListChildren v-for="item in newMenuListChildrenData" :key="item.id" :menu="item"></NavListChildren>-->
                    <div class="sidebar-third-item">
                        <a href="javascript:void(0);" class="sidebar-nav-sub-title active" >
                            <i class="iconfont icon-caret" v-if="item.children"></i>
                            {{ item.menuName }}
                        </a>
                        <ul class="sidebar-third-nav-sub" v-if="newMenuListHiddle">
                            <li v-for="items in item.children" :key="items.id">
                                <a>{{ items.menuName }}</a> <!-- class="active" -->
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'
    import Util from '@/components/util'

    export default {
        name: "navList",
        data() {
            return {
                iconfont: 'iconfont',
                newMenuListData: [],
                newMenuListTitle: '',
                newMenuListHiddle: true,
                newMenuListChildrenData: [],
                sidebar: 'sidebar-nav-link-logo',
                h: `<svg class="icon sidebar-nav-link-logo" aria-hidden="true">
                        <use xlink:href="#icon-application"></use>
                    </svg>`
            }
        },
        watch: {
            $route(val) {
                this.newMenuListContent.map(item => {
                    if (item.id === val.query.id){
                        this.newMenuListTitle = item.menuName
                        this.newMenuListChildrenData = item.children
                    }
                    this.$emit('navMenuShow', this.newMenuListChildrenData.length !== 0);
                })
            }
        },
        computed: {
            ...mapGetters(['newMenuListContent'])
        },
        methods: {
            newMenuListHiddleClick(i) {
                this.newMenuListChildrenData.findIndex((value, index) => {
                    if(index === i){
                        this.newMenuListHiddle = !this.newMenuListHiddle;
                    }
                })
            },
            ...mapActions(['newMenuList'])
        },
        mounted() {
            this.newMenuListData = Util.newMenuList;
            this.newMenuListChildrenData = this.newMenuListData[0].children;
            this.newMenuListTitle = this.newMenuListData[0].menuName
            this.$emit('navMenuShow', this.newMenuListChildrenData.length !== 0);
            this.newMenuList()
        }
    }
</script>

<style lang="scss">

</style>