import './styles/index.scss';
import Button from './components/button';
import ButtonGroup from './components/button-group';
import { Row, Col } from './components/grid';
import Input from './components/input';
import Radio from './components/radio';

const components = [
    Button,
    ButtonGroup,
    Row,
    Col,
    Input,
    Radio,
];
    
const install = function (Vue) {
    if (install.installed) return;

    components.map(component => {
        Vue.component(component.name, component);
    });

};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = { // eslint-disable-line no-undef
    install,
    Button,
    ButtonGroup,
    Row,
    Col,
    Input,
    Radio,
};
