import axios from "axios";

export class APIDask {
  static async fetchStudent() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // console.log(response.data);
    return response.data;
  }
  static async fetchPhotos() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );

    return response.data;
  }
}
