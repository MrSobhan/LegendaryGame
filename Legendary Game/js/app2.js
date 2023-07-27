// DOM => Document Object Model
// BOM => Browser Object Model

var $= document;


//Loded_Start

setTimeout(() => {
    $.querySelector('.page1').hidden = true;
    $.querySelector('.page2').hidden = false
}, 1000);

//بازی دستگاه

var shoz = [
    {id:1 , h1: 'Dying Light 2' , img : 'images/16.jpeg' , price:'اکشن'  , p:'این بازی بسیار خوب و عالیست'},
    {id:2 , h1: ' Sifu' , img : 'images/15.jpg' , price:'اکشن'  , p:'این بازی بسیار خوب و عالیست'},
    {id:3 , h1: 'Elden Ring' , img : 'images/14.jpg' , price:'هیجانی'  , p:'این بازی بسیار خوب و عالیست'},
    {id:4 , h1: 'FIFA 2023  ' , img : 'images/13.jpg' , price:'مسابقه'  , p:'این بازی بسیار خوب و عالیست'},
    {id:5 , h1: 'Horizon ' , img : 'images/11.jpg' , price:'ماجراجویی'  , p:'این بازی بسیار خوب و عالیست'},
    {id:6 , h1: ' Gran Turismo 7' , img : 'images/12.jpg' , price:'مسابقه'  , p:'این بازی بسیار خوب و عالیست'}
]



shoz.forEach(function (shoes) {
    var divall = $.querySelector('.container')

var divcard = $.createElement('div')
divcard.classList.add('product-card')

var h1 = $.createElement('h1') ///
h1.innerHTML=shoes.h1

var p =$.createElement('p')///
p.innerHTML=shoes.p;

var divimg = $.createElement('div') ///
divimg.classList.add('product-pic')
divimg.style.backgroundImage = 'url('+ shoes.img+')'

var divinfo = $.createElement('div')
divinfo.classList.add('product-info')

var divprice = $.createElement('div') ///
divprice.classList.add('product-price')
divprice.innerHTML=shoes.price

var diva = $.createElement('a')
diva.classList.add('product-button') ///
diva.innerHTML='مشاهده'
diva.setAttribute('href' , 'card/product.html?id=' + shoes.id )

divcard.append(h1 , p , divimg , divinfo)
divinfo.append(divprice , diva)
divall.append(divcard)
})

//بازی موبایلی

var games = [
    {id:7 , h1: 'Diablo Immortal' , img : 'images/17.jpeg' , price:'نقش‌آفرینی'  , p:'این بازی بسیار خوب و عالیست'},
    {id:8 , h1: 'Apex Legends Mobile' , img : 'images/18.jpg' , price:'اکشن'  , p:'این بازی بسیار خوب و عالیست'},
    {id:9 , h1: 'Call of Duty' , img : 'images/19.jpg' , price:'اکشن اول شخص'  , p:'این بازی بسیار خوب و عالیست'},
    {id:10 , h1: 'فورتنایت' , img : 'images/20.jpg' , price:'اکشن'  , p:'این بازی بسیار خوب و عالیست'},
    {id:11 , h1: 'clash of royal' , img : 'images/21.jpg' , price:'استراتژی'  , p:'این بازی بسیار خوب و عالیست'},
    {id:12 , h1: 'Genshin Impact' , img : 'images/22.jpg' , price:'ماجراجویی'  , p:'این بازی بسیار خوب و عالیست'}
]



games.forEach(function (game) {
    var divall2 = $.querySelector('.container9')

var divcard2 = $.createElement('div')
divcard2.classList.add('product-card')

var h12 = $.createElement('h1') ///
h12.innerHTML=game.h1

var p2 =$.createElement('p')///
p2.innerHTML=game.p;

var divimg2 = $.createElement('div') ///
divimg2.classList.add('product-pic')
divimg2.style.backgroundImage = 'url('+ game.img+')'

var divinfo2 = $.createElement('div')
divinfo2.classList.add('product-info')

var divprice2 = $.createElement('div') ///
divprice2.classList.add('product-price')
divprice2.innerHTML=game.price

var diva2 = $.createElement('a')
diva2.classList.add('product-button') ///
diva2.innerHTML='مشاهده'
diva2.setAttribute('href' , 'card/product.html?id=' + game.id )

divcard2.append(h12 , p2 , divimg2 , divinfo2)
divinfo2.append(divprice2 , diva2)
divall2.append(divcard2)
})

//Btn-top

$.querySelector('.btn-top').addEventListener('click' , ()=>{
    $.documentElement.scrollTop = 0;
})

setInterval(() => {
    if($.documentElement.scrollTop == 0){
        $.querySelector('.btn-top').style.display = 'none';
    } else{
        $.querySelector('.btn-top').style.display = 'block';
    }  
});

//Form

$.getElementById('send').addEventListener('click' , ()=>{
    if($.getElementById('phone').value != '' && $.getElementById('textarea').value != ''){
        $.getElementById('phone').value = '' 
        $.getElementById('textarea').value = ''
        alert('با تشکر از نظرات شما')
    }else{
        alert('لطفا همه فیلد ها را کامل کنید')
    }
})

//Navbar

setInterval(() => {
    if($.documentElement.scrollTop <= 12){
        $.querySelector('.nav').style.position = 'relative'
    }else{
        $.querySelector('.nav').style.position = 'fixed'
    }
});



