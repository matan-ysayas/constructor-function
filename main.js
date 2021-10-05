// function Product(productName,productPrice,productDiscount,productImges){
//     this.name=productName;
//     this.price=productPrice;
//     this.discount=productDiscount;
//     this.imges=productImges;

//     this.update=function(key,value){
//         this[key]=value;

//     }

//     }

// const product1=new Product("car",20000,20,["https://cdn.pixabay.com/photo/2021/09/25/10/08/road-6654573__340.jpg","https://cdn.pixabay.com/photo/2020/11/29/04/02/hand-5786371_960_720.jpg"])
// const product2= new Product("pc",3000,30,["https://cdn.pixabay.com/photo/2017/12/31/13/49/barn-owl-3052382__340.jpg","https://cdn.pixabay.com/photo/2021/09/20/04/47/family-6639676__340.jpg"])
// const product3=new Product("iphone",2000,10,["https://cdn.pixabay.com/photo/2021/09/26/09/54/beans-6656979__340.jpg","https://cdn.pixabay.com/photo/2017/03/28/22/55/night-photograph-2183637__340.jpg"])

// const productsArray=[product1,product2,product3];

// console.log(productsArray);

// product3.update("price",9000);
// console.log(product3);

//*******************************************--2--************************************* */

// const cars = [
//   {
//     model: "mazda",
//     price: 3000,
//     year: 2019,
//     speed: 150,

//     moreSpeed: function () {
//       this.speed += 10;
//     },

//     lessSpeed: function () {
//       this.speed -= 15;
//     },
//   },
//   {
//     model: "vw",
//     price: 2000,
//     year: 2019,
//     speed: 100,

//     moreSpeed: function () {
//       this.speed += 10;
//     },

//     lessSpeed: function () {
//       this.speed -= 15;
//     },
//   },

//   {
//     model: "volvo",
//     price: 5000,
//     year: 2020,
//     speed: 200,

//     moreSpeed: function () {
//       this.speed += 10;
//     },

//     lessSpeed: function () {
//       this.speed -= 15;
//     },
//   },
// ];

// cars[0].lessSpeed();

// console.log(cars[0]);

//************************************--3--************************************************ */

// function Car(model,price,year,speed){
//     this.model=model;
//     this.price=price;
//     this.year=year;
//     this.speed=speed;

//     this.lessSpeed=function(){
//         this.speed-=15
//     }

//     this.moreSpeed=function(){
//         this.speed+=10
//     }
// }


// const car1=new Car("MAZDA",2000,2019,200);
// const car2=new Car("VOLVO",2000,2022,400);
// const car3=new Car("VW",2000,2021,500);

// car3.lessSpeed();

// console.log(car3);

// car2.moreSpeed();
// console.log(car2);


//*******************--4--******************************************* */

// let somediv=document.getElementById("somediv");

// function user(name,email,age,profileImg){
//     this.name=name;
//     if(typeof(name)=="string"){
//         this.name=name}else{
//         return null};
//     this.email=email;
//     this.age=age;
//     this.profileImg=profileImg;

//     this.update=function(key,value){
//         this[key]=value;
//     }

//     this.render=function(continuer){
//         continuer.innerHTML=`name: ${this.name}<p> email:${this.email}<p> age:${this.age}<p> <img src="${this.profileImg}">`

//     }

   

// }

// const user1=new user(5,"ssd@gamil.com",25,"https://cdn.pixabay.com/photo/2021/08/16/03/56/common-heron-6549208__340.jpg");

// console.log(user1);


// user1.update("name","maasn");

// console.log(user1);


// user1.render(somediv);

//******************************--5--****************************************************** */
const myDiv=document.getElementById("myDiv");
function Article(title,hthor,date,){
    this.title=title;
    this.hthor=hthor;
    this.date=date;
    this.render=function(continuer){
        continuer.innerHTML+=`title: ${this.title}<p> hthor:${this.hthor}<p> date:${this.date}<p>`

    }
}

const article1=new Article("hi","mike","10.10.10");
const article2=new Article("bye","ben","20.20.20");
const article3=new Article("whyi","bob","30.30.30");

const articleArray=[article1,article2,article3];


article1.render(myDiv)

for( Item of articleArray){
    Item.render(myDiv);
}








