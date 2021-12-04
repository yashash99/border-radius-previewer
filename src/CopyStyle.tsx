import { TextareaAutosize } from '@mui/base'
import React, { Component } from 'react'

interface Props {
    styleText: string
}
export default class CopyStyle extends Component<Props> {
    render() {
        return (
            <div>
                <TextareaAutosize value={this.props.styleText} style={{ width: 200 }} />
            </div>
        )
    }
}
