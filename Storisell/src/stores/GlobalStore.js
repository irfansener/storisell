import { observable } from 'mobx';

class GlobalStore {
    @observable linkData = { "title": "TRENDYOLMİL", "price": "₺39,99", "images": ["https://img-trendyol.mncdn.com/mnresize/415/622/Assets/ProductImages/oa/69/5216809/3/8680651745059_1_org_zoom.jpg", "https://img-trendyol.mncdn.com/mnresize/415/622/Assets/ProductImages/oa/69/5216809/3/8680651745059_2_org_zoom.jpg"] }

    setLinkData(value) {
        this.linkData = value;
    }
}

export default new GlobalStore();