import Button from './src/main';

Button.install = (vue) => {
    vue.component(Button.name, Button);
};

export default Button;