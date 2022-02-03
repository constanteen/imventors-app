import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { inventorsClient } from "../../../lib/client";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    //   profile(profile) {
    //     return {
    //       // Return all the profile information you need.
    //       // The only truly required field is `id`
    //       // to be able identify the account when added to a database
    //     }
    //   },
    // }),
    CredentialsProvider({
      name: "Credentials",
      async authorize({email, password}) {
        // Add logic here to look up the user from the credentials supplied
        try {
          const response = await inventorsClient.post('/auth/login/',  {email, password});
          console.log(response);
        } catch(error) {
          console.error(error.response.data);
        }
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null
          
        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter        
        // }
      }
    })
  ],
})