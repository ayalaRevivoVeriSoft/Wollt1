web.transaction('22')

web.transaction('01')

web.init();
// web.open('https://www.cibus-sodexo.co.il/')
// web.selectFrame("/html/body/div[1]/section/div[3]/iframe")

// web.transaction('02')

// web.type("id=txtUsr","ayala.revivo@verisoft.co" )
// web.type("id=txtPas","AYALAREVIVO1!" )
// web.click('id=btnLogin')
// web.selectFrame("top")


// const txt=web.getText('span.bdg.space')
// log.info(txt)
// const money=txt.replace(/[^\d\.]*/g, '')
// const numMoney=Number(money)
// const num=numMoney-(numMoney%5)
const num=45
web.transaction('03')
web.open('https://wolt.com/he/discovery')
web.click('div.sc-3acf7193-2.kUcLXW>button.sc-eda0895a-2.kcvQDI')




web.click("//*[@id='mainContent']/div[1]/div/div[1]/header/div[2]/div[3]/div/div/button");

web.click('//*[contains(text(),"כניסה דרך גוגל")]')

web.type("id=identifierId","ayala.revivo@verisoft.co" )

web.click('//*[@id="identifierNext"]/div/button')
web.transaction('04')


web.waitForVisible("name=Passwd")
//anuther Page
log.info(web.isExist("name=Passwd"))

web.type("name=Passwd","AYALAREVIVO1!")
log.info(web.isExist('//*[@id="passwordNext"]/div/button'))

web.click('//*[@id="passwordNext"]/div/button')


web.transaction('05')
//anuther page
web.pause(10000)
// var b=web.isExist('div._Ne1rW:nth-child(4)')
// log.info("aa"+b)
web.open("https://wolt.com/he/isr/tel-aviv/venue/woltilgiftcards")
//  web.click('div._Ne1rW:nth-child(4)>a');




// const num=37-(37%5)
// log.info(num)
web.pause(4000)
const s="//h3[contains(text(),'גיפט קארד - "+num+" ₪')]"
log.info(web.isExist(s))

web.click(s)
web.transaction('06')

// web.click('//h3[contains(text(),"- 45")]')
web.click('//*[@id="app"]/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button')


web.click('button.sc-eda0895a-2.gDxbyT');

web.transaction('07')

log.info(web.getUrl())
log.info(web.isExist('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[3]/div[2]'))
// xpath:idRelative: //div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[3]/div[2]
//   xpath:position: //button/div[3]/div[2]
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-9.fnnQPQ > div.sc-75cea620-0.klDnoY.rtl > div > aside > div.sc-c12b36a1-0.cGazFG > div > div.sc-c12b36a1-5.imwqgU > footer > div > div > button > div.sc-eda0895a-3.gtpwGZ > div.sc-c28a442b-2.ikqQDc
web.click('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[3]/div[2]');

web.pause(3000)

log.info(web.isExist('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[2]'))

web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
web.sendKeys('Down arrow')
log.info(web.isExist("li.hzkXlR.FKFYyR.Bvl34_"))

log.info(web.isExist("li.hzkXlR.FKFYyR.Bvl34_"))

web.click("li.hzkXlR.FKFYyR.Bvl34_");
web.transaction('08')


web.click("button[value='cibus']");
web.pause(3000)

web.click('div.COs4mW>div.sc-8f4f0c5f-1.bZAllL>button.sc-eda0895a-2.cFDkWm');


//page connect to sibus
web.transaction('09')


web.selectFrame("//*[@id='mainContent']/div[4]/iframe");

web.type("//*[@id='txtUserName']","ayala.revivo@verisoft.co");


web.type("//*[@id='txtPassword']","AYALAREVIVO1!");


web.click('id=btnSubmit');


// web.click('id=btnPay');

web.transaction('10')


if(web.isExist('//*[contains(text(),"יש לך מייל")]',60))
    log.info("wow");
else{
    log.info("oooof")
}






