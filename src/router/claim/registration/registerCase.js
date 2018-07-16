import RegisterCase from "@/components/claim/registration/RegisterCase"
import PageContainer from "@/components/common/base/VPageContainer"

export default {
  path: "/claim/registration",
  name: "registration",
  component: PageContainer,
  redirect: "/claim/registration/registercase",
  children: [
    {
      path: "/claim/registration/registercase",
      name: "registercase",
      component: RegisterCase,
      meta: { tabname: "registration", title: "报案", keepAlive: true }
    }
  ]
}
