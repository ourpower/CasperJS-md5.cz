// Script is cheking MD5 
// and if it is correct for entered text

//creating casper instance with debugging
var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});
//text to enter
var text = "Hello World"; 
//expected MD5 from text
var result = "b10a8db164e0754105b7a99be72e3fe5"; 

casper.start('http://www.md5.cz', function() {
	//filling form with text and submiting
	casper.fill('form[id="frm"]',{what:text}, true);
	//waiting for md5 to be generated
	this.wait(1500, function() {
		//saving generated MD5	
	    var md5 = this.evaluate(function() {return __utils__.getFieldValue('checksum');});
	    //compare
	    if (String(md5) === result) {
			this.echo("OK! result is as expected");
		} else {
			this.echo("Something went wrong, text is not as expected");
		};
	});

});

casper.run();