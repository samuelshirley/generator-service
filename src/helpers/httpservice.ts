import axios from 'axios';

export default class httpservice {
  async getUUID() {
    axios.get('https://httpbin.org/uuid').then((res) => {
      let uuid = res.data.uuid;
      console.log(uuid);
      return uuid;
    });
  }
}
