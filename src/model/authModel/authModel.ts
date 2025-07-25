export interface signUpType {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    university: string,
    major: string,
    year: string,
    agreeToTerms: boolean,
    agreeToNewsletter: boolean
}

export interface signUpProfile {
    id: string | undefined
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    university: string,
    major: string,
    year: string,
    agreeToTerms: boolean,
    agreeToNewsletter: boolean
}


export interface loginType {
    email: string,
    password: string,
}