const btn = document.getElementById('botum');
const sday = document.getElementById('d1');
const smonth = document.getElementById('m1');
const syear = document.getElementById('y1');
let dd = document.getElementById('dd');
let mm = document.getElementById('mm');
let yy = document.getElementById('yy');
let mv1 = document.getElementById('mv1');
let mv2 = document.getElementById('mv2');
let mv3 = document.getElementById('mv3');

let maxdays=0;
let monthnum=1;
let r;
let d11,m22,y33;
btn.addEventListener('click',()=>{
    r=false;
    dd.style.borderColor = "#CCCCCC";
    mv1.style.display = "none";
    mm.style.borderColor = "#CCCCCC";
    mv2.style.display = "none";
    yy.style.borderColor = "#CCCCCC";
    mv3.style.display = "none";
    let day = dd.value ;
    let month = mm.value ;
    let year = yy.value ;

    console.log(day,month,year);
if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12 ){
    maxdays=31;
    monthnum=month;
}else if(month==4 || month==6 || month==9 || month==11 ){
    maxdays=30;
    monthnum=month;
}else{
    maxdays=28;
    monthnum=month;
}
let Date_Now = new Date() ;
ddd = Date_Now.getDate();
mmm = Date_Now.getMonth() + 1;
yyy = Date_Now.getFullYear();
    if(day>maxdays || day<=0 ){
        dd.style.borderColor = "red";
        mv1.style.display = "inline-block";
    r=true;
    }
    if(month>12 || month<=0){
        mm.style.borderColor = "red";
        mv2.style.display = "inline-block";
        r=true;
    }
    if(year>yyy || year<=0){
        yy.style.borderColor = "red";
        mv3.style.display = "inline-block";
        r=true;
    }
    if(r==false){
        if(mmm<month){
            y33=Number(yyy)-Number(year)-1;
        }else{
            y33=yyy-Number(year);
        }
        if(ddd<day){
            d11=Number(day)-Number(ddd) +maxdays;
            if(mmm<=month){
            m22=Number(month) - Number(mmm) +12-1;
            }else{
            m22=Number(month)-Number(mmm)-1;
        }
        d11=Number(day)-Number(ddd) +maxdays;
    }else{
        
        if(mmm<month){
            m22=Number(month)-Number(mmm)+12;
        }else{
            m22=Number(month)-Number(mmm);
        }
        d11=Number(day)-Number(ddd);
    }
        if(ddd<day){
            
                }else{
                    
        }
        syear.textContent=y33;
        smonth.textContent=m22;
        sday.textContent=d11;
    }
    
});


