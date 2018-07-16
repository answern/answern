import Vue from 'vue'
import Router from 'vue-router'

import Home from "@/router/home/home"
import CSApprove from "@/router/cs/approve/approve"
import CSEntry from "@/router/cs/entry/entry"
import CSRegister from "@/router/cs/register/register"
//claim
import RegisterCase from "@/router/claim/registration/registerCase"
import Acceptance from "@/router/claim/acceptance/acceptance"

import MyTask from "@/router/claim/mytask/task"


import Common from "@/components/common/Common"
import PageContainer from "@/components/common/base/VPageContainer"

Vue.use(Router)


const router = new Router({
  routes: [
    {
      path: '/',
      component: Common,
      children: [
        {
          path: "",
          redirect: Home
        },
        {
          path: "/cs",
          redirect: CSApprove
        },
        {
          path: "/claim",
          redirect: "/claim/registration/registercase"
        },
        Home,
        /**
         * 保全 - 审核
         */
        CSApprove,

        /**
         * 保全 - 录入
         */
        CSEntry,
        /**
          * 保全 - 注册
          */
        CSRegister,
        /**
         * 理赔 - 报案
         */
        RegisterCase,
        /**
         * 理赔 - 我的任务
         */
        MyTask
      ]

    }
  ]
})

export default router;