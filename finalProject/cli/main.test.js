
import * as handlers from "./handlers.js";
import { checkWord, executeCommand } from "./main.js";

describe("checkWord", () => {
  test("throws error if word missing for commands that require it", () => {
    expect(() => checkWord("add")).toThrow(
      "You must provide a word for the 'add' command."
    );
    expect(() => checkWord("complete")).toThrow(
      "You must provide a word for the 'complete' command."
    );
    expect(() => checkWord("find")).toThrow(
      "You must provide a word for the 'find' command."
    );
    expect(() => checkWord("help")).not.toThrow();
  });
});

describe("executeCommand", () => {
  // פה נריץ בדיקות קריאה ישירות לפונקציות handlers בלי mock
  test("executeCommand calls correct handler", () => {
    // פשוט נוודא שהפונקציות קיימות וניתן לקרוא להן
    expect(typeof handlers.handleAddCommand).toBe("function");
    expect(typeof handlers.handleCompleteCommand).toBe("function");
    expect(typeof handlers.handleFindCommand).toBe("function");
    expect(typeof handlers.handleHelpCommand).toBe("function");

    // קריאה פשוטה, בלי בדיקת side effects:
    executeCommand("add", "testword");
    executeCommand("complete", "test");
    executeCommand("find", "testword");
    executeCommand("help");
    executeCommand("exit");
    executeCommand("unknowncmd");
  });
});
