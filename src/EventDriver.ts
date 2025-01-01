export default class EventDriver {
    id: string;
    data?: any;
    self: HTMLElement;
    event: Event;

    constructor(props: any) {
        this.id = props.action;
        this.self = document.createElement("div");
        this.self.id = this.id;
        this.event = new CustomEvent(this.id)
    }

    subscribe (callback: Function) {
        this.self.addEventListener(
            this.id,
            (e: any) => {
                if (typeof callback === "function") {
                    callback(this.data);
                }
            }
        )
    }

    invoke (input?: any) {
        this.data = input;
        this.self.dispatchEvent(this.event);
    }
}