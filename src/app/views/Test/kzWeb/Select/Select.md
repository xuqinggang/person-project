# Select - 下拉选择组件

## export
* Select

## 属性

属性名 | 类型 | 描述 | 是否必须 | 默认值 | 字典 |  
------- | ------- | ------- | ------- | ------- | ------- |
show | bool | 下拉列表是否打开 | 否 | false | - |
value | string or number| 下拉列表的值 | 是 | ListItem的值 | - |
onChange | func | 改变事件 | 否 | null | 事件回调函数第一个参数为react event对象, 第二个参数为包含text和value的对象 |

## 使用示例
```js 
<Select show={ true } value={1} onChange={ function(...param) {
} }>
    <ListItem value={ 1 } text="123123" />
    <ListItem value={ 2 } text="123124" />
    <ListItem value={ 3 } text="123125" />
</Select>
