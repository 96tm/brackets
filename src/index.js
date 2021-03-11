module.exports = function check(str, bracketsConfig) {
    const conf = new Map(bracketsConfig);
    const openers = new Set(conf.keys());
    let stack = [];
    for (brace of str) {
        if (!stack.length) {
            stack.push(brace);
        } else {
            let top = stack[stack.length - 1];
            if (conf.get(top) === brace) {
                stack.pop();
            } else if (!openers.has(brace)) return false;
            else {
                stack.push(brace);
            }
        }
    }
    return !stack.length;
};
