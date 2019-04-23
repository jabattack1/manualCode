//ajax call to get data and iterate though it to append html with data
$('.comment-list').html('Loading...');

$.ajax({
        type: 'GET',
        url:'./data/users.json',
        data: JSON.stringify,
        dataType: "json",
        success:function(data){
            console.log('success');

            setTimeout(function(){
            $('.comment-list').html(data).css("display", "block");
            $.each(data.users, function(index, element) {
                var html = '<div class=\'comment-item_username\'>'+element.Name+'</div>';
                    html += '<div class=\'comment-item_message\'>'+element.Message+'</div>';
            $('.comment-list').append(html); 
            });
            },1000);
        },
        error : function(e) {
            console.info("Error");
        },
        done : function(e) {
            console.info("DONE");
        }
});



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



// return matching values in multiple arrays
  var result = newArray.shift().filter(function(v) {
        return newArray.every(function(a) {
            return a.indexOf(v) !== -1;
        });
    });



// get total of array
var total = nums.reduce((a, b) => a + b, 0)




//get only unique arrays of an array
[...new Set(final.map(v => JSON.stringify(v)))].map(v => JSON.parse(v));








