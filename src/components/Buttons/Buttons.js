import React from 'react';
import {Button} from 'reactstrap';

const Buttons = props => {
    return <div>
            <p className="mb-2">
                <Button onClick={() => props.value(7)} className="pl-3 pr-3">7</Button>
                <Button onClick={() => props.value(8)} className="pl-3 pr-3">8</Button>
                <Button onClick={() => props.value(9)} className="pl-3 pr-3">9</Button>
            </p>
            <p className="mb-2">
                <Button onClick={() => props.value(4)} className="pl-3 pr-3">4</Button>
                <Button onClick={() => props.value(5)} className="pl-3 pr-3">5</Button>
                <Button onClick={() => props.value(6)} className="pl-3 pr-3">6</Button>
            </p>
            <p className="mb-2">
                <Button onClick={() => props.value(1)} className="pl-3 pr-3">1</Button>
                <Button onClick={() => props.value(2)} className="pl-3 pr-3">2</Button>
                <Button onClick={() => props.value(3)} className="pl-3 pr-3">3</Button>
            </p>
            <p className="mb-2">
                <Button onClick={props.splice} className="pl-3 pr-3">-</Button>
                <Button onClick={() => props.value(0)} className="pl-3 pr-3">0</Button>
                <Button onClick={props.enter} className="pl-3 pr-3">E</Button>
            </p>
    </div>
};

export default Buttons;