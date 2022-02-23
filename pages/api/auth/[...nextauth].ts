import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { inventorsClient } from "../../../lib/client";

type loginCredentials = {
  email: string;
  password: string;
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "email", type: "text", placeholder: "Enter Email" },
          password: { label: "password", type: "password" },
        },
        // @ts-ignore
        async authorize(credentials: loginCredentials) {
          // Add logic here to look up the user from the credentials supplied
          const email = credentials.email;
          const password = credentials.password;
          let user = null;
          try {
            const response = await inventorsClient.post('/auth/login/',  {email, password});
            user = response.data;
          } catch(error) {
            console.error(error);
          }
          if (user) {
            return user;
          } else {
            return null
          }
        },
      })
    ],
    callbacks: {
      async jwt({ token, user, account, profile, isNewUser }) {
        if (account) {
          //@ts-ignore
          token.name = `${user?.user?.first_name} ${user?.user?.last_name}`;
          //@ts-ignore
          token.email = user?.user?.email;
          //@ts-ignore
          token.role = user?.user?.pk;
          token.accessToken = user?.access_token;
          token.refreshToken = user?.refresh_token;
        }
        return token;
      },
      async session({ session, user, token }) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.role = token.role;
        return session;
      },
      redirect({url, baseUrl}) {
        return ("/dashboard");
      }
    }
  })
}