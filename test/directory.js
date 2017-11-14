var expect  = require("chai").expect;
var request = require("request");
var nock = require('nock');
var entries = require("../rest/models/contactModel");

describe("Directory Test Case", function() {
	beforeEach(function(){
		var krishna = {
			"name": "Krishna",
			"phone": 87878
		};
		nock('http://glarimy.com').get('/employees/Krishna').reply(200, krishna);
	});

    it("finds count", function() {
    	expect(entries.length).to.equal(3);
    });

    var url = "http://localhost:8080/contact/Krishna";
    it("returns status 200", function(done) {
    	request(url, function(error, response, body) {
        	expect(response.statusCode).to.equal(200);
        	done();
      	});
    });

    it("adds a contact", function(done){
		request.post({
		  	headers: {'content-type' : 'application/json'},
		  	url: 'http://localhost:8080/contact',
		  	body: '{"name":"KKM", "phone":9090}'
		}, function(error, response, body){
		  	expect(response.statusCode).to.equal(201);
		  	console.log(response.headers);
		  	expect(response.headers.location).to.equal("/contact/KKM");
		  	done();
		});
    })
});