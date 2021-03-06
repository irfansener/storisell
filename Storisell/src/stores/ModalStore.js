import { observable } from 'mobx';

class GlobalStore {
    @observable editModalVisible = false;
    @observable editTextModalVisible = false;
    @observable editTextModalKey = null;
    @observable selectedFontModalVisible = false;
    @observable selectedColorModalVisible = false;

    setEditModalVisible(value, key = null) {
        this.editModalVisible = value;
        if (key) {
            this.editTextModalKey = key;
        }
    }
    setEditTextModalVisible(value, key = null) {
        this.editTextModalVisible = value;
        this.editTextModalKey = key;
    }
    setSelectedFontModalVisible(value) {
        this.selectedFontModalVisible = value;
    }
    setSelectedColorModalVisible(value) {
        this.selectedColorModalVisible = value;
    }
}

export default new GlobalStore();