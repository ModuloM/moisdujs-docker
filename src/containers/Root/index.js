import 'bootstrap/dist/css/bootstrap.css';
import './Root.css'

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod');
} else {
    module.exports = require('./Root.dev');
}