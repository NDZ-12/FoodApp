import { sum } from "../components/sum";

describe("Sum Test", () => {
  test("Sum duncation should calculate the sum of two number", () => {
    const result = sum(3, 4);

    //Asseration
    expect(result).toBe(7);
  });
});
