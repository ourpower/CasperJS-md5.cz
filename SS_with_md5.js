// CasperJS Script generate MD5 screenshots with your entered text
// E.g.: Hello world + integer (1 to 100);

// creating casper instance and setting resolution 
var casper = require("casper").create({
    viewportSize: {
        width: 1024,
        height: 768
    }
});

var name ="Hello world ";  //text to input
var number = 100; // how many times to repeat
var path = 'ss/shot'; // path/name of image to save
var format = '.png';	//image format to save
var n = 1; 	// just a counter

casper.start('http://www.md5.cz/', function() {}).repeat(number, function() {
  	//filling form with data and submitting it
	casper.fill('form[id="frm"]', {what: name + n}, true);
	//waiting for md5    
    this.wait(1500, function() {
        this.capture(path + n + format, undefined);
    	this.echo(n + " PrintScreens is made");
    	n++;
    })
});

// let's go	
casper.run();
