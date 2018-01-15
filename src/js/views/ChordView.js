/* eslint no-param-reassign: "off" */
/* eslint func-names: "off" */
/* global jtab */

import Backbone from 'backbone';
import * as log from 'loglevel';

import * as closeIcon from '../../img/octicons/x.svg';

const ChordView = Backbone.View.extend({
  tagName: 'div',
  className: 'chord-view',

  events: {
    'change .chord-input': function () {
      // Get element
      const input = this.$el.find('input.chord-input');
      this.model.set('chord', input.val());
      this.render();
      log.info(`chord ${this.index} changed to ${this.model.get('chord')}`);
    },
    'click button.delete-chord': function () {
      this.collection.remove(this.model);
      this.remove();
      log.info(`chord ${this.index} deleted`);
    },
  },

  render() {
    this.$el.html(`
      <div class="col">
        <div class="input-group">
          <input type="text" class="form-control chord-input" value="${this.model.get('chord')}">
          <div class="input-group-append">
            <button type="button" class="btn btn-danger delete-chord">
              <img src="${closeIcon}">
            </button>
          </div>
        </div>
        <div class="chord-guitar-tab chordonly" data-chord-index="${this.index}"></div>
      </div>
    `);

    // Render guitar tab
    jtab.render(this.$el.find('.chord-guitar-tab'), this.model.get('chord'));
    return this;
  },
});

export default ChordView;

