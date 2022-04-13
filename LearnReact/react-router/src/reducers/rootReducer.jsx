const initialState = {
    cards:[
        {
            id:'1',
            title: 'Alex',
            body:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id:'2',
            title: 'John',
            body:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
            id:'3',
            title: 'Willma',
            body:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }
    ]
}

const rootReducer = (state = initialState, action) => {

    return state;
}

export default rootReducer;