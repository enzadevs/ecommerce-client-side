const withNextIntl = require('next-intl/plugin')()

module.exports = withNextIntl({
    experimental: {
        optimizePackageImports: ['react-icons'],
    },
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'ir.ozone.ru',
            port: ''
            },
            {
                protocol: 'https',
                hostname: 'cdn1.ozonusercontent.com',
                port: ''
            }
        ]
    }
})