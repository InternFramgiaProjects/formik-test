This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### Use:
- Material-UI - package hỗ trợ sẵn việc style cho các component React
- Formik - package dùng để quản lý form
- Yup - package dùng để validate dữ liệu

### Steps:

#### 1. create-react-app formik-test

#### 2. Create SignupForm component inside App.

##### 3.1. Install Formik:

    3.1.1 npm i formik
    OR
    3.1.2 yarn add formik

##### 3.2 Declare FormikForm const inside SignupForm, then export default FormikForm
withFormik ở đây chính là một Higher Order Component
import { withFormik } from 'formik'
...
const FormikForm = withFormik({
    mapPropsToValues() { 
        return {
            // Init form field
        }
    },
})(applied_conponent)

##### 3.3 this.props.values là props chứa đựng giá trị của các field.
Bonus: Formik đã định nghĩa sẵn hàm handleInputChange 
=> use:  ...onChange={this.props.handleChange} 


#### 4. Validation with Yup

##### 4.1. Install
npm install yup
OR
yarn add yup

##### 4.2. Setting condition
import * as Yup from 'yup'

// put code ngang hàng với mapPropsToValues() phía trên
validationSchema: Yup.object().shape({ // Validate form field
    username: Yup.string()
        .required('Username is required')
        .min(5, 'Username must have min 5 characters')
        .max(10, 'Username have max 10 characters'),
})

#### GET ERRORS

errors object chứa các message báo lỗi liên vi phạm quy ước cho các field.
Truy cập qua this.props.errors.[field_name]


### SEE MORE: 

##### Method validate : https://github.com/jquense/yup

### XỬ LÝ VẤN ĐỀ

Tương tác với 1 field thì các field còn lại cũng báo lỗi
=> use "touched" của Formik
Ban đâu: boolean;
        sẽ trả về true nếu đã từng tương tác với field đó
        (tương tác tính từ thời điểm lần đâu tiên chúng ta chạm vào field đó)

Để sử dụng được thuộc tính này, ta sẽ cần import 2 component của Formik là ( Form + Field ) ở cùng với vị trí mà chúng ta đã import withFormik.

### => TỐI ƯU

Ở mỗi field nhập liệu, ta đều phải thêm đi thêm lại các phần.