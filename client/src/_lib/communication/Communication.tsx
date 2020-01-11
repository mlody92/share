export class Communication {

    static async executePostAsJson<T>(action: string, values: any): Promise<T> {
        const responseServer = await fetch(action, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: "no-cors",
            body: JSON.stringify(values)
        });
        return responseServer.json();
    }
}


