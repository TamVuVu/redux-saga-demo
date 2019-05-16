import React from 'react';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
class Index extends React.Component {
    handleClose = () => {
        this.props.onClose(this.props.selectedValue);
    };

    handleListItemClick = value => {
        this.props.onClose(value);
    };

    render() {

        return (
            <TextField
                style={{ width: "100%", marginBottom: "20px" }}
                label={this.props.label}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={(e) => this.props.onChange(e.target.value)}
            />
        );
    }
}

// Index.propTypes = {
//     onClose: PropTypes.func,
//     selectedValue: PropTypes.string,
// };

export default Index;