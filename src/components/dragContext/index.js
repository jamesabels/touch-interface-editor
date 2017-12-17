import { h, Component } from 'preact';
import style from './style'

import { init } from '../../libs/interactionManager'

export default class DraggableContext {
    componentDidMount () {
        console.log('Initalizing Draggable Context...');
        init();
    }
    render (props) {
        return (
            <div class={style.draggableContext}>
                {this.props.children}
                {this.props.children.map(child => console.log(child))}
            </div>
        );
    }
};