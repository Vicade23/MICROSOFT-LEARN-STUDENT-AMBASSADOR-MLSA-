import { supabase } from "../lib/supaBaseClient";
import { loginType, signUpProfile, signUpType } from "../model/authModel/authModel";

export const Auth = {
    
    signUp: async (data: signUpType) => {
        return await supabase.auth.signUp({
            email: data?.email,
            password: data?.password,
        })
    },

    authProfile: async (details: signUpProfile) => {
        console.log(details)
        await supabase.from('signup_profile').insert([
            details,
        ]).then(response => {
            console.log(response)
        })

    },
    
    login: async (data: loginType) => {
        return await supabase.auth.signInWithPassword({
            email: data?.email,
            password: data?.password,
        })
    },
}