export default function characters(state=[], action) {

    switch (action.type) {
        case 'GET_CHARACTERS':
            console.log(action);
            return action.payload.characters;
        default:
            return state;
        
    }
}