function parseCount(count){
    if(isNaN(Number.parseInt(count))){
        throw new Error("Невалидное значение");
    }
    return Number.parseInt(count);
}

function validateCount(count){
    try {
        return parseCount(count);
    } catch (error) {
        return error;        
    }
}

class Triangle{
    constructor(a, b, c){
        if ((a + b) < c || (a + c) < b || (b + c) < a) { 
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter(){
        return this.a + this.b + this.c;
    }

    getArea(){
        let p = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }
}

function getTriangle(a, b, c){
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea() {
                return "Ошибка! Треугольник не существует"
            },
            getPerimeter() {
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}