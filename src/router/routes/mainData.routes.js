export default {
    path: '/mainData',
    component: () => import("@/views/layout.vue"),
    redirect: '/factory',
    name: '主数据',
    meta: { title: '主数据' },
    children: [
        {
            path: '/factory',
            name: 'Factory',
            component: () => import('@/views/mainData/factory.vue'),
            meta: { title: '工厂' }
        }
    ]
}