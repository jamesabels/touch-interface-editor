import { Component } from "preact";
import style from './style';

export default class Button extends Component {
    _changeMode (mode) {
        if (mode) {
            return `draggable resizable ${style.edit}`
        } else {
            return ''
        }
    }
    style = {
        height: this.props.object.height,
        width: this.props.object.width
    }
    render ({ object, mode }) {
        if (mode) {
            return (
                <div class={`${style.button} ${this._changeMode(mode)}`} style={this.style}>
                    <div class={style.labelWrap}>
                        <p class={style.buttonTextEdit}>{object.label}</p>
                    </div>
                </div>
            )
        } else {
            return (
                <div class={`${style.button} ${this._changeMode(mode)}`} style={this.style}>
                    <p class={style.buttonText}>{object.label}</p>
                </div>
            )
        }
    }
}