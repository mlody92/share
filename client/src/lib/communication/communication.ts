import {SessionLib} from "./sessionLib";

export class Communication {

    private static DEFAULT_HEADER_REQUEST = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    static async executePostAsJson<T>(action: string, values: any): Promise<T> {
        const responseServer = await fetch(action, {
            method: "POST",
            headers: this.createHeader(),
            body: JSON.stringify(values)
        });
        const response = await responseServer.json();
        if (response.token !== undefined) {
            SessionLib.saveToLocalStorage("token", response.token);
        }
        return response;
    }

    private static createHeader() {
        const headers = this.DEFAULT_HEADER_REQUEST;
        const token = SessionLib.getToken();
        if (token !== null) {
            headers['Authorization'] = 'Bearer ' + token;
        }
        return headers;
    }
}


