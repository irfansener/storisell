import { observable } from 'mobx';

class GlobalStore {
    @observable linkData = null;

    setLinkData(value) {
        this.linkData = value;
    }
}

export default new GlobalStore();