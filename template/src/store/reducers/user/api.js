import {Get, handleError} from "@/utils/api";
import {fetchOne} from "@/store/reducers/user/actions";

const userApi = {
     getUser:(userId)  => async  dispatch =>  {
        if (!userId) {
            return handleError({ message: 'user ID is required' })
        }
        const { response } = await Get(`users/${userId}`)

        dispatch(fetchOne(response.data))
    }
}


export default userApi
