import ApproveCollection from "@/components/cs/approve/ApproveCollection"
import ApproveSurrender from "@/components/cs/approve/Surrender"
import ApproveServiceCharge from "@/components/cs/approve/ServiceCharge"
import ApproveCusBasInfo from "@/components/cs/approve/CusBasInfo"
import PageContainer from "@/components/common/base/VPageContainer"

export default  {
  /**
   * 保全 - 审核
   */
  path: "/cs/approve",
  name: "approve",
  component: PageContainer,
  redirect: "/cs/approve/collection",
  children: [
    /**
     * 保全 - 审核 - 保全搜索页面
     * 
     */
    {
      path: "/cs/approve/collection",
      name: "approvecollection",
      component: ApproveCollection,
      meta: { tabname: "approve", title: "保全审核", keepAlive: true }
    },
    /**
     * 保全 - 审核 - 退保页面
     * 
     */
    {
      path: "/cs/approve/surrender",
      name: "approvesurrender",
      component: ApproveSurrender,
      meta: { tabname: "approve", title: "保全审核", keepAlive: true }
    },
    /**
     * 保全 - 审核 - 手续费批改
     * 
     */
    {
      path: "/cs/approve/servicecharge",
      name: "approveservicecharge",
      component: ApproveServiceCharge,
      meta: { tabname: "approve", title: "保全审核", keepAlive: true }
    },
    /**
     * 保全 - 审核 - 客户基本资料变更
     * 
     */
    {
      path: "/cs/approve/cusbasinfo/:policycode",
      name: "approvecusbasinfo",
      component: ApproveCusBasInfo,
      meta: { tabname: "approve", title: "保全审核", keepAlive: true }
    }

  ]
}