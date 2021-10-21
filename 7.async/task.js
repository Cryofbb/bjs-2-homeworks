class AlarmClock{
    constructor(alarmCollection = []) {
        this.alarmCollection = alarmCollection;
        this.timerId = null;
    }
    addClock(time, callBack, id){
        if (id === undefined) throw new Error('Параметр ID не передан');
        if (this.alarmCollection.some(element => {return element.id === id})) return console.error('ID уже существует');
        this.alarmCollection.push({id, time, callBack});
    }
	
    removeClock(id){
        let temp = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(element => element.id != id);
        return !(temp === this.alarmCollection.length);
    }

    getCurrentFormattedTime(){
        let hours = ('0'+ new Date().getHours()).slice(-2);
        let mins = ('0'+ new Date().getMinutes()).slice(-2);
        return (hours + ':' + mins);
    }

    start() {
        let tmp = this;
        function checkClock(alarm) {
            if (alarm.time === tmp.getCurrentFormattedTime()) alarm.callBack();
        }
        if (this.timerId === null) this.timerId = setInterval(() => {this.alarmCollection.forEach(element => checkClock(element))}, 5000);
    }

    stop(){
        if (this.timerId != null) clearInterval(this.timerId); this.timerId = null;
    }

    printAlarms(){
        this.alarmCollection.forEach(element => console.log (`Будильник с ID:${element.id} установлен на ${element.time}`));
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`)
    }

    clearAlarms(){
        stop();
        this.alarmCollection = [];
    }
}