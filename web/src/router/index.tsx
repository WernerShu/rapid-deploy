import { lazy } from 'react'
// 基于路由进行代码分割
// 经测试可进行路由懒加载
interface Router {
    path: string
    component: any
    exact: boolean
}
const router: Router[] = [
    {
        path: '/',
        component: lazy(() => import('@/views/Home/Home')),
        exact: true
    }
    //  {
    //     path: "/data",
    //     component: lazy(() => import('@/views/Data.jsx')),
    //     exact: true
    // }, {
    //     path: "/user",
    //     component: lazy(() => import('@/views/User.jsx')),
    //     exact: false,
    //     children: [
    //         {
    //             path: "/user",
    //             component: lazy(() => import('@/views/User/Index.jsx')),
    //             exact: true,
    //         }, {
    //             path: "/user/info",
    //             component: lazy(() => import('@/views/User/Info.jsx')),
    //             exact: true,
    //         }
    //     ]
    // },
]
export default router
