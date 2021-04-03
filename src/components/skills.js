import React from 'react'
import { Cell, Grid, ProgressBar } from 'react-mdl'

function skills({Skill, progress}) {
    return (
        <div>
            <Grid>
                <Cell col={12}>
                    <div style={{display: 'flex'}}> 
                    {Skill}
                    <ProgressBar progress={progress} style={{margin: 'auto', width: '75%'}}/>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

export default skills