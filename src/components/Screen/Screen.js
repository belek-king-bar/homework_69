import React from 'react';

const Screen = props => {
    return <div className="card mb-3 mt-3 mx-auto border-warning" style={{width: 200, height: 112}}>
        <div className="card-body">
            <p className="card-text">{props.check}</p>
            {props.success === "Правильно!" ? <p className="card-text text-dark bg-success rounded-pill">{props.success}</p> :
                <p className="card-text text-dark bg-danger rounded-pill">{props.success}</p>}
        </div>
    </div>
};

export default Screen;