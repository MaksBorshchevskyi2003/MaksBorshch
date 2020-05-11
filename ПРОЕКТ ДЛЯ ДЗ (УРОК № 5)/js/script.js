let money,
    name,
	time,
	prise
 start:function start(){
	while (isNaN(money) || money == '' || money == null){
            money = prompt('Enter your monthly budget'); 
	    }
	     name = prompt('Enter your shop name').toUpperCase();
	     time = 9;
     }; 
	 
let mainlist = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false ,
	discount: false,
   
	chooseGoods:function chooseGoods(){
		for (let i=0; i < 4 ; i++ ) {
		let a = prompt('What type of products will you sell?');

		if (( typeof(a)) === 'string' && (typeof (a)) != null && a != '') {
			console.log('Good') ;
			mainlist.shopGoods[i]= a;
		} else {
			i = i - 1;
			alert('You have mistake');
		   }
	   }
	},

	workTime: function workTime(time){
		
		if (time< 0 || time > 24){
			   console.log('It is not real')
		} else if (time > 8 || time < 20) {
			console.log('Time to worl!')
			mainlist.open = true ;
		} else if (time < 8 || time > 20 && time < 24) { 
			console.log('Go to sleep')
	   }	else {
		   console.log('Only 24 hours')
	   }
	},   
	 
	 makeDiscount: function makeDiscount() {
				 if (mainlist.discount == true){
				 prise = (prise/100)*80;
			 }	 
		 },

	 hireEmployers: function hireEmployers(){
			 for (let i = 0; i<4; i++ ) {
				 let name = prompt('Имя работателя :');
				 mainlist.employers[name + i] = name;
			 }	
		},
	};

alert('Ваш дневной бюджет:' + mainlist.budget / 30 );
console.log(mainlist);

let open = document.getElementById(id);
name_value = document.getElementsByClassName('name_value')[0],
budget_value = document.getElementsByClassName('budget_value')[0],
goods_value = document.getElementsByClassName('goods_value')[0],
items_value = document.getElementsByClassName('items_value')[0],
employers_value = document.getElementsByClassName('employers_value')[0],
discount_value = document.getElementsByClassName('discount_value')[0],
isopen_value = document.getElementsByClassName('isopen_value')[0],


good_items = document.getElementsByClassName('good_items'),
good_btn = document.getElementsByTagName('button')[1],
budget_btn = document.getElementsByTagName('button')[2],
employers_btn = document.getElementsByTagName('button')[3],
choose_items = document.querySelector('choose_items')
time_value = document.querySelector('time_value'),
count_budget_value = document.querySelectorAll('count_budget_value'),
hire_employers_item = document.querySelectorAll('hire_employers_item ');