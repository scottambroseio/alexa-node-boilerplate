// @flow

import firstAction from './first-action';
import secondAction from './second-action';

const handlers = {
  'first-action': firstAction,
  'second-action': secondAction
};

exports = handlers;
