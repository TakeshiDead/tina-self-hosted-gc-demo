import { AbstractAuthProvider } from 'tinacms';
import { Collection, LoginStrategy } from '@tinacms/schema-tools';

export class GoogleAuthProvider extends AbstractAuthProvider {
  constructor() {
    super()
    // Do any setup here
  }
  async authenticate(props?: {}): Promise<any> {
    // Do any authentication here
  }
  getToken(
  ) {
    // Return the token here. The token will be passed as an Authorization header in the format `Bearer <token>`
  }
  async getUser() {
    // Returns a truthy value, the user is logged in and if it returns a falsy value the user is not logged in.
  }
  logout() {
    // Do any logout logic here
  }
  async authorize(context?: any): Promise<any> {
    // Do any authorization logic here
  }
  //@ts-ignore
  getSessionProvider() {
    // GetSessionProvider can be deleted if not needed
    // OPTIONALLY Return a React context provider to that will wrap the admin
  }
}