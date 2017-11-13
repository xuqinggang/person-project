// by xuqinggang
export default function(...paramArr) {
    let classArr = [];
    // paramArr.forEach( param => {
    //     if (param)  
    // } )
    for (let param of paramArr) {
        if (!param) continue;
        let paramType = typeof param;
        if (paramType === 'string' || paramType === 'number') {
            classArr.push(param);
            continue;
        }
        if (paramType === 'object') {
            Object.keys(param).forEach( (classStr, index) => {
                if (classStr && param[classStr]) {
                    classArr.push(classStr);
                }
            } )
        }
    }
    return classArr.join(' ');
}
