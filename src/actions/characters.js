import api from '../services/api';
import { apiKey } from '../services/constants';

export const getCharacters = () =>{

    return async (dispatch) => {
        return api({
            method: 'get',
            url: "characters?apikey="+apiKey,
            headers: {
                "Content-Type": "application/json",
            },
            })  
            .then((response) => {
                console.log(response);
                dispatch(getCharactersSuccess(response.data));
            })
            .catch((error) => {
                // Handle returned errors here
                console.log(error)
                //apiUtils.handleError(error);
                console.log(error.response);
                console.log(error);
                dispatch();
            });
    }
}


export const getContactListsSuccess = (characters) => {
    return {
        type: 'GET_CHARACTERS',
        payload:{
            characters
        }
    }
}
