//2
web.init();
web.open('https://wolt.com/he/discovery');
web.click('div.sc-3acf7193-2.kUcLXW>button.sc-eda0895a-2.kcvQDI')

web.selectWindow('title=בואו לגלות עולם שלם של מסעדות & חנויות ב-Wolt – Wolt');
// xpath:attributes: (//button[@type=\'button\'])[1]
// xpath:idRelative: //main[@id=\'mainContent\']/div[1]/div/div[1]/header/div[2]/div[3]/div/div/button
//   xpath:position: //div[3]/div/div/button
//              css: css=#mainContent > div.sc-9db2777b-0.dtsKIJ > div > div.sc-ab4f1ce4-0.ehVhyU.rtl.sc-9db2777b-2.npxnC > header > div.sc-7d7c6c58-1.gjijOf > div.sc-7d7c6c58-5.ldWo > div > div > button
web.click('(//button[@type=\'button\'])[1]');

//   xpath:position: //button[1]/div[3]/div[2]
//              css: css=body > div.sc-75cea620-0.klDnoY.rtl > div > aside > div.sc-c12b36a1-0.cGazFG > div > div.sc-c12b36a1-5.hNAlWg > div > div > div.sc-93a5a9d6-4.pwrMQ > button.sc-8ec1ba62-3.dsuSCx > div.sc-8ec1ba62-4.bUwMUH > div.sc-8ec1ba62-1.buPIMJ
web.pause(2000)
web.click('//button[1]/div[3]/div[2]');


web.type('id=identifierId', 'ayala.revivo@verisoft.co');

// xpath:idRelative: //div[@id=\'identifierNext\']/div/button/span
//   xpath:position: //div[2]/div/div[1]/div/div/button/span
//              css: css=#identifierNext > div > button > span
web.click('//div[@id=\'identifierNext\']/div/button/span');

//             name: name=password
// xpath:attributes: //input[@name=\'password\']
// xpath:idRelative: //div[@id=\'password\']/div[1]/div/div[1]/input
//   xpath:position: //div/div/div[1]/div[1]/div/div/div/div/div[1]/div/div[1]/input
//              css: css=#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input

web.type("name=Passwd","AYALAREVIVO1!")
web.click('//*[@id="passwordNext"]/div/button')
web.pause(3000)
// if(web.isExist('id=footer')==false){
//    web.pause(10000)
// }
web.scrollToElement("id=footer", true,60);

web.click("//*[contains(text(),'Gift Card')]");

// xpath:idRelative: //div[@id=\'app\']/div[2]/div[1]/div[2]/main/div[4]/div/div[1]/div/div/div/div[3]/div[6]/button/div[1]/div[1]/p
//   xpath:position: //div[6]/button/div[1]/div[1]/p
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-1.kTiEXV > div.sc-b8a2517d-6.hSayaZ > main > div.sc-98bbbe23-1.bmcaTV > div > div:nth-child(1) > div > div > div > div.sc-48dcf36d-6.gZXmel > div:nth-child(6) > button > div.sc-31d77e20-3.cJvUDC > div.sc-979c4fba-1.buqbjO > p
web.click('//div[@id=\'app\']/div[2]/div[1]/div[2]/main/div[4]/div/div[1]/div/div/div/div[3]/div[6]/button/div[1]/div[1]/p');

// xpath:idRelative: //div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button/div[3]/div
//   xpath:position: //footer/div/div/div/div[1]/button/div[3]/div
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-9.fnnQPQ > div.sc-75cea620-0.klDnoY.rtl > div > aside > footer > div > div > div > div.sc-be417c56-2.jYmb > button > div.sc-eda0895a-3.gtpwGZ > div
web.click('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/footer/div/div/div/div[1]/button/div[3]/div');

// xpath:idRelative: //div[@id=\'app\']/div[2]/div[1]/div[1]/div[1]/div/div/header/div[2]/div[3]/div/div/div/div/button/div[3]/div/div[3]
//   xpath:position: //div[3]/div/div/div/div/button/div[3]/div/div[3]
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-1.kTiEXV > div.sc-6d8ebe7f-0.kjTFFg.sc-b8a2517d-2.cUOtxA > div.sc-6d8ebe7f-1.dvaJEz > div > div > header > div.sc-7d7c6c58-1.gjijOf > div.sc-7d7c6c58-5.ldWo > div > div > div > div > button > div.sc-eda0895a-3.gtpwGZ > div > div.sc-5f688af-8.cTDFkW
web.click('//div[@id=\'app\']/div[2]/div[1]/div[1]/div[1]/div/div/header/div[2]/div[3]/div/div/div/div/button/div[3]/div/div[3]');
web.click("//*[contains(text(),'לצפייה בהזמנ')]");

// xpath:idRelative: //div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[3]/div[2]
//   xpath:position: //button/div[3]/div[2]
//              css: css=#app > div.sc-b8a2517d-0.fgIYEj.rtl > div.sc-b8a2517d-9.fnnQPQ > div.sc-75cea620-0.klDnoY.rtl > div > aside > div.sc-c12b36a1-0.cGazFG > div > div.sc-c12b36a1-5.imwqgU > footer > div > div > button > div.sc-eda0895a-3.gtpwGZ > div.sc-c28a442b-2.ikqQDc
web.click('//div[@id=\'app\']/div[2]/div[2]/div[2]/div/aside/div[2]/div/div[1]/footer/div/div/button/div[3]/div[2]');

// xpath:idRelative: //main[@id=\'mainContent\']/div[5]/div[2]/div[1]/ul[2]/li/a/div[2]/div[2]
//   xpath:position: //a/div[2]/div[2]
//              css: css=#mainContent > div._7jNY6.rtl > div.Ma9ZAd > div:nth-child(1) > ul.sc-62a2b279-1.fFESDh > li > a > div.Fc0K3Z > div.V4XWr4.bVBEQE
web.click('//main[@id=\'mainContent\']/div[5]/div[2]/div[1]/ul[2]/li/a/div[2]/div[2]');

//   xpath:position: //div[2]/div/div[1]/div/div[3]/button/div[2]
//              css: css=body > div.sc-75cea620-0.klDnoY.rtl > div > aside > div.sc-c12b36a1-0.cGazFG > div > div.sc-c12b36a1-5.hNAlWg > div > div:nth-child(6) > button > div.sc-a47ff230-0.fRvckn
web.click('//div[2]/div/div[1]/div/div[3]/button/div[2]');
