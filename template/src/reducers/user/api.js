import { handleError, Get } from '@/utils/api'

export default async (userId) => {
    if (!userId) {
        return handleError({ message: 'user ID is required' })
    }
    const { response } = await Get(`users/${userId}`)

    return response.data
}
