import { Collection } from 'backbone';

import Chord from '../models/ChordModel';

class ChordsCollection extends Collection {
  defaults() {
    return {
      model: Chord,
    };
  }

  constructor(options, models = []) {
    super(models, options);
  }
}

export default ChordsCollection;

