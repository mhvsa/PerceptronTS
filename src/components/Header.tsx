import * as React from "react";

export interface HeaderProps {neuron:string, type: string};

export const Header = (props: HeaderProps) => <h1> {props.neuron}, {props.type} funkcja aktywacji </h1>

