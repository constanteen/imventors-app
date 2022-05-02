import { AxiosResponse } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { inventorsClient } from "../../../lib/client";

type loginCredentials = {
  username: string;
  password: string;
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        // @ts-ignore
        async authorize(credentials: loginCredentials) {
          // Add logic here to look up the user from the credentials supplied
          const username = credentials.username;
          const password = credentials.password;
          let user = null;
          try {
            const response = await inventorsClient.post('/login/',  { username, password });
            user = response.data;
          } catch(error) {
            console.error(error);
            return;
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
      async jwt({ token, user, account }) {
        if (account) {
          token.role = user?.is_inventor ? "inventor" : "investor";
          token.accessToken = user?.token;
        }
        return token
      },
      async session({ session, token }) {
        session.accessToken = token.accessToken;
        session.role = token.role;
        return session;
      },
    },
    pages: {
      signIn: '/auth/login',
      error: '/auth/login',
    },
  })
}