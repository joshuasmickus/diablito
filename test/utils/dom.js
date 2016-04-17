var jsdom = require('jsdom');
var sinon = require('sinon');
var chai = require('chai');

global.chai = chai;
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.sinon = sinon;
global.window = document.defaultView;
global.navigator = global.window.navigator;
 
