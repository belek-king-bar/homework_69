import React from 'react';
import {Button} from 'reactstrap';

const Buttons = props => {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return <div>
            {numbers.map((number) =>
                <Button onClick={() => props.value(number)} className="pl-4 pr-4 btn-warning">{number}</Button>
            )}
            <p className="mb-2">
                <Button onClick={props.splice} className="pl-4 pr-4 btn-warning">></Button>
                <Button onClick={() => props.value(0)} className="pl-4 pr-4 btn-warning">0</Button>
                <Button onClick={props.enter} className="pl-4 pr-4 btn-warning">E</Button>
            </p>
    </div>
};

export default Buttons;