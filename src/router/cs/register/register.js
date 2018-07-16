import CsRegister from "@/components/cs/register/Register"
import PageContainer from "@/components/common/base/VPageContainer"

export default {
  /**
   * 保全 - 注册
   */
  path: "/cs/register",
  name: "register",
  component: PageContainer,
  redirect: "/cs/register/csregister",
  children: [
    {
      path: "/cs/register/csregister",
      name: "csregister",
      component: CsRegister,
      meta: { tabname: "register", title: "保全注册", keepAlive: true }
    }
  ]
}