// __test__/HeadPane-test.js
import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import test_helper from '../../../test_helper';
import ServerConnection from '../../../../src/js/util/ServerConnection';
import Call from '../../../../src/js/components/Call';
import Caller from '../../../../src/js/components/Caller';
import CallerList from '../../../../src/js/components/CtiList';

describe('Call_test', () => {
	it('should render a component (Call) ', () => {
	    const call = test_helper.shallow(<Call/>);
	    let composite = test_helper.isComposite(call);
	    //expect(true).toBeTruthy();
	    console.log('END CALL composite -- ',composite);
	    expect(composite).to.be.ok();
	});

	it('should render a component (CallerList) ', () => {
	    const clist = test_helper.shallow(<CallerList/>);
	    let composite = test_helper.isComposite(clist);
	    //expect(true).toBeTruthy();
	    console.log('END CallerList composite -- ',composite);
	    expect(composite).to.be.ok();
	});

	it('change the subject -- Call ', () => {
		const call = test_helper.shallow(<Call/>);
	    const inputNode = test_helper.findNodeByTag(call,'input');
	    const defaultContent = inputNode.value;
	    const addContent = ' -- 0998798798 :) ';
		inputNode.value = inputNode.value + addContent;
		test_helper.simulate(inputNode,'change',{});
		test_helper.simulate(inputNode,'keyDown',{key: "Enter", keyCode: 13, which: 13});
		expect(inputNode.value).to.be(defaultContent + addContent);
		console.log(" END -- change the subject -- Call ");
	});
});
