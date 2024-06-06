import counter from "../../store/counter.ts";
import {observer} from "mobx-react-lite";

export const MainPage = observer(() => {
    return (
        <div>
            <p>count: {counter.count}</p>
            <button onClick={() => counter.increment()}>Click me</button>
        </div>
    );
});