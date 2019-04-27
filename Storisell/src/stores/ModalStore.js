import { observable } from 'mobx';

class GlobalStore {
    @observable editModalVisible = false;
    @observable editTextModalVisible = false;
    @observable editTextModalKey = null;

    setEditModalVisible(value) {
        this.editModalVisible = value;
    }
    setEditTextModalVisible(value, key = null) {
        this.editTextModalVisible = value;
        this.editTextModalKey = key;
    }
}

export default new GlobalStore();