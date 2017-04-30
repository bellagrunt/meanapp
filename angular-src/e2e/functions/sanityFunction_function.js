"use strict";
//" wd " ( WebDriver ) and " baseUrl " are set globally by Protractor
// var webdriver = require('selenium-webdriver');
var sanityPage = {
	get : function() {
		appPage.get( "http://localhost:8100/" );
	},

	// validating home page

	clickOnHome : function() {
		element( by.className( "home" ) ).click();
	},

	validateHome : function() {
		return element( by.css( "h1" ) ).getText();
	},

	// validating listings page

	clickOnInformation : function() {
		element( by.className( "ion-md-information-circle" ) ).click();
	},

	// validating login page

	clickOnLogin : function() {
		element( by.className( "login" ) ).click();
	},

	clickOnEmail : function() {
		element( by.id( "email" ) ).click();
	},

	setEmail : function( param ) {
		element( by.className( "email" ) ).sendKeys( param );
	},

	clickOnNext : function() {
		element( by.id( "next" ) ).click();
	},

	setPassword : function( param ) {
		element( by.className( "password" ) ).sendKeys( param );
	},

	submitLoginForm : function() {
		element( by.className( "submit" ) ).click();
	},

	clickOnAllowAccess : function() {
		element( by.id( "submit_approve_access" ) ).click();
	},

	clickOnLogOut : function() {
		element( by.className( "logout" ) ).click();
	},

	validateLoggedIn : function() {
		return element( by.id( "members-page" ) ).getText();
	},

	validateLoggedOut : function() {
		return element( by.className( "login" ) ).getText();
	},

	logout: function() {
		this.clickOnLogOut();
	},

	login: function() {
		// this.get();
		this.clickOnLogin();
		this.clickOnEmail();
		this.setEmail( "bellagrunt77@gmail.com" );
		this.setPassword( "Recon88!!@@" );
		this.submitLoginForm();
	},

};

module.exports = sanityPage;