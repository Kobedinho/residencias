import TestUtils from 'react-addons-test-utils';

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};


var test_helper = {

	renderShallow:function(component) {
		const renderer = TestUtils.createRenderer();
		renderer.render(component);
		return renderer.getRenderOutput();
	},
	// render in document
	shallow:function(component) {
		const renderer = TestUtils.renderIntoDocument( component );
		return renderer
	},
	// render in document
	isComposite:function(component) {
		return TestUtils.isCompositeComponent(component);
	},
	// find single node
	findNodeByTag:function(component,tag){
		return TestUtils.findRenderedDOMComponentWithTag(component, tag);
	},
	// find all nodes -- return array
	findAllNodeByTag:function(component,tag){
		return TestUtils.scryRenderedDOMComponentsWithTag(component, tag);
	},
	// simulate event
	simulate:function(component,event,params){
		switch(event){
			case 'change' : TestUtils.Simulate.change(component); break;
			case 'keyDown' : TestUtils.Simulate.keyDown(component, params); break;
		}
	}
}
module.exports = test_helper;