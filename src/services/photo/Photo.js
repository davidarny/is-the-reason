import config from "config";

export class Photo {
    _height = config.image.width;
    _width = config.image.height;
    _url = config.image.url;

    constructor(dimensions) {
        if (!dimensions) {
            return;
        }
        if (dimensions.width) {
            this._width = dimensions.width;
        }
        if (dimensions.height) {
            this._height = dimensions.height;
        }
        this._url = this._url.replace("{height}", this._height).replace("{width}", this._width);
    }

    async getRandomPhoto() {
        this._setTimestamp();
        const data = await fetch(this._url);
        return data.url;
    }

    _setTimestamp() {
        const timestamp = Date.now();
        this._url = this._url.replace("{timestamp}", timestamp);
    }
}
