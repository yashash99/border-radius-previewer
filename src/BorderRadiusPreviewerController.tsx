import { Card, CardContent, MenuItem, Select, Slider, Stack, Typography } from '@mui/material'
import React, { Component } from 'react'
import { BorderRadius } from './Interfaces'

type Props = {
    borderRadius: BorderRadius,
    onBorderRadiusChange: ((event: Event, value: number | number[], activeThumb: number) => void)
}

export default class BorderRadiusPreviewerController extends Component<Props> {

    render() {

        return (
            <Card>
                <CardContent>
                    <Stack spacing={3}>
                        <Typography variant="h3" component="h2">Modifiy Box</Typography>
                        <Stack direction="row" spacing={5}>
                            <span>borderTop</span>
                            <Slider name="borderTop" value={this.props.borderRadius.borderTop} onChange={this.props.onBorderRadiusChange} />
                            <Select>
                                <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            <span>borderLeft</span>
                            <Slider name="borderLeft" value={this.props.borderRadius.borderLeft} onChange={this.props.onBorderRadiusChange} />
                        </Stack>
                        <Stack direction="row" spacing={5}>
                            <span>borderBottom</span>
                            <Slider name="borderBottom" value={this.props.borderRadius.borderBottom} onChange={this.props.onBorderRadiusChange} />
                            <span>borderRight</span>
                            <Slider name="borderRight" value={this.props.borderRadius.borderRight} onChange={this.props.onBorderRadiusChange} />
                        </Stack>
                    </Stack>
                </CardContent>
            </Card >
        )
    }
}
