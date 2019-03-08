// BUDGET CONTROLLER
var budgetController = (function() {
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentages = function(totalIncome){
        if (totalIncome > 0){
            this.percentage = Math.round((this.value/totalIncome)*100);
        }else {
            this.percentage = 1;
        }
    };

    Expense.prototype.getPercentages = function(){
        return this.percentage;
    };

    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
  
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    };
            

    var data = {
        allItems: {
            exp: [],
            inc:[]
        }, 
        totals:{
            exp:0,
            inc:0 
        },
        budget:0,
        percentage:-1
        
    };
    return {
        addItem : function(type, des, val){
            var newItem, ID;
            //create new ID
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length -1].id+1;
            } else{
                ID = 0;
            }
            //create new item bases on 'inc' or 'exp' type
            if (type === 'exp'){
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val);
            } 
            data.allItems[type].push(newItem);
            return newItem;
        },
        
        deleteItem: function(type, id){
            var ids, index;
            ids = data.allItems[type].map(function(current){
                return current.id;
            });
            
            index = ids.indexOf(id);

            if (index !== -1){

                data.allItems[type].splice(index, 1);
            }
            
        },
        
        calculateBudget: function(){
            //calclulate total income and expences
            calculateTotal('exp');
            calculateTotal('inc');
            //calcualate the budget: income -expences
            data.budget = data.totals.inc - data.totals.exp;
            //canculate the percentage of income that we spent
            if(data.totals.inc>0){
                data.percentage = Math.round(data.totals.exp/data.totals.inc)*100;
            }else{
                data.percentage = -1;
            }
        },
        calculatePercentages: function(){
            data.allItems.exp.forEach(function(cur){
                cur.calcPercentages(data.totals.inc);
            });
        },

        getPercentages: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentages();
            });
            return allPerc;
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        
        testing: function(){
            console.log(data);
        }
    };
    
})();




// UI CONTROLLER
var UIController = (function() {
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription : '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month' 
       
    };
    var formatNumber =  function(num, type){
        var numSplit, int, dec;
        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }

        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

    };
    
    return {
        getInput: function(){
            return{
                type:  document.querySelector(DOMStrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
       
        clearFiels: function(){
            var fields;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ',' + DOMStrings.inputValue);
            var fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current, index, array){
                current.value='';
            });
            fieldsArray[0].focus();
        },

        displayBudget: function(obj){
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

            if (obj.percentage > 0){
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';           
            }else{
                document.querySelector(DOMStrings.percentageLabel).textContent = '---';           
            }
       
        },
       
        displayPercentages: function(percentages) {
            
            var fields = document.querySelectorAll(DOMStrings.expensesPercLabel);
          
            var nodeListForEach = function(list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };
            
            nodeListForEach(fields, function(current, index) {
                
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
            
        },

        getDomSrtings: function(){
            return DOMStrings; 
        },

        displayMonth: function(){
         var now, year, month; 
         now = new Date();
         months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
         year = now.getFullYear();
         month = now.getMonth(); 
         document.querySelector(DOMStrings.dateLabel).textContent = months[month] + ' ' + year;
            
        
        },
        
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMStrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
       
        },
        
    };
})();




// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function(){
        var DOM = UICtrl.getDomSrtings();
        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event){
            if (event.keyCode===13 || event.which === 13){
     
            }
                              
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
        
    };
    
    var updateBudget = function() {
        
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget);
    };
    
    var updatePercentages = function(){
        budgetCtrl.calculatePercentages();
        var percentages = budgetCtrl.getPercentages();
        console.log(percentages);
        UICtrl.displayPercentages(percentages);
    };

    var ctrlAddItem = function(){
        //1. Get the field input data
        var input = UIController.getInput();
        if(input.description !=='' && !isNaN(input.value) && input.value>0){
            //2. Add the item to the budget controller
            var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            //3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            //ClearFiels
            UICtrl.clearFiels();
            //Calculate and update budget
            updateBudget();  
            //calcualate percentages
            updatePercentages(); 
        }


    };
    var ctrlDeleteItem = function(event){
      
        var itemId, splitID, type, id;
        itemId=event.target.parentNode.parentNode.parentNode.parentNode.id;

        if(itemId){
            //inc-1
            splitID = itemId.split('-');
            type = splitID[0];
            id = parseInt(splitID[1]);
            //1. Delete item from datastructure
            budgetCtrl.deleteItem(type, id);
            //2. Delete item from UI
            UICtrl.deleteListItem(itemId);
            //3. Update and show the new budget
            updateBudget();
            //Update Percentages
            updatePercentages();
        }
    };
    
    
    return{
        init: function(){
            console.log('Application has started');
            UICtrl.displayMonth();
            UICtrl.displayBudget({budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1});
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);

controller.init();