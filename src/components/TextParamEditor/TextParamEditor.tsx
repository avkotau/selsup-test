import React from "react";
import styles from "./TextParamEditor.module.css";
import {Param} from "../../model/paramTypes.ts";

interface TextParamEditorProps {
    param: Param;
    value: string;
    onChange: (value: string) => void;
}

export const TextParamEditor: React.FC<TextParamEditorProps> = ({ param, value, onChange }) => (
    <div className={styles.container}>
        <label htmlFor={`param-${param.id}`} className={styles.label}>
            {param.name}
        </label>
        <input
            id={`param-${param.id}`}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Введите ${param.name}`}
            className={styles.input}
        />
    </div>
);
