import { Container, CssBaseline, Stack, Typography } from '@mui/material'
import React, { Component, RefObject } from 'react'
import BorderRadiusPreviewer from './BorderRadiusPreviewer'
import BorderRadiusPreviewerController from './BorderRadiusPreviewerController'
import CopyStyle from './CopyStyle'
import { BorderRadius } from './Interfaces'

interface State {
  borderRadius: BorderRadius,
  borderRadiusString: string,
  styleText: string
}
export default class App extends Component {
  state: State
  boxRef: RefObject<any>
  constructor(props: any) {
    super(props)
    this.state = {
      borderRadius: {
        borderTop: 0,
        borderBottom: 0,
        borderLeft: 0,
        borderRight: 0
      },
      borderRadiusString: "0 0 0 0",
      styleText: ""
    }
    this.onBorderRadiusChange = this.onBorderRadiusChange.bind(this)

    this.boxRef = React.createRef()
  }
  componentDidMount() {
    this.setState((prevState: State, props) => {
      prevState.styleText = this.boxRef.current.style.cssText
      return prevState;
    })
  }
  onBorderRadiusChange(event: Event, value: number | number[], activeThumb: number) {

    this.setState((prevState: State, props) => {
      if ((event.target as Window).name) {
        prevState.borderRadius[(event.target as Window).name as keyof typeof prevState.borderRadius] = value;
      }
      prevState.borderRadiusString = prevState.borderRadius.borderTop + '% ' + prevState.borderRadius.borderRight + '% ' + prevState.borderRadius.borderBottom + '% ' + prevState.borderRadius.borderLeft + '%'
      prevState.styleText = this.boxRef.current.style.cssText
      return prevState;
    })
    /* if ((event.target as Window).name === "borderTop") {
      this.setState((prevState: State, props) => {
        prevState.borderRadius.borderTop = value;
        return prevState;
      })
    }
    if ((event.target as Window).name === "borderBottom") {
      this.setState((prevState: State, props) => {
        prevState.borderRadius.borderBottom = value;
        return prevState;
      })
    }
    if ((event.target as Window).name === "borderLeft") {
      this.setState((prevState: State, props) => {
        prevState.borderRadius.borderLeft = value;
        return prevState;
      })
    }
    if ((event.target as Window).name === "borderRight") {
      this.setState((prevState: State, props) => {
        prevState.borderRadius.borderRight = value;
        return prevState;

      })
    } */

  }
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        {
          <Container maxWidth="xl">
            <Stack spacing={5}>
              <Typography variant="h2" component="h1">Border Radius Previewer</Typography>
              <BorderRadiusPreviewer borderRadius={this.state.borderRadiusString} boxRef={this.boxRef} />
              <CopyStyle styleText={this.state.styleText} />
              <BorderRadiusPreviewerController borderRadius={this.state.borderRadius} onBorderRadiusChange={this.onBorderRadiusChange} />
            </Stack>
          </Container>
        }
      </React.Fragment>
    )
  }
}

