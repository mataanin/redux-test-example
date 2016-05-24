import {expect} from 'chai';
import * as types from '../constants/ActionTypes'

import reducer from '../reducers/main';

describe('reducer', () => {

  it('handles NEXT_ACTION', () => {

    const action = {type: types.NEXT_ACTION};
    const nextState = reducer({counter: 0}, action);

    expect(nextState).to.eql({counter: 1});

  })

});
