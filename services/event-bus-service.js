function on(eventName, listener) {

    // console.log("Dam")
    const callListener = ({ detail }) => {
        listener(detail);
    };

    window.addEventListener(eventName, callListener);
    // window.addEventListener('mouseover',() => {});

    return () => {
        window.removeEventListener(eventName, callListener);
    };
}

function emit(eventName, data) {
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
}

export const eventBusService = { on, emit };


// For development only~
window.myBus = eventBusService;

























