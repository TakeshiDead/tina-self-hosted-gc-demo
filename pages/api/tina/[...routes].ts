import { TinaNodeBackend, LocalBackendAuthProvider } from "@tinacms/datalayer";
import { TinaAuthJSOptions, AuthJsBackendAuthProvider } from "tinacms-authjs";
import databaseClient from "../../../tina/__generated__/databaseClient";
import GoogleProvider from "next-auth/providers/google"

const isLocal = process.env.TINA_PUBLIC_IS_LOCAL == 'true';

export const NextAuthOptions = TinaAuthJSOptions({
  databaseClient: databaseClient,
  debug: process.env.DEBUG === 'true',
  secret: process.env.NEXTAUTH_SECRET || '',
  uidProp: 'name',
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    })
  ]
})

const handler = TinaNodeBackend({
  authProvider: isLocal
    ? LocalBackendAuthProvider()
    : AuthJsBackendAuthProvider({
        authOptions: TinaAuthJSOptions({
          databaseClient: databaseClient,
          secret: process.env.NEXTAUTH_SECRET!,
        }),
      }),
  databaseClient
});

export default (req, res) => {
  // Modify the request here if you need to
  return handler(req, res);
};
