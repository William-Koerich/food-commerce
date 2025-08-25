import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { SnackData } from '../interfaces/SnackData'

type DbFile = {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  'ice-creams': SnackData[]
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || '',
  timeout: 5000, // evita ficar pendurado eternamente
})

const DB_URL = '/db.json'

const PATH_TO_KEY: Record<string, keyof DbFile> = {
  '/burgers': 'burgers',
  '/pizzas': 'pizzas',
  '/drinks': 'drinks',
  '/ice-creams': 'ice-creams',
}

async function fromLocal<K extends keyof DbFile>(
  key: K,
  originalConfig?: AxiosRequestConfig
): Promise<AxiosResponse<DbFile[K]>> {
  const resp = await axios.get<DbFile>(DB_URL)
  return {
    data: resp.data[key],
    status: 200,
    statusText: 'OK',
    headers: resp.headers,
    // Mantém forma "AxiosResponse" pra você usar do mesmo jeito
    config: { ...(originalConfig || {}), url: (originalConfig?.url ?? String(key)), method: 'get' },
    request: resp.request,
  }
}

async function getWithFallback(path: keyof typeof PATH_TO_KEY): Promise<AxiosResponse<SnackData[]>> {
  // Se não tiver baseURL configurada, já usa local
  if (!api.defaults.baseURL) {
    return fromLocal(PATH_TO_KEY[path], { url: path, method: 'get' })
  }

  try {
    return await api.get<SnackData[]>(path)
  } catch {
    // Qualquer falha na API => usa db.json
    return fromLocal(PATH_TO_KEY[path], { url: path, method: 'get' })
  }
}

export const getBurgers = () => getWithFallback('/burgers')
export const getPizzas = () => getWithFallback('/pizzas')
export const getDrinks = () => getWithFallback('/drinks')
export const getIceCreams = () => getWithFallback('/ice-creams')

export default api