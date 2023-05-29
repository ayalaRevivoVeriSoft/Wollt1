//5
web.transaction('01')
web.init();
web.open('https://wolt.com/he/discovery');
web.click('div.sc-3acf7193-2.kUcLXW>button.sc-eda0895a-2.kcvQDI')
web.pause(2000)
web.selectWindow('title=בואו לגלות עולם שלם של מסעדות & חנויות ב-Wolt – Wolt');
web.transaction('01')
web.click("//*[contains(text(),'כניסה')]")


web.click("//*[contains(text(),'כניסה דרך גוגל')]")
web.transaction('03')
web.pause(2000)
web.type('id=identifierId', 'ar0527167617@gmail.com')
web.transaction('04')
web.click("//span[contains(text(),'הבא') and @class='VfPpkd-vQzf8d']")

web.type("name=Passwd","AYALAREVIVO1!")
web.pause(2000)
web.transaction('05')
web.click("//span[contains(text(),'הבא') and @class='VfPpkd-vQzf8d']")
web.pause(10000)
web.transaction('06')
web.click("//*[contains(text(),'Gift Card')]");
web.click("//*[contains(text(),'גיפט קארד - 45')]");
web.click("//*[contains(text(),'להוסיף להזמנה')]");
web.transaction('07')
web.pause(5000)
web.click("//*[contains(text(),'לצפייה בהזמנ')]");

web.click("//*[contains(text(),'מעבר לתשלום')]");
web.transaction('08')

web.pause(5000)
web.click("/html/body/div[2]/div[2]/main/div[5]/div[2]/div[1]/ul[2]/li");

web.click("//*[contains(text(),'בחירה')]");

web.pause(3000)

web.click('div.COs4mW>div.sc-8f4f0c5f-1.bZAllL>button.sc-eda0895a-2.cFDkWm');


//page connect to sibus
web.transaction('09')


web.selectFrame("//*[@id='mainContent']/div[4]/iframe");

web.type("//*[@id='txtUserName']","ayala.revivo@verisoft.co");


web.type("//*[@id='txtPassword']","AYALAREVIVO1!");


web.click('id=btnSubmit');


web.click('id=btnPay');

web.transaction('10')


if(web.isExist('//*[contains(text(),"יש לך מייל")]',60))
    log.info("wow");
if(web.isExist('//*[contains(text(),"אישור העסקה לא הצלי")]',60))
    log.info("oooof")







