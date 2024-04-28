import { api } from "./api";
import { Constants } from "../utils/constants";


export const getBanners = () => {
    return api.get(Constants.URL, {}, {
        headers: {
            "content-type": "application/json"
        }
    })
}

export const loginApi = (data) => {
    return api.post(Constants?.URL?.login, JSON.stringify(data), {
        headers: {
            "content-type": "application/json"
        }
    })
}

export const register = (data) => {
    return api.post(Constants?.URL?.register, JSON.stringify(data), {
        headers: {
            "content-type": "application/json"
        }
    })
}

export const changeBannerStatus = (id, status) => {
    return api.post(Constants.URL, JSON.stringify({
        bannerId: id,
        status: status
    }), {
        headers: {
            "content-type": "application/json"
        }
    })
}

export const deleteBanner = (bannerId) => {
    return api.post(Constants.URL, { bannerId }, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
}