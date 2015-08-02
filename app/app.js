import Ember from 'ember';
import DS from 'ember-data';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  Resolver: Resolver,
  ApplicationAdapter: DS.FixtureAdapter
  // ApplicationAdapter: DS.RESTAdapter
});

loadInitializers(App, config.modulePrefix);

export default App;
