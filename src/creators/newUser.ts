import Httpservice from '../helpers/httpservice';

interface User {
  email: string;
  name: string;
  likesDogs: boolean;
  uuid: any;
}

export default class newUser {
  user: User;
  httpservice: Httpservice;

  constructor(email: string, name: string, likesDogs: boolean) {
    this.httpservice = new Httpservice();
    this.user = {
      email: email,
      name: name,
      likesDogs: likesDogs,
      uuid: '',
    };
  }

  async createUser() {
    this.user.uuid = await this.httpservice.getUUID();
    return await this.user;
  }
}
