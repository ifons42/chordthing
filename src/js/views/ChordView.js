/* eslint no-param-reassign: "off" */
/* eslint func-names: "off" */
/* global jtab */

import Backbone from 'backbone';
import * as log from 'loglevel';

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
  },

  render() {
    this.$el.html(`
      <div class="col">
        <form>
          <div class="form-group">
            <input type="text" class="form-control chord-input" value="${this.model.get('chord')}">
          </div>
        </form>
        <div class="chord-guitar-tab chordonly" data-chord-index="${this.index}"></div>
      </div>
    `);

    // Render guitar tab
    jtab.render(this.$el.find('.chord-guitar-tab'), this.model.get('chord'));
    return this;
  },
});

export default ChordView;

