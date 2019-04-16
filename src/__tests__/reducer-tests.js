import reducer, { initialState } from "../reducer";
import { ReducerAction } from "../types";

describe("konami-reducer", () => {
  it("should update the code on correct input", () => {
      const newState = testSeq(["UpArrow"]);
      expect(newState).toEqual({
          code: ['DownArrow'],
          initialCode: ['UpArrow', 'DownArrow'],
          success: false,
      });
  });

  it("should return success once success is input", () => {
    const finalState = testSeq(['UpArrow','DownArrow']);
    expect(finalState).toEqual({
        code: [],
        initialCode: ['UpArrow', 'DownArrow'],
        success: true,
    });
  });

  it("should reset the code on incorrect input", () => {
      const finalState = testSeq(['UpArrow','UpArrow']);
      expect(finalState).toEqual({
          code: ['UpArrow', 'DownArrow'],
          initialCode: ['UpArrow', 'DownArrow'],
          success: false,
      });
  });

  it("should do nothing once the konami code was input successfully", () => {
      const finalState = testSeq(['UpArrow','DownArrow','UpArrow']);
      expect(finalState).toEqual({
          code: [],
          initialCode: ['UpArrow', 'DownArrow'],
          success: true,
      });
  });

  const testSeq = seq => seq.reduce((accum, x) => {
      return reducer(accum, {type: ReducerAction.KeyUp, payload: x});
  }, initialState(["UpArrow", "DownArrow"]));
});
