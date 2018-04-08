/**
 * 面试题2：实现Singleton模式
 * 题目：设计一个类，只能生成该类的一个实例
 */

/**
 * 最常见的单例模式
 * 这是JavaScript开发中最常用的代码组织方式，这种方式在JavaScript执行的时候，就已经创建了实例对象。
 * 这样创建的实例对象，所有的属性、方法都是公开的，有一定的风险；
 * 一般使用这样的单例模式，我们可以采用下划线_来命名私有变量，来约定为私有变量。但是很不靠谱！
 */

var singleton = {
    attr1: 'test1',
    attr2: 10,
    methods() {}
}

/**
 * 闭包实现的单例模式
 * 实现了单例的私有变量对用户透明，用户所能知道的只有公开的接口，不能随意改变私有变量，
 * 但是这种方法还是在执行脚步的时候就产生了一个单例，用户有可能根本就不使用这段代码，
 * 这样就会造成内存浪费，更好的做法是将类的实例化推迟到需要的时候再实例化；
 */

var singleton = (function() {
    var _a;
    var that = {};
    that.getA = function() {
        return _a;
    }
    that.setA = function() {
        _a = a;
    }
    return that;
})()

/**
 * lazy 方式实现单例模式
 * 这种方法就可以在确实需要这段代码的时候，才实例化，实现懒惰性的单例模式！
 */

var singleton = (function() {
    var _a;
    var Single = function() {
        //code
    }
    var that = {};
    that.getA = function() {
        return _a;
    }
    that.setA = function() {
        _a = a;
    }
    var _instance = null;
    var getInstance = function() {
        if (!_instance) {
            _instance = new Single()
        }
        return _instance;
    }
    Single.prototype = that;
    return {
        getInstance: getInstance
    }
})()

/**
 * jQuery 的单例模式
 */

(function() {
    var jquery = (function() {})();
    window.jQuery = window.$ = jQuery;
})(window);