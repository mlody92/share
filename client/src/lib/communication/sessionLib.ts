export class SessionLib {
    private static SESSION_KEY: string = "arokis";

    static getSessionFromLocalStorage(key: string): string | null {
        return localStorage.getItem(this.SESSION_KEY + "-" + key);
    }

    static getToken(): string | null {
        return this.getSessionFromLocalStorage("token");
    }

    static saveToLocalStorage(key: string, value: string) {
        localStorage.setItem(this.SESSION_KEY + "-" + key, value);
    }
}


