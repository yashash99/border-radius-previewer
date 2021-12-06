import { Card, CardContent, Slider, Stack, Typography } from '@mui/material'
import React, { Component } from 'react'
import { BorderRadius } from './Interfaces'

type Props = {
    borderRadius: BorderRadius,
    onBorderRadiusChange: ((event: Event, value: number | number[], activeThumb: number) => void)
}

export default class BorderRadiusPreviewerController extends Component<Props> {

    render() {

        return (
            <Card sx={{ p: 2 }}>
                <CardContent>
                    <Stack spacing={3}>
                        <Typography variant="h4" component="h2">Modifiy Box Radius</Typography>
                        <Stack direction="row" spacing={5} alignItems="center">
                            <span style={{ minWidth: 50 }}>Top</span>
                            <Slider name="borderTop" value={this.props.borderRadius.borderTop} onChange={this.props.onBorderRadiusChange} />

                            <span style={{ minWidth: 50 }}>Left</span>
                            <Slider name="borderLeft" value={this.props.borderRadius.borderLeft} onChange={this.props.onBorderRadiusChange} />

                        </Stack>
                        <Stack direction="row" spacing={5} alignItems="center">
                            <span style={{ minWidth: 50 }}>Bottom</span>
                            <Slider name="borderBottom" value={this.props.borderRadius.borderBottom} onChange={this.props.onBorderRadiusChange} />

                            <span style={{ minWidth: 50 }}>Right</span>
                            <Slider name="borderRight" value={this.props.borderRadius.borderRight} onChange={this.props.onBorderRadiusChange} />

                        </Stack>
                    </Stack>
                </CardContent>
            </Card >
        )
    }
}
