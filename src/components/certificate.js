import React from 'react';
import {Grid, Cell} from 'react-mdl';

function certificate({startYear, endYear, schoolCertificate}) {
    return (
        <div>
        <Grid>
            <Cell col={4}>
                <p>{startYear} - {endYear}</p>
            </Cell>
            <Cell col={8}>
                <p style={{margin: '0px'}}>
                    {schoolCertificate}
                </p>
            </Cell>
        </Grid>
    </div>
    )
}

export default certificate
