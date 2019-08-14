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
        if (responseServer.status === 400) {
            let responseBody: any;
            responseBody = await responseServer.json();
            console.log(responseBody);
            const response: Response = {message: responseBody.message, errors: {}};
            responseBody.errors.forEach((obj: any) => {
                const fieldName = obj.field.toLowerCase();
                response.errors[fieldName] = obj.message;
            });
            console.log(response);
            responseBody.errors2 = responseBody.error;
            console.log(responseBody as Response);

        }
        return responseServer;
    }
}


