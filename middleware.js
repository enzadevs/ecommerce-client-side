import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
    locales: ['tm','ru','en'],
    defaultLocale: 'tm'
})

export const config = {matcher: ['/((?!api|_next|.*\\..*).*)', '/(ru|en)/:path*']}