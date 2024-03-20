export function bannerReducer(state, action, toRotate, period) {
    switch (action.type) {
        case 'TICK':
            let i = state.loopNum % toRotate.length;
            let fullText = toRotate[i];
            let updatedText = state.isDeleting ? fullText.substring(0, state.text.length - 1) : fullText.substring(0, state.text.length + 1);

            let nextState = {
                ...state,
                text: updatedText,
            };

            if (state.isDeleting) {
                nextState.delta = state.delta / 2;
            }

            if (!state.isDeleting && updatedText === fullText) {
                nextState.isDeleting = true;
                nextState.index = state.index - 1;
                nextState.delta = period;
            } else if (state.isDeleting && updatedText === '') {
                nextState.isDeleting = false;
                nextState.loopNum = state.loopNum + 1;
                nextState.index = 1;
                nextState.delta = 500;
            } else {
                nextState.index = state.index + 1;
            }

            return nextState;
        default:
            return state;
    }
}
