import { compare } from 'bcryptjs'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import connectDB from '../../../../lib/db'
import User from '../../../../models/user'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          await connectDB()

          const user = await User.findOne({
            email: credentials?.email
          })

          if (!user) {
            throw new Error("Invalid credentials")
          }

          const isPasswordCorrect = await compare(credentials!.password, user.password)

          if (!isPasswordCorrect) {
            throw new Error("Invalid credentials")
          }

          return user
        } catch (error) {
          console.log(error);

        }

      }
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
    session: async ({ session, token }) => {
      const user = token.user
      session.user = user

      return session
    }
  }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };