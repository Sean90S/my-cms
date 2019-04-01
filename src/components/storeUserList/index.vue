<template>
    <div :class="blood ? 'tpl-content-wrapper' : 'tpl-content-wrapper no-sidebar-second'">
        {{ newMenuListContent }}
        <div class="row-content am-cf">
            <div class="row">
                <div class="am-u-sm-12 am-u-md-12 am-u-lg-12">
                    <div class="widget am-cf">
                        <div class="widget-head am-cf">
                            <div class="widget-title a m-cf">管理员列表</div>
                        </div>
                        <div class="widget-body am-fr">
                            <!-- 工具栏 -->
                            <div class="page_toolbar am-margin-bottom-xs am-cf">
                                <div class="am-form-group">
                                    <div class="am-btn-group am-btn-group-xs">
                                        <button data-am-offcanvas="{target: '#doc-oc-demo3'}" class="am-btn am-btn-default am-btn-success am-btn-xinzeng" @click="lockerVisible = true">
                                            <span class="am-icon-plus am-icon-plusd"></span> 新增
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="am-scrollable-horizontal am-u-sm-12">
                                <table width="100%" class="am-table am-table-compact am-table-striped tpl-table-black am-text-nowrap">
                                    <thead>
                                    <tr>
                                        <th>管理员ID</th>
                                        <th>用户名</th>
                                        <th>姓名</th>
                                        <th>添加时间</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td class="am-text-middle">10001</td>
                                        <td class="am-text-middle">admin</td>
                                        <td class="am-text-middle">管理员</td>
                                        <td class="am-text-middle">2018-06-25 19:32:28</td>
                                        <td class="am-text-middle">
                                            <div class="tpl-table-black-operation">
                                            </div>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div class="am-u-lg-12 am-cf">
                                <div class="am-fr pagination-total am-margin-right">
                                    <div class="am-vertical-align-middle align-middle">总记录：1</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "index",
        data() {
            return {
                blood: true,
                lockerVisible: false,
                lockerVisible1: false,
            }
        },
        watch: {
            $route(val) {
                this.blood = val.query.blood
            }
        },
        computed: {
            ...mapState(["newMenuListContent"])
        },
        methods: {
            lockerHandle() {
                this.lockerVisible = true;
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss">

    .am-btn-xinzeng {
        font-size: .8rem !important;
    }

    .am-icon-plusd {
        font-size: .9rem !important;
    }

    .align-middle {
        font-size: .9rem !important;
    }
</style>