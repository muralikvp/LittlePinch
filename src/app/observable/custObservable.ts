export class CustObservable {

    subscribers = [];

    constructor(m) {
        setTimeout(() => {
             m(this);
            },
         1000)
    }
    subscribe(method) {
        this.subscribers.push(method);
    }
    next(value) {
        console.log("Next Method " + value);
        this.subscribers.forEach(x => { x(value) })
    }

}
