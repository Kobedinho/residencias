// __test__/HeadPane-test.js
import expect from 'expect.js';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import {renderShallow, shallow, isComposite, findNodeByTag, simulate} from '../../../test_helper';
import Login from '../../../../src/js/components/Login';

describe('Login_test', () => {
	it('should render a component (Login) ', () => {
	    const login = shallow(<Login/>);
	    const composite = isComposite(login);	    
	});
});
