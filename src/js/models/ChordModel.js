import { Model } from 'backbone';

class Chord extends Model {
  defaults() {
    return {
      chord: '',
    };
  }
}

export default Chord;

