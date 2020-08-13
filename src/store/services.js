import axios from "axios"
import {
  FREE_DOG_API_USERNAME,
  FREE_DOG_API_PASSWORD
} from "react-native-dotenv"
const dogAPI = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const freeDogAPI = axios.create({
  baseURL: "https://dog.ceo/api",
  auth: { username: FREE_DOG_API_USERNAME, password: FREE_DOG_API_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogapi_get_breeds_image_random_read() {
  return dogAPI.get(`/breeds/image/random`)
}
function freedogapi_get_breeds_image_random_read() {
  return freeDogAPI.get(`/breeds/image/random`)
}
export const apiService = {
  dogapi_get_breeds_image_random_read,
  freedogapi_get_breeds_image_random_read
}
