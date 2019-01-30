import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'

import { withFormik } from 'formik'
//  Yup là package hỗ trợ chúng ta việc kiểm tra dữ liệu nhập vào theo từng kí tự chúng ta nhập vào form
import * as Yup from 'yup'

class SignupForm extends Component {

    render() {
        return (
            <Grid container justify='center' alignContent='center'>
                <Grid item xs={6} md={4}>
                    <Paper elevation={4} style={{ padding: '20px 15px', marginTop: '30px' }}>
                        <Typography variant="headline" gutterBottom>
                            Signup
                        </Typography>
                        <FormControl fullWidth margin='normal' error={this.props.errors.username}>
                            <InputLabel>Username</InputLabel>
                            {/* Formik đã định nghĩa sẵn hàm handleInputChange cho rồi */}
                            <Input fullWidth name='username' 
                                value={this.props.values.username} 
                                onChange={this.props.handleChange} />
                            <FormHelperText>{this.props.errors.username}</FormHelperText>
                        </FormControl>
                        <FormControl fullWidth margin='normal'>
                            <Button
                                variant='extendedFab'
                                color='primary'
                                type='submit'
                            >
                                Signup
                                </Button>
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
}

const FormikForm = withFormik({
    mapPropsToValues() { // Init form field
        return {
            username: ''
        }
    },
    validationSchema: Yup.object().shape({ // Validate form field
        username: Yup.string()
                    .required('Username is required')
                    .min(5, 'Username must have min 5 characters')
                    .max(10, 'Username have max 10 characters'),
    }),
})(SignupForm)

export default FormikForm