"use strict";(()=>{var e={};e.id=703,e.ids=[703],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},292:(e,t,o)=>{o.r(t),o.d(t,{originalPathname:()=>m,patchFetch:()=>w,requestAsyncStorage:()=>u,routeModule:()=>p,serverHooks:()=>c,staticGenerationAsyncStorage:()=>d});var a={};o.r(a),o.d(a,{GET:()=>i});var r=o(9790),l=o(540),s=o(2273),n=o(9096);async function i(){let e=`User-agent: *
Allow: /

# Sitemap
Sitemap: https://ageless-blissful.com/sitemap.xml

# Disallow admin and private areas
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /dashboard/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /locations
Allow: /faq
Allow: /blog
Allow: /contact
Allow: /book

# Crawl delay
Crawl-delay: 1`;return new n.NextResponse(e,{headers:{"Content-Type":"text/plain"}})}let p=new r.AppRouteRouteModule({definition:{kind:l.x.APP_ROUTE,page:"/robots.txt/route",pathname:"/robots.txt",filename:"route",bundlePath:"app/robots.txt/route"},resolvedPagePath:"/Users/admin/Documents/app/app/robots.txt/route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:u,staticGenerationAsyncStorage:d,serverHooks:c}=p,m="/robots.txt/route";function w(){return(0,s.patchFetch)({serverHooks:c,staticGenerationAsyncStorage:d})}}};var t=require("../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),a=t.X(0,[85,664],()=>o(292));module.exports=a})();