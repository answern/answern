import Acceptance from "@/components/claim/acceptance/Acceptance"
import AcceptanceEntity from "@/components/claim/acceptance/AcceptanceEntity"
import AcceptancePolicy from "@/components/claim/acceptance/AcceptancePolicy"
import AcceptanceSummary from "@/components/claim/acceptance/AcceptanceSummary"

import PageContainer from "@/components/common/base/VPageContainer"

export default {
  path: "/claim/mytask/acceptance",
  name: "acceptance",
  component: Acceptance,
  redirect: "/claim/mytask/acceptance/entity/:caseNo",
  children: [
    /**
     * 理赔 - 我的任务 - 立案录入
     * 
     */
    {
      path: "/claim/mytask/acceptance/entity/:caseNo",
      name: "acceptanceEntity",
      component: AcceptanceEntity,
      meta: { tabname: "mytask", title: "我的任务", keepAlive: true }
    },
    /**
     * 理赔 - 我的任务 - 立案保单
     * 
     */
    {
      path: "/claim/mytask/acceptance/policy/:caseNo",
      name: "acceptancePolicy",
      component: AcceptancePolicy,
      meta: { tabname: "mytask", title: "我的任务", keepAlive: true }
    },
    /**
     * 理赔 - 我的任务 - 立案小结
     * 
     */
    {
      path: "/claim/mytask/acceptance/summary/:caseNo",
      name: "acceptanceSummary",
      component: AcceptanceSummary,
      meta: { tabname: "mytask", title: "我的任务", keepAlive: true }
    }
  ]
}
