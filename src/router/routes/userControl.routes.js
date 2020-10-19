export default {
    path: '/userControl',
    component: () => import("@/views/layout.vue"),
    redirect: '/userControl_test',
    name: 'userControl',
    meta: { title: '用户管理', role: '' },
    children: [
        {
            path: '/userControl_test',
            name: 'UserControl_test',
            component: () => import('@/views/masterData/testPage01.vue'),
            meta: {
                title: '测试页面2',
                role: ''
            }
        }
    ]
}