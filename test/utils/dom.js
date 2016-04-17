var _ = require('lodash');
var jsdom = require('jsdom');
var sinon = require('sinon');
var chai = require('chai');
var React = require('react');
var TestUtils = require('react-addons-test-utils');

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;
global.TestUtils = TestUtils;
global.React = React;
global.expect = chai.expect;
