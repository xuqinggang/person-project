export default {

  isDescendant(parent, child) {
    let node = child.parentNode;

    while (node !== null) {
      if (node === parent) return true;
      node = node.parentNode;
    }

    return false;
  },

  offset(el) {
    const rect = el.getBoundingClientRect();
    return {
      top: rect.top + document.body.scrollTop,
      left: rect.left + document.body.scrollLeft,
    };
  },
  /**
   * get ele cssStyleObj
   * @param  {[type]} el   [description]
   * @param  {[type]} name [description]
   * @return {cssStyleObj}      read-only
   */
  getStyle(el, name) {
    if(!el) {
      throw Error('dom element is undefined or null');
      return;
    }
    const styleObj = el.currentStyle || document.defaultView.getComputedStyle(el, null);
    
    if(name) return styleObj[name];
    return styleObj
  }

};
