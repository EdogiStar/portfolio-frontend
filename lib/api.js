const API_URL = (import.meta.env.VITE_API_URL || 'https://portfolio-backend-cfma.onrender.com/api').replace(/\/+$/, '')

async function getCollection(path, label) {
  let response
  try {
    response = await fetch(`${API_URL}/${path}`, {
      headers: { Accept: 'application/json' },
    })
  } catch (error) {
    throw new Error(`Could not connect to the portfolio API for ${label}. Check the backend URL and CORS settings.`, { cause: error })
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch ${label}: ${response.status} ${response.statusText}`)
  }

  const result = await response.json()
  const items = Array.isArray(result) ? result : result?.data
  if (!Array.isArray(items)) {
    throw new Error(`The portfolio API returned an invalid ${label} response.`)
  }
  return items
}

export async function getProjects() {
  return getCollection('projects', 'projects')
}

export async function getSkills() {
  return getCollection('skills', 'skills')
}
