type CallbackObject = {
    callback: Function
    id: String
}

export default class EventDriver {
    id: string;
    data?: any;
    callbacks: Array<CallbackObject>;
    console_log: boolean;

    constructor(props: any) {
        this.id = props.id;
        this.callbacks = [];
        this.console_log = typeof props.console_log === "boolean" ? props.console_log : true;
    }

    subscribe (callback: Function, callback_id?: string) {
        let obj = {
            id: callback_id ? callback_id : "",
            callback
        }
        this.callbacks.push(obj);
    }

    invoke (input?: any, callback_id?: string) {
        this.data = input;
        if (typeof callback_id !== "undefined") {
            var call = this.callbacks.find(call => {call.id === callback_id});
            if (typeof call !== "undefined") {
                call.callback(input);
            }
            else if(this.console_log === true) {
                console.error("ERROR - EventDriver: Invalid callback id.")
            }
        }
        else {
            for(const call of this.callbacks) {
                call.callback(input);
            }
        }
    }
}