import {
  ADD_TODO,
  CLEAR_COMPLETED,
  COMPLETE_ALL,
  COMPLETE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "../../constants/actions";

import {
  addTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo,
  editTodo,
} from "../todos";

describe("Todos Actions", () => {
  describe("addTodo", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: ADD_TODO,
      };

      expect(addTodo()).toEqual(expectedResult);
    });
  });

  describe("clearCompleted", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: CLEAR_COMPLETED,
      };

      expect(clearCompleted()).toEqual(expectedResult);
    });
  });

  describe("completeAll", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: COMPLETE_ALL,
      };

      expect(completeAll()).toEqual(expectedResult);
    });
  });

  describe("completeTodo", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: COMPLETE_TODO,
      };

      expect(completeTodo()).toEqual(expectedResult);
    });
  });

  describe("deleteTodo", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: DELETE_TODO,
      };

      expect(deleteTodo()).toEqual(expectedResult);
    });
  });

  describe("editTodo", () => {
    it("should return correct type", () => {
      const expectedResult = {
        type: EDIT_TODO,
      };

      expect(editTodo()).toEqual(expectedResult);
    });
  });
});
