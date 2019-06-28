var request=require("request");
var cheerio=require("cheerio");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var url='https://www.moneycontrol.com/stocksmarketsindia/';

request(url,function(err,response,html){
    if(!err){
        const dom = new JSDOM(html);
        var company=[];
        for(let i=1;i<5;i++){

        const s =dom.window.document.querySelectorAll("#manse tr")[i].firstElementChild.textContent;
        

        
        company.push(s);
        }
        console.log(company);
    }
});

