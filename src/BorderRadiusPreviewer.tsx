import React, { Component, RefObject } from 'react'
import './BorderRadiusPreviewer.css'


interface Props {
    borderRadius: string,
    boxRef: RefObject<any>
}

export default class BorderRadiusPreviewer extends Component<Props> {
    render() {
        return (
            <div>
                <div ref={this.props.boxRef} id="box" style={{ borderRadius: this.props.borderRadius }}></div>
            </div>
        )
    }
}
