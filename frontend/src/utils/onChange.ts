import {ChangeEvent} from "react";

export const onChange = (fn: (value: string) => void) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    fn(value);
}