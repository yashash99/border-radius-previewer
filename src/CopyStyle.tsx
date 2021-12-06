import CopyAllIcon from '@mui/icons-material/CopyAll';
import { Snackbar, Stack } from '@mui/material';
import React, { Component } from 'react';

interface Props {
    styleText: string
}
interface State {
    copySnackbar: boolean
}
export default class CopyStyle extends Component<Props> {
    state: State
    constructor(props: Props) {
        super(props)
        this.state = {
            copySnackbar: false
        }
        //this.copyCSS = this.copyCSS.bind(this)
    }
    copyCSS = (event: any) => {
        navigator.clipboard.writeText(this.formattedStyleText())
        this.setState({ copySnackbar: true })
    }
    formattedStyleText() {
        return String(this.props.styleText.replaceAll("; ", ";\n"))
    }
    handleClose = (event: any) => {
        this.setState({ copySnackbar: false })
    }

    render() {
        return (
            <div>
                <Stack direction="row" spacing={3}>
                    <CopyAllIcon onClick={this.copyCSS} />
                    <span style={{ whiteSpace: "pre-line", padding: 5, border: '1px dashed grey' }} >{this.formattedStyleText()}</span>
                </Stack>
                <Snackbar
                    open={this.state.copySnackbar}
                    autoHideDuration={2000}
                    message="Copied to clipboard"
                    onClose={this.handleClose}
                />
            </div >
        )
    }
}
