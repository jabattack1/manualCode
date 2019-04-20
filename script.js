//remove all instances of value
Array.prototype.remove = function() {
     var what, a = arguments, L = a.length, ax;
     while (L && this.length) {
         what = a[--L];
         while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

var ary = ['three', 'seven', 'eleven'];

ary.remove('seven');

/*  returned value: (Array)
three,eleven
*/


//remove instances of value
Array.prototype.remove = function() {
    var what 
    var a = arguments 
    var L = a.length
    var ax;
    while (L && this.length) {
        what = a[--L];
        if((ax = this.indexOf(what)) !== -1){
        this.splice(this.indexOf(what), 1);
        }
    }
    return this;
};