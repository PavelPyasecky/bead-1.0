import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    const status = "First status.";

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status={status}/>)
        const instance = component.getInstance();
        expect(instance.state.status).toBe(status)
    })

    test("`after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={status}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span).toBeTruthy()
    })

    test("after creation <span> shouldn't be null", () => {
        const component = create(<ProfileStatus status={status}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    })

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status={status}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        expect(span.children[0]).toBe(status);
    })

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={status}/>);
        const root = component.root;
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            let input = root.findByType("input");
        }).toThrow();
    })

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={status}/>);
        const root = component.root;
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span");
        span.props.onDoubleClick();
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType("input");
        expect(input.props.value).toBe(status)
    })

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={status} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})
