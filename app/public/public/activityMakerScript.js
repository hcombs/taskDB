var global = {
    todo:[],
    done:[]
};

const compose = (a,b) =>{
    return (...args) =>{
        return a(b(...args));
    }
};

const composeAll =(...fns) => fns.reduce(compose);