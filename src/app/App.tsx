import { createRef } from 'react';
import './App.css';
import {Model, Param} from "../model/paramTypes.ts";
import {ParamEditor} from "../components/ParamEditor/ParamEditor.tsx";

function App() {
    const params: Param[] = [
        { id: 1, name: "Назначение", type: 'string' },
        { id: 2, name: "Длина", type: 'string' }
    ];

    const model: Model = {
        paramValues: [
            { paramId: 1, value: "повседневное" },
            { paramId: 2, value: "макси" }
        ],
        colors: []
    };

    const paramEditorRef = createRef<ParamEditor>();

    const handleGetModel = () => {
        if (paramEditorRef.current) {
            console.log(paramEditorRef.current.getModel());
        }
    };

    return (
        <div>
            <ParamEditor ref={paramEditorRef} params={params} model={model} />
            <button onClick={handleGetModel}>Получить модель</button>
        </div>
    );
}

export default App;
