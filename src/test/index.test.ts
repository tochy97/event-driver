const EventDriver = require("../EventDriver");

it("Test", async () => {
    const event = new EventDriver({action:"test"});
    expect(event.id).toBe("test");
    const callback1 = (input: string) => {
        console.log("1" + input);
    }

    const callback2 = (input: string) => {
        console.log("2" + input);
    }

    const callback3 = (input: string) => {
        console.log("3" + input);
    }

    event.subscribe(callback1);
    event.subscribe(callback2);
    event.subscribe(callback3);
    console.log("Starting tests...");

    event.invoke("test");
})