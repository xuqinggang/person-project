import React, {Component,
  createElement,
  cloneElement,
  Children,
  isValidElement,
  PropTypes,
} from 'react';
import classnames from 'classnames';
import { Seq } from 'immutable';

import { immutableRenderDecorator } from 'react-immutable-render-mixin';
import CSSModules from 'react-css-modules';

import TabTemplate from './TabTemplate.js'
import styles from './styles.scss';

@immutableRenderDecorator
@CSSModules(styles, { allowMultiple: true })
class Tabs extends Component {
	// props 类型验证
	static propTypes = {
		className: PropTypes.string,
		style: PropTypes.object,
		children: PropTypes.oneOfType([
			PropTypes.arrayOf(PropTypes.node),
			PropTypes.node
		]),
		activeIndex: PropTypes.number,
		defaultActiveIndex : PropTypes.number,
		onChange: PropTypes.func,

	};

	// 默认 props
	static defaultProps = {
		defaultActiveIndex: 0,
		onChange: () => {},
	}
	
	constructor(props) {
		super(props);

		const currProps = this.props;
		// 组件的状态由外部控制(通过props传递'activeIndex')或者由组件内部控制
		let activeIndex;
		if('activeIndex' in currProps) {
			activeIndex = currProps.activeIndex;
		} else if('defaultActiveIndex' in currProps){
			activeIndex = currProps.defaultActiveIndex;
		}
		this.state = {
			selectedIndex: activeIndex,
			prevIndex: activeIndex,
		}
	}

	getTabs(props = this.props) {
		const tabs = [];
		// 处理了props.children为undefined和数组和单一对象的情况
		Children.forEach(props.children, tab => {
			if(isValidElement(tab)) {
				tabs.push(tab)
			}
		});
		// console.log('1234', Seq([1, 2, 3]).map)
		
		return tabs;
	}
	// 由外组件更新时才会调用此方法
	componentWillReceiveProps(nextProps) {
		if('activeIndex' in nextProps) {
			this.setState({
				selectedIndex: nextProps.activeIndex,
				prevIndex: this.state.selectedIndex,
			});
		}
	}

	handleTouchTab = (activeIndex) => {
		console.log('123')
		const prevIndex = this.state.selectedIndex;
		if(this.state.selectedIndex !== activeIndex) {
			this.setState({
				selectedIndex: activeIndex,
				prevIndex
			})
		}
		this.props.onChange({
				selectedIndex: activeIndex,
				prevIndex
		});
	}

	renderTabNavAndContent() {

		const tabs = this.getTabs();
		// 每一个tab的平均宽度%
		const width = parseFloat(100 / tabs.length, 10);
		const tabContent = [];
		// 尽量减少不必要组件的创建(ex:<TabNav/>, <TabContent/>)
		const tabNav = tabs.map((tab, index) => {
			tabContent.push(tab.props.children ? 
				createElement(TabTemplate, {
					key: tab.props.order || index,
					selected: this.state.selectedIndex === index,
				}, tab.props.children) : undefined);
			
			return cloneElement(tab, {
				width: `${width}%`,
				key: tab.props.order || index,
				index: index, // 组件的索引
				selected: this.state.selectedIndex === index,
				onTouchTab: this.handleTouchTab,
			});

		});
		return {
			tabContent,
			tabNav
		}
	}

	render() {
		const tabClassName = "m_tabs";
		const contentContainerClassName = "tabs_contentContainer";
		const navContainerClassName = "tabs_navContainer"
		
		const tabNavAndContent = this.renderTabNavAndContent();
		return (
			<div styleName={tabClassName}>
				<div styleName={navContainerClassName}>
					{tabNavAndContent.tabNav}
				</div>
				<div styleName={contentContainerClassName}>
					{tabNavAndContent.tabContent}
				</div>
			</div>
		)
	}

}

export default Tabs;
