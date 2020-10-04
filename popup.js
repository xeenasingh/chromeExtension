
document.querySelector(".changeData").addEventListener("click",changeData);

const getDataAndRender=(function getData(currency="INR"){
const xhr=new XMLHttpRequest();
    xhr.open("GET",`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency}&api_key=fdc128b9445c7be4da4e860ea5d2901094d797071e0b120b1675fd5490c5fa`,true);
    let output="<tr><td><b></b></td><td><b>Coin</b></td><td><b>PRICE</b></td><td><b>HIGH DAY</b></td><td><b>LOW DAY</b></td></tr>";
    xhr.onload=function(){
    if(this.status===200){
       const response=JSON.parse(this.responseText);
       const dataArr=response.Data;
        dataArr.forEach(function(data){
           const name=data.CoinInfo.FullName;
            const imgURL=data.CoinInfo.ImageUrl;
            const price=data.DISPLAY.INR.PRICE;
            console.log(typeof data.CoinInfo.FullName);
            const img=`https://www.cryptocompare.com/${imgURL}`;
            const highDay=data.DISPLAY.INR.HIGHDAY;
            const lowDay=data.DISPLAY.INR.LOWDAY;
            output+=` <tr><td><img src=${img} width="30" height="30"></td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${highDay}</td>
            <td>${lowDay}</td></tr>`})
        document.querySelector(".data-back").innerHTML=output;}
    }
xhr.send();

})();

function getDataNew(currency){

    
    const xhr=new XMLHttpRequest();
   
    xhr.open("GET",`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=${currency}&api_key=fdc128b9445c7be4da4e860ea5d2901094d797071e0b120b1675fd5490c5fa`,true);
    let output="<tr><td><b></b></td><td><b>Coin</b></td><td><b>PRICE</b></td><td><b>HIGH DAY</b></td><td><b>LOW DAY</b></td></tr>";
    xhr.onload=function(){
    if(this.status===200){
            const response=JSON.parse(this.responseText);
            const dataArr=response.Data;
            dataArr.forEach(function(data){
            const name=data.CoinInfo.FullName;
            const imgURL=data.CoinInfo.ImageUrl;
            const img=`https://www.cryptocompare.com/${imgURL}`;
            let price,highDay,lowDay;
            if(currency==="USD")
            {
                 price=data.DISPLAY.USD.PRICE;
                 highDay=data.DISPLAY.USD.HIGHDAY;
                 lowDay=data.DISPLAY.USD.LOWDAY;
            }
            else if(currency==="INR")
            {
                 price=data.DISPLAY.INR.PRICE;
                 highDay=data.DISPLAY.INR.HIGHDAY;
                 lowDay=data.DISPLAY.INR.LOWDAY;
            }
            else if(currency==="BTC")
            {
                 price=data.DISPLAY.BTC.PRICE;
                 highDay=data.DISPLAY.BTC.HIGHDAY;
                 lowDay=data.DISPLAY.BTC.LOWDAY;
            }
            else if(currency==="EUR")
            {
                 price=data.DISPLAY.EUR.PRICE;
                 highDay=data.DISPLAY.EUR.HIGHDAY;
                 lowDay=data.DISPLAY.EUR.LOWDAY;
            }
            output+=` <tr><td><img src=${img} width="30" height="30"></td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${highDay}</td>
            <td>${lowDay}</td>
            </tr>
            `
           
        })
        
         document.querySelector(".data-back").innerHTML=output;
        }
    }

    xhr.send();

    //e.preventDefault();
}

function changeData(){

    const newOutput=getCurrency();
    console.log(newOutput);
    document.querySelector(".data-back").innerHTML="";
    
    getDataNew(newOutput);

}


function getCurrency() { 
    const selectElement =document.querySelector('#select1'); 
              
    const output = selectElement.value; 
   
    //console.log("get" ,output);
    return output;
} 


