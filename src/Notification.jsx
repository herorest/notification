import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const prefixCls = 'notification';

const Notification = React.createClass({
    getDefaultProps() {
        return {
            prefixCls: prefixCls,
            animation: 'fade',
            duration: 1.5,
            style: {
                top: 65
            },
            content: '',
            type: 'alert'
        };
    },

    getInitialState() {
        return {closed: false};
    },

    componentDidMount() {
        if (this.props.duration) {
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.props.duration * 1000);
        }
    },

    componentWillUnmount() {
        this.clearCloseTimer();
    },

    clearCloseTimer() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    },

    close() {
        this.clearCloseTimer();
        this.setState({closed: true});
    },

    getTransitionName(transitionName) {
        const props = this.props;
        if (!transitionName && props.animation) {
            transitionName = `${props.prefixCls}-${props.animation}`;
        }
        transitionName += ` ${props.prefixCls}-${props.animation}`;
        transitionName += this.state.closed
            ? '-leave'
            : '-enter';
        return transitionName;
    },

    getSrc() {
        let type = this.props.type;
        switch (type) {
            case 'alert':
            case 'error':
            case 'success':
            case 'message':
                break;
            default:
                type = 'message';
                break;
        }
        return `${type}`;
    },

    render() {
        const props = this.props;
        let componentClass = `${props.prefixCls}-notice`;
        let classname = this.getTransitionName(componentClass);
        let src = this.getSrc();
        let style = {
            ...props.style
        };
        if (props.center) {
            style.top = 0;
        }
        return (
            <div className={classname} style={style}>
                <div className={`${componentClass}-img ${componentClass}-img-` + this.getSrc()}></div>
                <div className={`${componentClass}-content`}>{props.content}</div>
            </div>
        );
    }
});

Notification.build = function(properties) {
    let nodes = document.getElementsByClassName(prefixCls);
    let div = document.createElement('div');
    let id = properties.id;
    let divClass = prefixCls;
    if (document.getElementById(id)) {
        return;
    }
    if (nodes && nodes.length > 0) {
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            node.parentNode.removeChild(node);
        }
    }
    if (properties.id) {
        div.setAttribute('id', properties.id);
    }
    if (properties.center || !(properties.style && properties.style.top)) {
        properties.center = true;
        divClass += ' notification-center';
    }
    div.setAttribute('class', divClass);
    document.body.appendChild(div);
    ReactDOM.render(
        <Notification {...properties}/>, div);
};

Notification.alert = function(content, duration, center, style) {
    return Notification.build({
        content, duration, type: 'alert', center, style
    });
};
Notification.success = function(content, duration, center, style) {
    return Notification.build({
        content, duration, type: 'success', center, style
    });
};
Notification.error = function(content, duration, center, style) {
    return Notification.build({
        content, duration, type: 'error', center, style
    });
};
Notification.message = function(content, duration, center, style) {
    return Notification.build({
        content, duration, type: 'message', center, style
    });
};

export default Notification;
