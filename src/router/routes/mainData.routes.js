export default {
    path: '/mainData',
    component: () => import("@/views/layout.vue"),
    redirect: '/testPage01',
    name: '主数据',
    meta: { title: '主数据', role: 'mainData' },
    children: [
        {
            path: '/testPage01',
            name: 'TestPage01',
            component: () => import('@/views/mainData/testPage01.vue'),
            meta: {
                title: '测试页面1',
                role: 'TestPage01'
            }
        }
    ]
}