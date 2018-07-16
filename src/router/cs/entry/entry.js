import EntryCollection from "@/components/cs/entry/EntryCollection"
import EntrySurrender from "@/components/cs/entry/Surrender"
import EntryServiceCharge from "@/components/cs/entry/ServiceCharge"
import EntryCusBasInfo from "@/components/cs/entry/CusBasInfo"

import PageContainer from "@/components/common/base/VPageContainer"

export default {
  /**
   * 保全 - 录入
   */
  path: "/cs/entry",
  name: "entry",
  component: PageContainer,
  redirect: "/cs/entry/collection",
  children: [
    /**
     * 保全 - 录入 - 录入搜索页面
     * 
     */
    {
      path: "/cs/entry/collection",
      name: "entrycollection",
      component: EntryCollection,
      meta: { tabname: "entry", title: "保全录入", keepAlive: true }
    },
    /**
     * 保全 - 录入 - 退保页面
     * 
     */
    {
      path: "/cs/entry/surrender",
      name: "entrysurrender",
      component: EntrySurrender,
      meta: { tabname: "entry", title: "保全录入", keepAlive: true }
    },
    /**
     * 保全 - 录入 - 手续费批改
     * 
     */
    {
      path: "/cs/entry/servicecharge",
      name: "entryservicecharge",
      component: EntryServiceCharge,
      meta: { tabname: "entry", title: "保全录入", keepAlive: true }
    },
    /**
     * 保全 - 录入 - 客户基本资料变更
     * 
     */
    {
      path: "/cs/entry/cusbasinfo",
      name: "entrycusbasinfo",
      component: EntryCusBasInfo,
      meta: { tabname: "entry", title: "保全录入", keepAlive: true }
    }

  ]
}