import { faker } from '@faker-js/faker'

export type User = {
  id: number
  name: string
  company: string
  jobTitle: string
  jobArea: string
  avatar: string
  isActive: boolean
}

function generateFakeUser(id: number): User {
  const num = Math.floor(Math.random() * 3)
  const src = `../assets/images/user-${num}.jpg`
  const avatar = new URL(src, import.meta.url).href

  return {
    id,
    name: faker.person.fullName(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    jobArea: faker.person.jobArea(),
    avatar,
    isActive: !!Math.floor(Math.random() * 2)
  }
}

export function generateFakeUsers(qty: number): Promise<User[]> {
  const users = []
  for (let i = 0; i < qty; ++i) {
    users.push(generateFakeUser(i))
  }
  return Promise.resolve(users)
}
