export const Storage = {
    accessToken: () => {
        const jsonToken: any = localStorage.getItem('sb-zxeckrmzphdqrunwgiqy-auth-token')
        const token = JSON.parse(jsonToken)?.accessToken;
        return token;
    }
}