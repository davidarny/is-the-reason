import PhotoService from "services/photo";
import config from "config";

export class Main {
    _services = {
        photo: new PhotoService({
            width: config.image.width,
            height: config.image.height,
        }),
    };

    constructor(setter) {
        this._setState = setter;
    }

    onImageRefresh = async () => {
        const url = await this._services.photo.getRandomPhoto();
        this._setState({ image: url, loading: false });
    };

    onIconMouseOver = () => {
        this._setState({ background: "#f4f4f4", shadow: "0px 120px 128px 0px rgba(0, 0, 0, 0.22)" });
    };

    onIconMouseLeave = () => {
        this._setState({ background: "white", shadow: "none" });
    };
}
