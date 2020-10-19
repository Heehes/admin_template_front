module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/',
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'https://www.uspring.cn:8443/waste_enterprise',
                changeOrigin: true,
                // ws: true,
                pathRewrite: {
                    '/api': "/api"
                }
            }
        },
    }
}

