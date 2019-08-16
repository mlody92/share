import {Response} from "./Response";

export class Communication {
    static async executePostAsJson(action: string, values: any) {
        const responseServer = await fetch(action, {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json"
            }),
            body: JSON.stringify(values)
        });
        return await responseServer.json() as Response;
    }
}


