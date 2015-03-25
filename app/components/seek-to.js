import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  soundcloud: Ember.inject.service(),
  tagName: 'a',
  attributeBindings: ['href'],
  classNames: 'timestamp',
  href: '#',
  milliseconds: Ember.computed('time', function(){
    var seek = moment.duration('0:'+this.get('time')).asSeconds() * 1000;
    return seek;
  }),
  formattedTime: Ember.computed.alias('time'),
  click(e) {
    e.preventDefault();
    this.get('soundcloud').seekTo(this.get('milliseconds'));
    return false;
  }
});
