import reducer, { initialState } from "../reducer";
import { ReducerAction } from "../types";

describe("konami-reducer", () => {
  it("should update the code on correct input", () => {
      const newState = testSeq([1]);
      expect(newState).toEqual({
          code: [2],
          initialCode: [1,2],
          success: false,
      });
  });

  it("should return success once success is input", () => {
    const finalState = testSeq([1,2]);
    expect(finalState).toEqual({
        code: [],
        initialCode: [1,2],
        success: true,
    });
  });

  it("should reset the code on incorrect input", () => {
      const finalState = testSeq([1,1]);
      expect(finalState).toEqual({
          code: [1,2],
          initialCode: [1,2],
          success: false,
      });
  });

  it("should do nothing once the konami code was input successfully", () => {
      const finalState = testSeq([1,1]);
      expect(finalState).toEqual({
          code: [1,2],
          initialCode: [1,2],
          success: false,
      });
  });

  const testSeq = seq => seq.reduce((accum, x) => {
      return reducer(accum, {type: ReducerAction.KeyUp, payload: x});
  }, initialState([1, 2]));
});
