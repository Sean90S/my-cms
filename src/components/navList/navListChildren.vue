<template>
    <div class="sidebar-third-item">
        <a href="javascript:void(0);" class="sidebar-nav-sub-title active">
            <i class="iconfont icon-caret" v-if="menu.children"></i>
            {{ menu.menuName }}
        </a>
        <ul class="sidebar-third-nav-sub">
            <li>
                <a>
                    <NavListChildren v-for="item in menu.children" :key="item.id" :menu="item"></NavListChildren>
                </a> <!-- class="active" -->

            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "NavListChildren",
        computed: {
            ...mapState(['newMenuListContent'])
        },
        props: {
            menu: {
                type: Object,
                required: true
            }
        },
        mounted() {
            console.log(this.menu);
        }
    }
</script>

<style scoped>

</style>