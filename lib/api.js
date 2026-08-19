const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`)

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`)
  }

  const result = await response.json()

  return result.data || []
}