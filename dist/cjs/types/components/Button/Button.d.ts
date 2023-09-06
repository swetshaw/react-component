import React from "react";
export interface ButtonProps {
    webHook: string;
    bgColor?: string;
    isProofsReceived?: boolean;
    label?: string;
}
declare const ReclaimButton: (props: ButtonProps) => React.JSX.Element;
export default ReclaimButton;
