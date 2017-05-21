// @flow

import Alexa from 'alexa-sdk';
import handlers from './handlers';

exports.application = (event: any, context: any): void => {
  const alexa = Alexa.handler(event, context);

  alexa.appId = process.env.ALEXA_APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
