//5
web.transaction('01')
web.init();
web.open('https://wolt.com/he/discovery');
web.click('div.sc-3acf7193-2.kUcLXW>button.sc-eda0895a-2.kcvQDI')
web.pause(2000)
web.selectWindow('title=בואו לגלות עולם שלם של מסעדות & חנויות ב-Wolt – Wolt');

web.transaction('02')
web.click("//*[contains(text(),'כניסה')]")
web.click("//*[contains(text(),'כניסה דרך גוגל')]")

web.transaction('03')
web.pause(2000)
log.info(web.getUrl())
web.type('id=identifierId', 'ar0527167617@gmail.com')
web.click("button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.qIypjc.TrZEUc.lw1w4b")

web.transaction('04')
web.pause(2000)
web.type("name=Passwd","AYALAREVIVO1!")
web.pause(2000)
web.click("button.VfPpkd-LgbsSe.VfPpkd-LgbsSe-OWXEXe-k8QpJ.VfPpkd-LgbsSe-OWXEXe-dgl2Hf.nCP5yc.AjY5Oe.DuMIQc.LQeN7.qIypjc.TrZEUc.lw1w4b")

web.transaction('05')
web.pause(10000)
web.click("//*[contains(text(),'Gift Card')]");
web.click("//*[contains(text(),'גיפט קארד - 45')]");
web.click("//*[contains(text(),'להוסיף להזמנה')]");

web.transaction('06')
web.pause(5000)
web.click("//*[contains(text(),'לצפייה בהזמנ')]");
web.click("//*[contains(text(),'מעבר לתשלום')]");

web.transaction('07')
web.pause(5000)
web.click("/html/body/div[2]/div[2]/main/div[5]/div[2]/div[1]/ul[2]/li");
web.click("//*[contains(text(),'בחירה')]");
web.pause(3000)
web.click('div.COs4mW>div.sc-8f4f0c5f-1.bZAllL>button.sc-eda0895a-2.cFDkWm');

web.transaction('08')
//page connect to sibus
web.selectFrame("//*[@id='mainContent']/div[4]/iframe");
web.type("//*[@id='txtUserName']","ayala.revivo@verisoft.co");
web.type("//*[@id='txtPassword']","AYALAREVIVO1!");
web.pause(2000)
web.click('id=btnSubmit');

web.transaction('09')
web.click('id=btnPay');

web.transaction('10')
if(web.isExist('//*[contains(text(),"יש לך מייל")]',60))
    log.info("wow");
if(web.isExist('//*[contains(text(),"אישור העסקה לא הצלי")]',60))
    log.info("oooof")




