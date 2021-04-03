import React from 'react';
import {Grid, Cell} from 'react-mdl'

function exprience({startYear, endYear, workPlace, workPostion, workAchievements}) {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{startYear} - {endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h3 style={{margin: '0px'}}>
                        {workPostion}   
                    </h3>
                    <h5 style={{marginTop: '16px'}}>
                        {workPlace}
                    </h5>
                    <p style={{marginTop: '16px'}}>{workAchievements}</p>
                </Cell>
            </Grid>
        </div>
    )
}

export default exprience

