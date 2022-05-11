import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Key from "./Key";

describe("Given the Key component", () => {
  describe("When it renders receiving a '4', false, false and an action", () => {
    const text = "4";
    const big = false;
    const disabled = false;
    const actionOnClick = jest.fn();
    const expectedText = "4";

    test("Then it should render a button with the text '4'", () => {
      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should render a button width 71px", () => {
      const expectedWidth = "71px";

      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button.prop("width")).toBe(expectedWidth);
    });

    test("Then it should render an enabled button", () => {
      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).not.toBeDisabled();
    });

    test("Then it should call a function", () => {
      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );
      const button = screen.getByRole("button", { name: expectedText });
      userEvent.click(button);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it renders receiving a 'DELETE', true, true and an action", () => {
    const text = "DELETE";
    const big = true;
    const disabled = true;
    const actionOnClick = jest.fn();
    const expectedText = "DELETE";

    test("Then it should render a button with the text 'Hang'", () => {
      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });

    test("Then it should render a button width 142px", () => {
      const expectedWidth = "142px";

      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button.prop("width")).toBe(expectedWidth);
    });

    test("Then it should render an enabled button", () => {
      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeDisabled();
    });

    test("Then it should NOT call a function", () => {
      render(
        <Key
          text={text}
          big={big}
          disabled={disabled}
          actionOnClick={actionOnClick}
        />
      );
      const button = screen.getByRole("button", { name: expectedText });
      userEvent.click(button);

      expect(actionOnClick).not.toHaveBeenCalled();
    });
  });
});
