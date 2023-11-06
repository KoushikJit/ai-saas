import { Account, AuthOptions, Awaitable, Profile, Session, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";
import { CredentialInput } from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ],
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        signIn: signInCallback,
        // session: sessionCallback,
        // jwt: jwtCallback,
    },
}

function signInCallback(params: { user: User | AdapterUser; account: Account | null; profile?: Profile | undefined; email?: { verificationRequest?: boolean | undefined; } | undefined; credentials?: Record<string, CredentialInput> | undefined; }) {
    console.log("sign in callback!")
    return true;
}
function sessionCallback(params: { session: Session; token: JWT; user: User | AdapterUser; }) {
    console.log("Session CALLBACK!")
    return params.session;
}

function jwtCallback(params: { token: JWT; user: User | AdapterUser; account: Account | null; profile?: Profile | undefined; trigger?: "signIn" | "signUp" | "update" | undefined; isNewUser?: boolean | undefined; session?: any; }): Awaitable<JWT> {
    console.log("JWT CALLBACK!")
    return params.token;
}

