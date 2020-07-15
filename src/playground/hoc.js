import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminMessage = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is confidential message. Please do not share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to view info.</p>}
        </div>
    );
};

const AdminInfo = withAdminMessage(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info='These are the details.'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='These are the details.'/>, document.getElementById('app'));