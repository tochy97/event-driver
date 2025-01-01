import EventDriver from "../../lib/src/index.js"
it("Test", () => {
    const event = new EventDriver({action:"action"});
    expect(event.id).toBe("action");
    const callback1 = (input: any) => {
        console.log("1-" + input.text);
    }

    const callback2 = (input: any) => {
        console.log("2-" + input.text);
    }

    const callback3 = (input: any) => {
        console.log("3-" + input.text);
    }

    event.subscribe(callback1);
    event.subscribe(callback2);
    event.subscribe(callback3);
    console.log("Starting tests...");

    event.invoke({text: "test"});
})