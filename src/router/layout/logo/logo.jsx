import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentWillMount() {

    }

    render() {

        return (
            <div>
                App
            </div>
        );
    }
}

export default AppComponent;
