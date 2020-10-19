export default {
    path: '/masterData',
    component: () => import("@/views/layout.vue"),
    redirect: '/testPage01',
    name: 'MasterData',
    meta: { title: '主数据', role: 'masterData' },
    children: [
        {
            path: '/testPage01',
            name: 'TestPage01',
            component: () => import('@/views/masterData/testPage01.vue'),
            meta: {
                title: '测试页面1',
                role: 'TestPage01'
            }
        }
    ]
}