import React from 'react';
import { Cell, Grid } from 'react-mdl';

function education({startYear, endYear, schoolLevel, schoolName, schoolCourse}) {
    return (
        <div>
            <Grid>
                <Cell col={4}>
                    <p>{startYear} - {endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h5 style={{margin: '0px'}}>
                        {schoolLevel}
                    </h5>
                    <p style={{marginTop: '16px'}}>{schoolName}</p>
                    <p style={{marginTop: '10px'}}>{schoolCourse}</p>
                </Cell>
            </Grid>
        </div>
    )
}

export default education;
