# Event Drive
Event subscribing and dispatching manager that allows attaching callbacks, and passing json objects.
## Installation
```bash
npm install @egeonu/event-driver
```
## Usage
### EventDriver
```javascript
import { EventDriver } from '@egeonu/event-driver';
    const event = new EventDriver({action:"test"});
    const callback1 = (input: string) => {
        console.log("1-" + input);
    }

    const callback2 = (input: string) => {
        console.log("2-" + input);
    }

    const callback3 = (input: string) => {
        console.log("3-" + input);
    }

    event.subscribe(callback1);
    event.subscribe(callback2);
    event.subscribe(callback3);
    console.log("Starting tests...");

    event.invoke("test");
```
#### Expected output
1. Starting tests...
2. 1-test
3. 2-test
4. 3-test
## Contributing
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.
Please make sure to update tests as appropriate.
