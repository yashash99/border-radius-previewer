import React, { Component, CSSProperties, RefObject } from 'react'
import './BorderRadiusPreviewer.css'

interface State {
    style: CSSProperties,
    styleText: string
}

export default class BorderRadiusPreviewer extends Component {
    state: State
    boxRef: RefObject<any>
    constructor(props: any) {
        super(props)
        this.state = {
            style: {
                borderRadius: "10% 10% 10% 10%",
                border: "2px solid black"
            },
            styleText: ""
        }
        this.boxRef = React.createRef()

    }
    updateComponent() {
        this.setState({ styleText: this.boxRef.current.style.cssText })
    }
    componentDidMount() {
        this.updateComponent()
    }
    componentDidUpdate() {
        //this.updateComponent()
    }
    render() {
        return (
            <div>
                <div ref={this.boxRef} id="box" style={this.state.style}></div>
                {this.state.styleText}
            </div>
        )
    }
}
