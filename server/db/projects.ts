import connection from './connection'

export interface Projects {
  id: number
  name: string
  description: string
  img: string
  link: string
}

export async function getAllProducts(db = connection) {
  return (await db('projects').select(
    'id',
    'name',
    'description',
    'img',
    'link'
  )) as Projects[]
}
