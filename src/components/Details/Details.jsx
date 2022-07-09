import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


import useStyles from './style';
import useTransactions from '../../useTransaction';
ChartJS.register(ArcElement, Tooltip, Legend);

const DetailsCard = ({ title, subheader }) => {
    const { total, chartData } = useTransactions(title);
    const classes = useStyles();

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    );
};

export default DetailsCard;