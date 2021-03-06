import { Pipe } from 'angular2/core';

import {Settings} from "../../settings"

@Pipe({
    name: 'imagePipe'
})
export class ImagePipe {

    transform(value) {
        return Settings.TOKEN == '' ? '' : Settings.URL + "/user/getImage?image=" +value + "&token=" + Settings.TOKEN;
    }

}
