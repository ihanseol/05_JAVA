(function (global, factory) {
    "use strict";

    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = factory();
    } else if (typeof define === "function" && define.amd) {
        define(factory);
    } else {
        global.vhCheck = factory();
    }
})(this, () => {
    // Polyfill for Object.assign
    const assign = Object.assign || function (target, ...sources) {
        for (let i = 0; i < sources.length; i++) {
            const source = sources[i];
            for (const key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };

    // Measure viewport height properties
    function measureViewport() {
        const testDiv = document.createElement("div");
        testDiv.style.cssText = "position: fixed; top: 0; height: 100vh; pointer-events: none;";
        document.documentElement.insertBefore(testDiv, document.documentElement.firstChild);

        const vh = testDiv.offsetHeight;
        const windowHeight = window.innerHeight;
        const offset = vh - windowHeight;

        document.documentElement.removeChild(testDiv);

        return {
            vh,
            windowHeight,
            offset,
            isNeeded: offset !== 0,
            value: 0
        };
    }

    // Calculate offset difference
    function computeDifference() {
        const result = measureViewport();
        result.value = result.offset;
        return result;
    }

    // Calculate redefined vh unit
    function redefineVhUnit() {
        const result = measureViewport();
        result.value = 0.01 * result.windowHeight;
        return result;
    }

    // Utility functions
    const utils = Object.freeze({
        noop: () => {},
        computeDifference,
        redefineVhUnit
    });

    // Default configuration
    const defaults = Object.freeze({
        cssVarName: "vh-offset",
        redefineVh: false,
        method: computeDifference,
        force: false,
        bind: true,
        updateOnTouch: false,
        onUpdate: utils.noop
    });

    // Event listener management
    let supportsPassive = false;
    const listeners = [];

    try {
        const opts = Object.defineProperty({}, "passive", {
            get: () => {
                supportsPassive = true;
                return true;
            }
        });
        window.addEventListener("test", opts, opts);
        window.removeEventListener("test", opts, opts);
    } catch (e) {
        supportsPassive = false;
    }

    function addListener(eventName, callback) {
        const options = supportsPassive ? { passive: true } : false;
        window.addEventListener(eventName, callback, options);
        listeners.push({ eventName, callback });
    }

    function removeListeners() {
        listeners.forEach(({ eventName, callback }) => {
            window.removeEventListener(eventName, callback);
        });
        listeners.length = 0;
    }

    // CSS variable management
    function setCSSVariable(name, result) {
        document.documentElement.style.setProperty(`--${name}`, `${result.value}px`);
    }

    // Result enhancement
    function enhanceResult(result, config) {
        return assign({}, result, {
            unbind: removeListeners,
            recompute: config.method
        });
    }

    // Validate string input
    function isValidString(str) {
        return typeof str === "string" && str.length > 0;
    }

    // Main vhCheck function
    return function vhCheck(options) {
        const config = Object.freeze((input) => {
            if (isValidString(input)) {
                return assign({}, defaults, { cssVarName: input });
            }
            if (typeof input !== "object" || input === null) {
                return defaults;
            }

            const onUpdate = typeof input.onUpdate === "function" ? input.onUpdate : utils.noop;
            const redefineVh = input.redefineVh === true;
            const cssVarName = isValidString(input.cssVarName) 
                ? input.cssVarName 
                : redefineVh ? "vh" : defaults.cssVarName;

            return {
                force: input.force === true,
                bind: input.bind !== false,
                updateOnTouch: input.updateOnTouch === true,
                onUpdate,
                method: utils[redefineVh ? "redefineVhUnit" : "computeDifference"],
                cssVarName
            };
        })(options);

        const result = enhanceResult(config.method(), config);

        if (!result.isNeeded && !config.force) {
            return result;
        }

        setCSSVariable(config.cssVarName, result);
        config.onUpdate(result);

        if (!config.bind) {
            return result;
        }

        function update() {
            window.requestAnimationFrame(() => {
                const newResult = config.method();
                setCSSVariable(config.cssVarName, newResult);
                config.onUpdate(enhanceResult(newResult, config));
            });
        }

        removeListeners();
        addListener("orientationchange", update);
        if (config.updateOnTouch) {
            addListener("touchmove", update);
        }

        return result;
    };
});