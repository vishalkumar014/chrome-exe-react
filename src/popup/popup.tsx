import React from 'react';
import {createRoot} from 'react-dom/client'
import './popup.css'
import { Button, Typography } from '@mui/material';

const test = (
    <div>
        <Button  variant="contained">Hello Test</Button>
    </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test)