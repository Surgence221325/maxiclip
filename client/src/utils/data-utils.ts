import axios from 'axios'
const baseURL = 'http://localhost:8000/api'

export const getData = async <T>(
  url: string,
  email: string,
  password: string
): Promise<T> => {
  const request = axios.post(baseURL + '/login', {email, password})
  return request.then(res => res.data)
  // const res = await fetch(url, {
  //   method: 'Post',
  //   headers: {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify({ email, password }),
  // })
  //
  // return await res.json()
}
