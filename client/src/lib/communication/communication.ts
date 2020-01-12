export class Communication {

    static async executePostAsJson<T>(action: string, values: any): Promise<T> {
        let currentUserSubject: any;
        const key = 'token';
        const item = sessionStorage.getItem("currentUser");
        if (item !== null) {
            currentUserSubject = JSON.parse(item);
        }


        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const authKey = 'Authorization';
        if (currentUserSubject !== undefined) {
            headers[authKey] = 'Bearer ' + currentUserSubject[key];
        }

        const responseServer = await fetch(action, {
            method: "POST",
            headers,
            body: JSON.stringify(values)
        });
        const promise = await responseServer.json();

        sessionStorage.setItem("currentUser", JSON.stringify(promise));
        return promise;
    }
}


