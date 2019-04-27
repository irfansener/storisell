import { observable } from 'mobx';

class GlobalStore {
    @observable linkData = {

    };

    setLinkData(value) {
        this.linkData = value;
    }
}

export default new GlobalStore();