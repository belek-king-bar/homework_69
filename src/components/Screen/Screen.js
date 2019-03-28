import React from 'react';

const Screen = props => {
    return props.success === "Правильно!" ? <div className="card mb-3 mt-3 mx-auto border-warning bg-success" style={{width: 200, height: 112}}>
        <div className="card-body">
            <p className="card-text">{props.check}</p>
            <p className="card-text text-dark">{props.success}</p>
        </div>
    </div>: props.success === "Не правильно!" ? <div className="card mb-3 mt-3 mx-auto border-warning bg-danger" style={{width: 200, height: 112}}>
        <div className="card-body">
            <p className="card-text">{props.check}</p>
            <p className="card-text text-dark">{props.success}</p>
        </div>
    </div>: <div className="card mb-3 mt-3 mx-auto border-warning" style={{width: 200, height: 112}}>
        <div className="card-body">
            <p className="card-text">{props.check}</p>
        </div>
    </div>
};

export default Screen;