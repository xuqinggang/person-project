1.
css modules
styleName为局部的class( css类名会进行相应的编码 )
className为全局class(css类名不动) 用：global 标识全局

(
	(1)对外封装的组件内部类名用styleName标识
	
	(2)对封装的组件传递类名，被封装的组件用className标识
	可以
		{
			1.用className prop传递类名给封装的组件 用：global 标识全局
			2.用styleName prop传递类名给封装的组件
		}被封装的组件最后都是用className接收传递的属性（因为styleName最后也会被转换为className)
)
2.
组件内用getStyleName方法获得 相应的class

3.随状态改变的css样式,且样式使用属性控制的 用style控制  
ex:（FontIcon组件）
<Component color="red" />
hoverColor = this.state.hovered ? 'blue': this.props.color
const style = {
	color: hoverColor
}