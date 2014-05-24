(function(){

    console.log('loaded');

    /*********************/
    //Psuedoclassical inheritance example
    /********************/

    // /Mammal constructor

    var Mammal = function (name) {
        this.name = name;
    }

    //add public methods to Mammal

    Mammal.prototype.getName = function () {
        return this.name
    }

    Mammal.prototype.says = function () {
        return this.saying || '';
    }

    //make an instance of Mammal

    var myMammal = new Mammal('Mr Mammal');

    console.log('Mammal name: ' + myMammal.getName());

    //define a new class called 'Cat' that inherits from Mammal

    var Cat = function(name){
        this.name = name;
        this.saying = 'Meow';
    }

    //inherit from mammal

    Cat.prototype = new Mammal();

    Cat.prototype.purr = function(n){
        var i, s = '';
        for (var i = 0;i <n;i += 1){
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    }

    //override get_name function

    Cat.prototype.get_name = function () {
        return this.says() + ' ' + this.name + ' ' + this.says();
    }

    var myCat = new Cat('Peter');

    console.log('Cat name: ' + myCat.getName());
    console.log('Cat says: ' + myCat.says());
    console.log('Cat purrs: ' + myCat.purr(5));

    /***************************************/
    //Psudeoclassical, simpler example
    /**************************************/


    //Allows you to augment Function, to make a method available to all functions

    Function.prototype.method = function (name, func) {
        if (!this.prototype[name]) {
            this.prototype[name] = func;
            return this;
        }
    }

    //define an inhertis menthod on the Function superobject

    Function.method('inherits', function (Parent) {
        this.prototype = new Parent();
        return this;
    });

    var Dog = function(name) {
        this.name = name;
        this.saying = 'woof';
    }.
        inherits(Mammal).
        method('growls', function(n) {
            var i, s = '';
            for (var i = 0;i <n;i += 1){
                if (s) {
                    s += '-';
                }
                s += 'r';
            }
            return s;
        }).
        method('get_name', function() {
            return this.says() + ' ' + this.name + ' ' + this.says();
        });

    var myDog = new Dog('Douglas');

    console.log('Dog name: ' + myDog.getName());
    console.log('Dog says: ' + myDog.says());
    console.log('Dog growls: ' + myDog.growls(5));


    /************************************/
    //Prototypal Example
    /************************************/

    //use object literal to make an object

    var myVegetable = {
        name : 'Dave the Vegetable',
        get_name : function () {
            return this.name;
        },
        says : function () {
            return this.saying || '';
        }
    };

    //add a create method to the Object function
    //allows you to create a new object inhereting from another
    if (typeof Object.create !== 'function') {
        Object.create = function (o) {
            var F = function () {};
            F.prototype = o;
            return new F();
        };
    }

    //make an custom 'instance'

    var myPotato = Object.create(myVegetable);
    myPotato.name = 'John Batman the potato';
    myPotato.saying = 'potato-potato-potato';
    myPotato.shudder = function(n) {
        var i, s = '';
        for (var i = 0;i < n;i += 1){
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    }
    myPotato.get_name = function() {
        return this.says() + ' ' + this.name + ' ' + this.says();
    }

    console.log('My Potato name: ' + myPotato.get_name());
    console.log('My Potato says: ' + myPotato.says());
    console.log('My Potato shudders: ' + myPotato.shudder(5));

    /****************************/
    //Functional Example
    /****************************/

    var person = function(spec) {
        var self = {};
        self.get_name = function() {
            return spec.name;
        }
        self.says = function() {
            return spec.saying || '';
        }

        return self;
    }

    var myPerson = person({name:'John Smith'});
    console.log('myPerson.get_name: ' + myPerson.get_name());
    console.log('myPerson.says: ' + myPerson.says());

    //contents of 'spec' are private
    //object is more durable as a result

    var president = function(spec) {
        spec.saying = spec.saying || 'meow';
        var self = person(spec);
        self.grumble = function(n) {
            var i, s = '';
            for (var i = 0;i < n;i += 1){
                if (s) {
                    s += '-';
                }
                s += 'r';
            }
            return s;
        };
        self.get_name = function() {
            return self.says() + ' ' + spec.name + ' ' + self.says();
        };
        return self;
    }

    var washington = president({name: 'George Washington'});

    console.log('washington.get_name: ' + washington.get_name());
    console.log('washington.says: ' + washington.says());
    console.log('washington.grumble: ' + washington.grumble(5));

    //define a super function to return

    Object.method('super', function (name) {
        var self = this,
            method = self[name];
        return function() {
            return method.apply(self, arguments);
        }
    });

    var lord = function(spec) {
        var self = person(spec),
            get_titled_name = self.super('get_name');
        self.get_name = function(n) {
            return 'Lord ' + get_titled_name();
        };
        return self;
    };

    var wellington = lord({name: 'Wellington'});
    console.log('Wellingtons name ' + wellington.get_name());




})();