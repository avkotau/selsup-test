import React from 'react';
import { TextParamEditor } from "../TextParamEditor/TextParamEditor.tsx";
import { Model, Param, ParamValue } from "../../model/paramTypes.ts";
import styles from "./ParamEditor.module.css";

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    values: { [key: number]: string };
}

export class ParamEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const values: { [key: number]: string } = {};
        props.params.forEach(param => {
            const found = props.model.paramValues.find(pv => pv.paramId === param.id);
            values[param.id] = found ? found.value : '';
        });
        this.state = { values };
    }

    private handleChange = (paramId: number, newValue: string): void => {
        this.setState(prevState => ({
            values: { ...prevState.values, [paramId]: newValue }
        }));
    };

    public getModel(): Model {
        const paramValues: ParamValue[] = this.props.params.map(param => ({
            paramId: param.id,
            value: this.state.values[param.id] || ''
        }));
        return {
            paramValues,
            colors: this.props.model.colors
        };
    }

    public render(): React.ReactNode {
        return (
            <div className={styles.container}>
                {this.props.params.map(param => (
                    <div key={param.id}>
                        {param.type === 'string' && (
                            <TextParamEditor
                                param={param}
                                value={this.state.values[param.id]}
                                onChange={(value: string) => this.handleChange(param.id, value)}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }
}
