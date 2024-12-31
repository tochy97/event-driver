import { EventDriver } from "./EventDriver";
it("Test", async () => {
    const event = new EventDriver({action:"test"});
    expect(event.id).toBe("test");
})