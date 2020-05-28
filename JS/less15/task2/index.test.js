import { createCalculator} from './index.js';

it("should get sum of two numbers", () => {
    const calc1 = createCalculator();
    calc1.add(20);
    expect(calc1.add(10)).toEqual(30);
});

it("should get decrease", () => {
    const calc1 = createCalculator();
    calc1.add(40);
    calc1.decrease(5);
    expect(calc1.decrease(5)).toEqual(30);
});

it("should get independence calc", () => {
    const calc1 = createCalculator();
    const calc2 = createCalculator();
    calc1.add(40);
    calc1.decrease(5);
    expect(calc2.decrease(5)).toEqual(-5);
});