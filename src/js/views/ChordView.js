import { View } from 'backbone';

import Chord from '../models/ChordModel';

class ChordView extends View {
  defaults() {
    return {
      tagName: 'li',
      model: Chord,
    };
  }

  render() {
    this.$el.html(`<li>${this.model.get('chord')}</li>`);
    return this;
  }
}

export default ChordView;

