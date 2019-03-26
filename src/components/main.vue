<template>
    <div class="Main" id="Main">
        <header class="tpl-header">
            <!-- 右侧内容 -->
            <div class="tpl-header-fluid">
                <!-- 侧边切换 -->
                <div class="am-fl tpl-header-button switch-button" >
                    <i class="iconfont icon-menufold"></i>
                </div>
                <!-- 刷新页面 -->
                <div class="am-fl tpl-header-button refresh-button">
                    <i class="iconfont icon-refresh"></i>
                </div>
                <!-- 其它功能-->
                <div class="am-fr tpl-header-navbar">
                    <ul>
                        <!-- 商业版介绍 -->
                        <li class="am-text-sm tpl-header-navbar-welcome">
                            <a href="index.php?s=/pro" style="font-size: 1.3rem; color: #166bef">
                                商业版介绍
                            </a>
                        </li>
                        <!-- 欢迎语 -->
                        <li class="am-text-sm tpl-header-navbar-welcome">
                            <a href="index.php?s=/store/store.user/renew">欢迎你，<span>admin</span>
                            </a>
                        </li>
                        <!-- 退出 -->
                        <li class="am-text-sm">
                            <a href="javascript:void(0);">
                                <i class="iconfont icon-tuichu"></i> 退出
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <NavList></NavList>
        <StoreUserList></StoreUserList>
    </div>
</template>

<script>
    import NavList from '@/components/navList'
    import StoreUserList from '@/components/storeUserList'


    export default {
        name: "Main",
        data() {
            return {
                navigatorTronsfrom: false
            }
        },
        components: {
            NavList,
            StoreUserList
        },
        methods: {
            navigatorClick() {

            }
        }
    }
</script>

<style scoped>

</style>