import React, {Component, ErrorInfo, ReactNode} from 'react';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    error: string;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: "",
    }

    public componentDidCatch(error : Error, errorInfo : ErrorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <h2>Something went wrong: {this.state.error}</h2>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
