import WorkFlowProcessingPool from "@/components/claim/processingpool/WorkFlowProcessingPool"

import Acceptance from "@/router/claim/acceptance/acceptance"

import PageContainer from "@/components/common/base/VPageContainer"

export default {
  /**
   * 理赔 - 我的任务
   */
  path: "/claim/mytask",
  name: "mytask",
  component: PageContainer,
  redirect: "/claim/mytask/workflowprocessingpool",
  children: [
    /**
     * 理赔 - 我的任务 - 任务搜索
     * 
     */
    {
      path: "/claim/mytask/workflowprocessingpool",
      name: "workflowprocessingpool",
      component: WorkFlowProcessingPool,
      meta: { tabname: "mytask", title: "我的任务", keepAlive: true }
    },
     /**
     * 理赔 - 我的任务 - 立案
     * 
     */
    Acceptance
  ]
}