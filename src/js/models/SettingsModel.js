import { Model } from 'backbone';

class Settings extends Model {
  defaults() {
    return {
      name: '',
      instrument: 'acoustic_guitar_nylon',
    };
  }
}

export default Settings;

