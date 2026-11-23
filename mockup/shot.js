const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:460,height:800},deviceScaleFactor:2});
for(const [q,f] of [['0','prognoz_1.png'],['1','prognoz_2.png']]){await p.goto('file://'+__dirname+'/page.html?p='+q);await p.screenshot({path:f,fullPage:true});}
await b.close();})();
