function testCase() {
    clock = new AlarmClock();
    clock.addClock("10:01", () => console.log(`Add clock`), 1);
    clock.addClock("10:02", () => {console.log(`Add clock and then remove`); clock.removeClock(2)}, 2);

    clock.addClock("10:03", () => {
        console.log(`stop+clear+check alarms`);
        clock.stop();
        clock.clearAlarms();
        clock.printAlarms();
    }, 3);

    clock.printAlarms();

    clock.start();
}

testCase();