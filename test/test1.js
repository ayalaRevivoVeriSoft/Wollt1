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




web.click('//*[@id="mainContent"]/div[1]/div/div[1]/header/div[2]/div[3]/div/div/button');

web.click('//*[contains(text(),"כניסה דרך גוגל")]')

web.type("id=identifierId","ayala.revivo@verisoft.co" )

web.click("//*[@id='identifierNext']/div/button")
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

web.waitForVisible('button.sc-eda0895a-2.qNZTd.sc-b10f3074-4.gXMRvG')
log.info(web.isExist('button.sc-eda0895a-2.qNZTd.sc-b10f3074-4.gXMRvG'))
web.click('button.sc-eda0895a-2.qNZTd.sc-b10f3074-4.gXMRvG');
                
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
log.info(web.isExist('li.hzkXlR.FKFYyR.Bvl34_'))
log.info(web.isExist('div.EQP1jw.J3jiz3.GMfAJz'))
log.info(web.isExist("div.EQP1jw.J3jiz3.GMfAJz"))

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






