import { h, Component } from 'preact';
import style from './style';

import Button from '../../components/button/index'
import DraggableContext from '../../components/dragContext/index'

export default class Home extends Component {
	state = {
		mode: false,
		stage: [
			{
				label: 'Button 1',
				width: 200,
				height: 100,
				x: 0,
				y: 0
			}
		]
	}
	_tooggleMode(mode) {
		this.setState({ mode: !mode })
	}
	render(props, { stage, mode }) {
		return (
			<div class={style.app}>
				<div>
					<div class={style.stageHeader}>
						<button class={`${style.button} ${style.headerButton}`} onClick={() => this._tooggleMode(this.state.mode)}>
							Edit Mode
							</button>
						<p class={style.headerText}>{`edit mode: ${mode}`}</p>
					</div>
					<DraggableContext>
						{stage.map((button, index) => {
							return <Button object={button} mode={this.state.mode} />
						})}
					</DraggableContext>
				</div>
			</div>
		);
	}
}
