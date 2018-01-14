/* eslint no-param-reassign: "off" */
/* global jtab */

import { View } from 'backbone';

class ChordView extends View {
  constructor(options) {
    options.tagName = 'div';
    super(options);
  }

  render() {
    this.$el.html(`
      <div class="col">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" value="${this.model.get('chord')}">
          </div>
        </form>
        <div class="chord-guitar-tab chordonly" data-chord-index="${this.index}"></div>
      </div>
      `);

    // Render guitar tab
    jtab.render($(`div.chord-guitar-tab[data-chord-index="${this.index}"]`), this.model.get('chord'));
    return this;
  }
}

export default ChordView;

