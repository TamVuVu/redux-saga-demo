import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

class Index extends React.Component {
    handleClose = () => {
        this.props.onClose();
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {
        console.log()
        return (
            <Dialog
                onClose={this.handleClose}
                open={this.props.open}
                fullWidth={this.props.isFullWidth}>
                {this.props.header}
                {this.props.content}
                {this.props.action}
                <div style={{ textAlign: "right" }}>
                    <Tooltip title="ADD" placement="top">
                        <IconButton aria-label="Edit" onClick={() => this.props.onSubmit()}>
                            OK
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="CANCEL" placement="top">
                        <IconButton aria-label="Delete" onClick={() => this.handleClose()}>
                            CANCEL
                        </IconButton>
                    </Tooltip>
                </div>
            </Dialog>
        );
    }
}

// Index.propTypes = {
//     onClose: PropTypes.func,
//     selectedValue: PropTypes.string,
// };

export default Index;