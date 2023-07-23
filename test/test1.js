web.transaction('30')

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

web.scrollToElement('id=footer', false,60);

web.click('/html/body/div[2]/div[2]/main/div[3]/div/div/div[20]/div/div/div/div[2]/a');

web.click('//div[@id=\'app\']/div[2]/div[1]/div[2]/main/div[4]/div/div[1]/div/div/div/div[3]/div[6]/button/div[1]/div[1]/p');

// xpath:idRelative: //div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button/div[3]/div/span[1]
//   xpath:position: //div[3]/div/span[1]
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-9.fnnQPQ > div.sc-75cea620-0.klDnoY.rtl > div > aside > footer > div > div > div > div.sc-be417c56-2.jYmb > button > div.sc-eda0895a-3.gtpwGZ > div > span:nth-child(1)
web.click('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button/div[3]/div/span[1]');

// xpath:idRelative: //div[@id=\'app\']/div[2]/div[1]/div[1]/div[1]/div/div/header/div[2]/div[3]/div/div/div/div/button/div[3]/div/div[2]
//   xpath:position: //div[3]/div/div/div/div/button/div[3]/div/div[2]
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-1.kTiEXV > div.sc-6d8ebe7f-0.kjTFFg.sc-b8a2517d-2.cUOtxA > div.sc-6d8ebe7f-1.dvaJEz > div > div > header > div.sc-7d7c6c58-1.gjijOf > div.sc-7d7c6c58-5.ldWo > div > div > div > div > button > div.sc-eda0895a-3.gtpwGZ > div > div.sc-5f688af-7.hvrYZz
web.click('button.sc-eda0895a-2.gDxbyT');

// xpath:idRelative: //div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[2]
//   xpath:position: //footer/div/div/button/div[2]
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-9.fnnQPQ > div.sc-75cea620-0.klDnoY.rtl > div > aside > div.sc-c12b36a1-0.cGazFG > div > div.sc-c12b36a1-5.imwqgU > footer > div > div > button > div.sc-eda0895a-4.egaGvz
web.click('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[2]');
// const num=37-(37%5)
// log.info(num)
// web.pause(4000)
// const s="//h3[contains(text(),'גיפט קארד - "+num+" ₪')]"
// web.click(s)
// web.transaction('06')

// log.info(web.getUrl())

// web.click('//*[@id="app"]/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button')


// web.click('button.sc-eda0895a-2.gDxbyT');

// web.transaction('07')
// web.pause(3000)
// web.click('//*[@id="app"]/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[2]')
web.pause(3000)
log.info(web.isExist('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[2]'))
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






