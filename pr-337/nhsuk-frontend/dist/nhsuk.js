/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 848:
/***/ (function(module) {

/**
 * Toggle a boolean attribute on a HTML element
 *
 * @param {HTMLElement} element
 * @param {string} attr
 */
var toggleAttribute = function toggleAttribute(element, attr) {
  // Return without error if element or attr are missing
  if (!element || !attr) return;
  // Toggle attribute value. Treat no existing attr same as when set to false
  var value = element.getAttribute(attr) === 'true' ? 'false' : 'true';
  element.setAttribute(attr, value);
};

/**
 * Toggle a toggle a class on conditional content for an input based on checked state
 *
 * @param {HTMLElement} input - input element
 * @param {string} className - class to toggle
 */
var toggleConditionalInput = function toggleConditionalInput(input, className) {
  // Return without error if input or class are missing
  if (!input || !className) return;
  // If the input has conditional content it had a data-aria-controls attribute
  var conditionalId = input.getAttribute('aria-controls');
  if (conditionalId) {
    // Get the conditional element from the input data-aria-controls attribute
    var conditionalElement = document.getElementById(conditionalId);
    if (conditionalElement) {
      if (input.checked) {
        conditionalElement.classList.remove(className);
        input.setAttribute('aria-expanded', 'true');
      } else {
        conditionalElement.classList.add(className);
        input.setAttribute('aria-expanded', 'false');
      }
    }
  }
};

/**
 * Used to generate a unique string, allows multiple instances of the component
 * without them conflicting with each other.
 * https://stackoverflow.com/a/8809472
 *
 * Original code taken from GDS (Government Digital Service)
 * {@link https://github.com/alphagov/govuk-frontend}
 */
function generateUniqueID() {
  var d = new Date().getTime();
  if (typeof window.performance !== 'undefined' && typeof window.performance.now === 'function') {
    d += window.performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
}

/**
 * Move focus to element
 *
 * Sets tabindex to -1 to make the element programmatically focusable,
 * but removes it on blur as the element doesn't need to be focused again.
 *
 * Original code taken from GDS (Government Digital Service)
 * {@link https://github.com/alphagov/govuk-frontend}
 *
 * @template {HTMLElement} FocusElement
 * @param {FocusElement} $element - HTML element
 * @param {object} [options] - Handler options
 * @param {function(this: FocusElement): void} [options.onBeforeFocus] - Callback before focus
 * @param {function(this: FocusElement): void} [options.onBlur] - Callback on blur
 */
function setFocus($element, options) {
  if (options === void 0) {
    options = {};
  }
  var isFocusable = $element.getAttribute('tabindex');
  if (!isFocusable) {
    $element.setAttribute('tabindex', '-1');
  }

  /**
   * Handle element focus
   */
  function onFocus() {
    $element.removeEventListener('focus', onFocus);
    $element.addEventListener('blur', onBlur);
  }

  /**
   * Handle element blur
   */
  function onBlur() {
    $element.removeEventListener('blur', onBlur);
    if (options.onBlur) {
      options.onBlur.call($element);
    }
    if (!isFocusable) {
      $element.removeAttribute('tabindex');
    }
  }

  // Add listener to reset element on blur, after focus
  $element.addEventListener('focus', onFocus);

  // Focus element
  if (options.onBeforeFocus) {
    options.onBeforeFocus.call($element);
  }
  $element.focus();
}
module.exports = {
  toggleAttribute: toggleAttribute,
  toggleConditionalInput: toggleConditionalInput,
  generateUniqueID: generateUniqueID,
  setFocus: setFocus
};

/***/ }),

/***/ 807:
/***/ (function(module) {

var KEY_SPACE = 32;
var DEBOUNCE_TIMEOUT_IN_SECONDS = 1;
var Button = /*#__PURE__*/function () {
  function Button($module) {
    if (!$module) {
      return this;
    }
    this.$module = $module;
    this.debounceFormSubmitTimer = null;

    /**
     * Initialise an event listener for keydown at document level
     * this will help listening for later inserted elements with a role="button"
     */
    this.$module.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.$module.addEventListener('click', this.debounce.bind(this));
  }

  /**
   * JavaScript 'shim' to trigger the click event of element(s) when the space key is pressed.
   *
   * Created since some Assistive Technologies (for example some Screenreaders)
   * will tell a user to press space on a 'button', so this functionality needs to be shimmed
   * See https://github.com/alphagov/govuk_elements/pull/272#issuecomment-233028270
   *
   * @param {KeyboardEvent} event - Keydown event
   */
  var _proto = Button.prototype;
  _proto.handleKeyDown = function handleKeyDown(event) {
    // get the target element

    var target = event.target;
    // if the element has a role='button' and the pressed key is a space, we'll simulate a click
    if (target.getAttribute('role') === 'button' && event.keyCode === KEY_SPACE) {
      event.preventDefault();
      // trigger the target's click event
      target.click();
    }
  }

  /**
   * If the click quickly succeeds a previous click then nothing will happen.
   * This stops people accidentally causing multiple form submissions by
   * double clicking buttons.
   */;
  _proto.debounce = function debounce(event) {
    var _this = this;
    var target = event.target;
    // Check the button that is clicked on has the preventDoubleClick feature enabled
    if (target.getAttribute('data-prevent-double-click') !== 'true') {
      return;
    }

    // If the timer is still running then we want to prevent the click from submitting the form
    if (this.debounceFormSubmitTimer) {
      event.preventDefault();
      return false; // eslint-disable-line consistent-return
    }
    this.debounceFormSubmitTimer = setTimeout(function () {
      _this.debounceFormSubmitTimer = null;
    }, DEBOUNCE_TIMEOUT_IN_SECONDS * 1000);
  };
  return Button;
}();
module.exports = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? document : _ref$scope;
  var buttons = scope.querySelectorAll('[data-module="nhsuk-button"]');
  buttons.forEach(function (el) {
    new Button(el);
  });
};

/***/ }),

/***/ 997:
/***/ (function(module) {

var CharacterCount = /*#__PURE__*/function () {
  function CharacterCount($module) {
    if (!$module) {
      return this;
    }
    var $textarea = $module.querySelector('.nhsuk-js-character-count');
    if (!$textarea) {
      return this;
    }
    this.$module = $module;
    this.$textarea = $textarea;
    this.$visibleCountMessage = null;
    this.$screenReaderCountMessage = null;
    this.lastInputTimestamp = null;

    // Check for module
    var $fallbackLimitMessage = document.getElementById(this.$textarea.id + "-info");

    // Move the fallback count message to be immediately after the textarea
    // Kept for backwards compatibility
    this.$textarea.insertAdjacentElement('afterend', $fallbackLimitMessage);

    // Create the *screen reader* specific live-updating counter
    // This doesn't need any styling classes, as it is never visible
    var $screenReaderCountMessage = document.createElement('div');
    $screenReaderCountMessage.className = 'nhsuk-character-count__sr-status nhsuk-u-visually-hidden';
    $screenReaderCountMessage.setAttribute('aria-live', 'polite');
    this.$screenReaderCountMessage = $screenReaderCountMessage;
    $fallbackLimitMessage.insertAdjacentElement('afterend', $screenReaderCountMessage);

    // Create our live-updating counter element, copying the classes from the
    // fallback element for backwards compatibility as these may have been configured
    var $visibleCountMessage = document.createElement('div');
    $visibleCountMessage.className = $fallbackLimitMessage.className;
    $visibleCountMessage.classList.add('nhsuk-character-count__status');
    $visibleCountMessage.setAttribute('aria-hidden', 'true');
    this.$visibleCountMessage = $visibleCountMessage;
    $fallbackLimitMessage.insertAdjacentElement('afterend', $visibleCountMessage);

    // Hide the fallback limit message
    $fallbackLimitMessage.classList.add('nhsuk-u-visually-hidden');

    // Read options set using dataset ('data-' values)
    this.options = CharacterCount.getDataset(this.$module);

    // Determine the limit attribute (characters or words)
    var countAttribute = this.defaults.characterCountAttribute;
    if (this.options.maxwords) {
      countAttribute = this.defaults.wordCountAttribute;
    }

    // Save the element limit
    this.maxLength = this.$module.getAttribute(countAttribute);

    // Check for limit
    if (!this.maxLength) {
      return;
    }

    // Remove hard limit if set
    this.$textarea.removeAttribute('maxlength');
    this.bindChangeEvents();

    // When the page is restored after navigating 'back' in some browsers the
    // state of the character count is not restored until *after* the DOMContentLoaded
    // event is fired, so we need to manually update it after the pageshow event
    // in browsers that support it.
    if ('onpageshow' in window) {
      window.addEventListener('pageshow', this.updateCountMessage.bind(this));
    } else {
      window.addEventListener('DOMContentLoaded', this.updateCountMessage.bind(this));
    }
    this.updateCountMessage();
  }

  // Read data attributes
  CharacterCount.getDataset = function getDataset(element) {
    var dataset = {};
    var attributes = element.attributes;
    if (attributes) {
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        var match = attribute.name.match(/^data-(.+)/);
        if (match) {
          dataset[match[1]] = attribute.value;
        }
      }
    }
    return dataset;
  }

  // Counts characters or words in text
  ;
  var _proto = CharacterCount.prototype;
  _proto.count = function count(text) {
    var length;
    if (this.options.maxwords) {
      var tokens = text.match(/\S+/g) || []; // Matches consecutive non-whitespace chars
      length = tokens.length; // eslint-disable-line prefer-destructuring
    } else {
      length = text.length; // eslint-disable-line prefer-destructuring
    }
    return length;
  }

  // Bind input propertychange to the elements and update based on the change
  ;
  _proto.bindChangeEvents = function bindChangeEvents() {
    var $textarea = this.$textarea;
    $textarea.addEventListener('keyup', this.handleKeyUp.bind(this));

    // Bind focus/blur events to start/stop polling
    $textarea.addEventListener('focus', this.handleFocus.bind(this));
    $textarea.addEventListener('blur', this.handleBlur.bind(this));
  }

  // Speech recognition software such as Dragon NaturallySpeaking will modify the
  // fields by directly changing its `value`. These changes don't trigger events
  // in JavaScript, so we need to poll to handle when and if they occur.
  ;
  _proto.checkIfValueChanged = function checkIfValueChanged() {
    if (!this.$textarea.oldValue) {
      this.$textarea.oldValue = '';
    }
    if (this.$textarea.value !== this.$textarea.oldValue) {
      this.$textarea.oldValue = this.$textarea.value;
      this.updateCountMessage();
    }
  }

  // Helper function to update both the visible and screen reader-specific
  // counters simultaneously (e.g. on init)
  ;
  _proto.updateCountMessage = function updateCountMessage() {
    this.updateVisibleCountMessage();
    this.updateScreenReaderCountMessage();
  }

  // Update visible counter
  ;
  _proto.updateVisibleCountMessage = function updateVisibleCountMessage() {
    var $textarea = this.$textarea;
    var $visibleCountMessage = this.$visibleCountMessage;
    var remainingNumber = this.maxLength - this.count($textarea.value);

    // If input is over the threshold, remove the disabled class which renders the
    // counter invisible.
    if (this.isOverThreshold()) {
      $visibleCountMessage.classList.remove('nhsuk-character-count__message--disabled');
    } else {
      $visibleCountMessage.classList.add('nhsuk-character-count__message--disabled');
    }

    // Update styles
    if (remainingNumber < 0) {
      $textarea.classList.add('nhsuk-textarea--error');
      $visibleCountMessage.classList.remove('nhsuk-hint');
      $visibleCountMessage.classList.add('nhsuk-error-message');
    } else {
      $textarea.classList.remove('nhsuk-textarea--error');
      $visibleCountMessage.classList.remove('nhsuk-error-message');
      $visibleCountMessage.classList.add('nhsuk-hint');
    }

    // Update message
    $visibleCountMessage.innerHTML = this.formattedUpdateMessage();
  }

  // Update screen reader-specific counter
  ;
  _proto.updateScreenReaderCountMessage = function updateScreenReaderCountMessage() {
    var $screenReaderCountMessage = this.$screenReaderCountMessage;

    // If over the threshold, remove the aria-hidden attribute, allowing screen
    // readers to announce the content of the element.
    if (this.isOverThreshold()) {
      $screenReaderCountMessage.removeAttribute('aria-hidden');
    } else {
      $screenReaderCountMessage.setAttribute('aria-hidden', true);
    }

    // Update message
    $screenReaderCountMessage.innerHTML = this.formattedUpdateMessage();
  }

  // Format update message
  ;
  _proto.formattedUpdateMessage = function formattedUpdateMessage() {
    var $textarea = this.$textarea;
    var options = this.options;
    var remainingNumber = this.maxLength - this.count($textarea.value);
    var charVerb = 'remaining';
    var charNoun = 'character';
    var displayNumber = remainingNumber;
    if (options.maxwords) {
      charNoun = 'word';
    }
    charNoun += remainingNumber === -1 || remainingNumber === 1 ? '' : 's';
    charVerb = remainingNumber < 0 ? 'too many' : 'remaining';
    displayNumber = Math.abs(remainingNumber);
    return "You have " + displayNumber + " " + charNoun + " " + charVerb;
  }

  // Checks whether the value is over the configured threshold for the input.
  // If there is no configured threshold, it is set to 0 and this function will
  // always return true.
  ;
  _proto.isOverThreshold = function isOverThreshold() {
    var $textarea = this.$textarea;
    var options = this.options;

    // Determine the remaining number of characters/words
    var currentLength = this.count($textarea.value);
    var maxLength = this.maxLength;

    // Set threshold if presented in options
    var thresholdPercent = options.threshold ? options.threshold : 0;
    var thresholdValue = maxLength * thresholdPercent / 100;
    return thresholdValue <= currentLength;
  }

  // Update the visible character counter and keep track of when the last update
  // happened for each keypress
  ;
  _proto.handleKeyUp = function handleKeyUp() {
    this.updateVisibleCountMessage();
    this.lastInputTimestamp = Date.now();
  };
  _proto.handleFocus = function handleFocus() {
    var _this = this;
    // If the field is focused, and a keyup event hasn't been detected for at
    // least 1000 ms (1 second), then run the manual change check.
    // This is so that the update triggered by the manual comparison doesn't
    // conflict with debounced KeyboardEvent updates.
    this.valueChecker = setInterval(function () {
      if (!_this.lastInputTimestamp || Date.now() - 500 >= _this.lastInputTimestamp) {
        _this.checkIfValueChanged();
      }
    }, 1000);
  };
  _proto.handleBlur = function handleBlur() {
    // Cancel value checking on blur
    clearInterval(this.valueChecker);
  };
  return CharacterCount;
}();
CharacterCount.prototype.defaults = {
  characterCountAttribute: 'data-maxlength',
  wordCountAttribute: 'data-maxwords'
};
module.exports = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? document : _ref$scope;
  var characterCounts = scope.querySelectorAll('[data-module="nhsuk-character-count"]');
  characterCounts.forEach(function (el) {
    new CharacterCount(el);
  });
};

/***/ }),

/***/ 305:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(848),
  toggleConditionalInput = _require.toggleConditionalInput;

/**
 * Conditionally show content when a checkbox button is checked
 * Test at http://localhost:3000/nhsuk-frontend/components/checkboxes/conditional.html
 */
var syncAllConditionalReveals = function syncAllConditionalReveals(input) {
  var allInputsInForm = input.form.querySelectorAll('input[type="checkbox"]');
  allInputsInForm.forEach(function (item) {
    return toggleConditionalInput(item, 'nhsuk-checkboxes__conditional--hidden');
  });
};

/**
 * Uncheck other checkboxes
 *
 * Find any other checkbox inputs with the checkbox group value, and uncheck them.
 * This is useful for when a “None of these" checkbox is checked.
 */
var unCheckAllInputsExcept = function unCheckAllInputsExcept(input) {
  var allInputsInSameExclusiveGroup = input.form.querySelectorAll("input[type=\"checkbox\"][data-checkbox-exclusive-group=\"" + input.getAttribute('data-checkbox-exclusive-group') + "\"]");
  allInputsInSameExclusiveGroup.forEach(function (inputWithSameName) {
    var hasSameFormOwner = input.form === inputWithSameName.form;
    if (hasSameFormOwner && inputWithSameName !== input) {
      inputWithSameName.checked = false; // eslint-disable-line no-param-reassign
    }
  });
  syncAllConditionalReveals(input);
};

/**
 * Uncheck exclusive inputs
 *
 * Find any checkbox inputs with the same checkbox group value and the 'exclusive' behaviour,
 * and uncheck them. This helps prevent someone checking both a regular checkbox and a
 * "None of these" checkbox in the same fieldset.
 */
var unCheckExclusiveInputs = function unCheckExclusiveInputs(input) {
  var allExclusiveInputsInSameExclusiveGroup = input.form.querySelectorAll("input[type=\"checkbox\"][data-checkbox-exclusive][data-checkbox-exclusive-group=\"" + input.getAttribute('data-checkbox-exclusive-group') + "\"]");
  allExclusiveInputsInSameExclusiveGroup.forEach(function (exclusiveInput) {
    var hasSameFormOwner = input.form === exclusiveInput.form;
    if (hasSameFormOwner) {
      exclusiveInput.checked = false; // eslint-disable-line no-param-reassign
    }
  });
  syncAllConditionalReveals(input);
};
module.exports = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? document : _ref$scope;
  // Checkbox input DOMElements inside a conditional form group
  var checkboxInputs = scope.querySelectorAll('.nhsuk-checkboxes .nhsuk-checkboxes__input');

  /**
   * Toggle classes and attributes
   *
   * @param {MouseEvent} event - Click event
   */
  var handleClick = function handleClick(event) {
    // Toggle conditional content based on checked state
    toggleConditionalInput(event.target, 'nhsuk-checkboxes__conditional--hidden');
    if (!event.target.checked) {
      return;
    }

    // Handle 'exclusive' checkbox behaviour (ie "None of these")
    if (event.target.hasAttribute('data-checkbox-exclusive')) {
      unCheckAllInputsExcept(event.target);
    } else {
      unCheckExclusiveInputs(event.target);
    }
  };

  // When the page is restored after navigating 'back' in some browsers the
  // state of form controls is not restored until *after* the DOMContentLoaded
  // event is fired, so we need to sync after the pageshow event in browsers
  // that support it.
  if ('onpageshow' in window) {
    window.addEventListener('pageshow', function () {
      return checkboxInputs.forEach(function (input) {
        return syncAllConditionalReveals(input);
      });
    });
  } else {
    window.addEventListener('DOMContentLoaded', function () {
      return checkboxInputs.forEach(function (input) {
        return syncAllConditionalReveals(input);
      });
    });
  }

  // Although we've set up handlers to sync state on the pageshow or
  // DOMContentLoaded event, init could be called after those events have fired,
  // for example if they are added to the page dynamically, so sync now too.
  checkboxInputs.forEach(function (input) {
    return syncAllConditionalReveals(input);
  });

  // Attach handleClick as click to checkboxInputs
  checkboxInputs.forEach(function (checkboxButton) {
    checkboxButton.addEventListener('change', handleClick);
  });
};

/***/ }),

/***/ 277:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(848),
  generateUniqueID = _require.generateUniqueID,
  toggleAttribute = _require.toggleAttribute;

/**
 * Ensure details component is cross browser and accessible
 * Test at http://localhost:3000/nhsuk-frontend/components/details/index.html
 */

module.exports = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? document : _ref$scope;
  // Nodelist of all details elements
  var allDetails = scope.querySelectorAll('details');

  /**
   * Adds all necessary functionality to a details element
   *
   * @param {HTMLElement} element - details element to initialise
   */
  var initDetails = function initDetails(element) {
    // Set details element as polyfilled to prevent duplicate events being added
    element.setAttribute('nhsuk-polyfilled', 'true');

    // Set content element and give it an ID if it doesn't already have one
    var content = element.querySelector('.nhsuk-details__text');
    if (!content.id) {
      content.setAttribute('id', "details-content-" + generateUniqueID());
    }

    // Set summary element
    var summary = element.querySelector('.nhsuk-details__summary');

    // Set initial summary aria attributes
    summary.setAttribute('role', 'button');
    summary.setAttribute('aria-controls', content.id);
    summary.setAttribute('tabIndex', '0');
    var openAttr = element.getAttribute('open') !== null;
    if (openAttr === true) {
      summary.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
    } else {
      summary.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
      content.style.display = 'none';
    }
    var toggleDetails = function toggleDetails() {
      toggleAttribute(summary, 'aria-expanded');
      toggleAttribute(content, 'aria-hidden');
      content.style.display = content.getAttribute('aria-hidden') === 'true' ? 'none' : '';
      if (element.hasAttribute('open')) {
        element.removeAttribute('open');
      } else {
        element.setAttribute('open', 'open');
      }
    };

    // Toggle details onclick
    summary.addEventListener('click', toggleDetails);

    // Call toggle details on enter and space key events
    summary.addEventListener('keydown', function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        summary.click();
      }
    });
  };
  allDetails.forEach(function (element) {
    // If there is native details support, we want to avoid running code to polyfill native behaviour.
    var hasNativeDetails = 'HTMLDetailsElement' in window && element instanceof HTMLDetailsElement;
    if (!hasNativeDetails && !element.hasAttribute('nhsuk-polyfilled')) {
      initDetails(element);
    }
  });
};

/***/ }),

/***/ 673:
/***/ (function(module) {

/**
 * Adapted from https://github.com/alphagov/govuk-frontend/blob/v2.13.0/src/components/error-summary/error-summary.js
 */

/**
 * Get associated legend or label
 *
 * Returns the first element that exists from this list:
 *
 * - The `<legend>` associated with the closest `<fieldset>` ancestor, as long
 *   as the top of it is no more than half a viewport height away from the
 *   bottom of the input
 * - The first `<label>` that is associated with the input using for='inputId'
 * - The closest parent `<label>`
 */
function getAssociatedLegendOrLabel(input) {
  var fieldset = input.closest('fieldset');
  if (fieldset) {
    var legends = fieldset.getElementsByTagName('legend');
    if (legends.length) {
      var candidateLegend = legends[0]; // eslint-disable-line prefer-destructuring

      // If the input type is radio or checkbox, always use the legend if there
      // is one.
      if (input.type === 'checkbox' || input.type === 'radio') {
        return candidateLegend;
      }

      // For other input types, only scroll to the fieldset’s legend (instead of
      // the label associated with the input) if the input would end up in the
      // top half of the screen.
      //
      // This should avoid situations where the input either ends up off the
      // screen, or obscured by a software keyboard.
      var legendTop = candidateLegend.getBoundingClientRect().top;
      var inputRect = input.getBoundingClientRect();

      // If the browser doesn't support Element.getBoundingClientRect().height
      // or window.innerHeight (like IE8), bail and just link to the label.
      if (inputRect.height && window.innerHeight) {
        var inputBottom = inputRect.top + inputRect.height;
        if (inputBottom - legendTop < window.innerHeight / 2) {
          return candidateLegend;
        }
      }
    }
  }
  return document.querySelector("label[for='" + input.getAttribute('id') + "']") || input.closest('label');
}

/**
 * Focus the target element
 *
 * By default, the browser will scroll the target into view. Because our labels
 * or legends appear above the input, this means the user will be presented with
 * an input without any context, as the label or legend will be off the top of
 * the screen.
 *
 * Manually handling the click event, scrolling the question into view and then
 * focussing the element solves this.
 *
 * This also results in the label and/or legend being announced correctly in
 * NVDA - without this only the field type is announced
 * (e.g. 'Edit, has autocomplete').
 */
function focusTarget(target) {
  // If the element that was clicked was not a link, return early
  if (target.tagName !== 'A' || target.href === false) {
    return false;
  }
  var input = document.querySelector(target.hash);
  if (!input) {
    return false;
  }
  var legendOrLabel = getAssociatedLegendOrLabel(input);
  if (!legendOrLabel) {
    return false;
  }

  // Scroll the legend or label into view *before* calling focus on the input to
  // avoid extra scrolling in browsers that don't support `preventScroll` (which
  // at time of writing is most of them...)
  legendOrLabel.scrollIntoView();
  input.focus({
    preventScroll: true
  });
  return true;
}

/**
 * Handle click events on the error summary
 */
function handleClick(event) {
  if (focusTarget(event.target)) {
    event.preventDefault();
  }
}
module.exports = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$focusOnPageLoad = _ref.focusOnPageLoad,
    focusOnPageLoad = _ref$focusOnPageLoad === void 0 ? true : _ref$focusOnPageLoad,
    _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? document : _ref$scope;
  // Error summary component
  var errorSummary = scope.querySelector('.nhsuk-error-summary');
  if (errorSummary) {
    // Focus error summary component if it exists

    if (focusOnPageLoad) {
      errorSummary.focus();
    }
    errorSummary.addEventListener('click', handleClick);
  }
};

/***/ }),

/***/ 649:
/***/ (function(module) {

/**
 * Header component
 *
 */
var Header = /*#__PURE__*/function () {
  function Header($module) {
    if (!$module) {
      return this;
    }
    this.$module = $module;
    this.navigationList = this.$module.querySelector('.nhsuk-header__navigation-list');
    this.navigationItems = this.$module.querySelectorAll('.nhsuk-header__navigation-item');
    this.mobileMenuToggleButton = this.$module.querySelector('.nhsuk-header__menu-toggle');
    this.mobileMenuContainer = this.$module.querySelector('.nhsuk-mobile-menu-container');
    if (!this.navigationList || !this.navigationItems || !this.navigationItems.length || !this.mobileMenuToggleButton || !this.mobileMenuContainer) {
      return this;
    }
    this.mobileMenu = document.createElement('ul');
    this.menuIsEnabled = false;
    this.menuIsOpen = false;
    this.handleEscapeKey = this.onEscapeKey.bind(this);
    this.handleUpdateNavigation = this.debounce(this.updateNavigation);
    this.handleToggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.setupNavigation();
    this.updateNavigation();
  }
  var _proto = Header.prototype;
  _proto.debounce = function debounce(func, timeout) {
    var _this = this;
    if (timeout === void 0) {
      timeout = 100;
    }
    var timer;
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timer);
      timer = setTimeout(function () {
        func.apply(_this, args);
      }, timeout);
    };
  }

  /**
   * Reset navigation
   *
   * Calculate available space by summing the width of each navigation item
   */;
  _proto.resetNavigation = function resetNavigation() {
    var _this2 = this;
    var right = 0;

    // Reset and calculate widths on every resize
    this.breakpoints.forEach(function (breakpoint) {
      _this2.navigationList.insertBefore(breakpoint.element, _this2.mobileMenuContainer);

      // Calculate widths
      right += breakpoint.element.offsetWidth;
      breakpoint.right = right;
    });

    // Reset space for menu button
    this.width = this.navigationList.offsetWidth;
  }

  /**
   * Add the breakpoints with default positions
   */;
  _proto.setupNavigation = function setupNavigation() {
    var _this3 = this;
    this.breakpoints = [];
    this.navigationItems.forEach(function (element) {
      _this3.breakpoints.push({
        element: element,
        right: 0
      });
    });

    // Add resize listener for next update
    window.addEventListener('resize', this.handleUpdateNavigation);
  }

  /**
   * Add the mobile menu to the DOM
   */;
  _proto.setupMobileMenu = function setupMobileMenu() {
    if (this.mobileMenu.parentElement) {
      return;
    }
    this.mobileMenuContainer.appendChild(this.mobileMenu);
    this.mobileMenu.classList.add('nhsuk-header__drop-down', 'nhsuk-header__drop-down--hidden');
  }

  /**
   * Enable the mobile menu
   */;
  _proto.enableMobileMenu = function enableMobileMenu() {
    if (this.menuIsEnabled) {
      return;
    }
    this.menuIsEnabled = true;
    this.mobileMenuToggleButton.classList.add('nhsuk-header__menu-toggle--visible');
    this.mobileMenuContainer.classList.add('nhsuk-mobile-menu-container--visible');

    // Add click listener to toggle menu
    this.mobileMenuToggleButton.addEventListener('click', this.handleToggleMobileMenu);
  }

  /**
   * Disable the mobile menu
   */;
  _proto.disableMobileMenu = function disableMobileMenu() {
    if (!this.menuIsEnabled) {
      return;
    }
    this.closeMobileMenu();
    this.menuIsEnabled = false;
    this.mobileMenuToggleButton.classList.remove('nhsuk-header__menu-toggle--visible');
    this.mobileMenuContainer.classList.remove('nhsuk-mobile-menu-container--visible');

    // Remove click listener to toggle menu
    this.mobileMenuToggleButton.removeEventListener('click', this.handleToggleMobileMenu);
  }

  /**
   * Close the mobile menu
   *
   * Closes the mobile menu and updates accessibility state.
   *
   * Removes the margin-bottom from the navigation
   */;
  _proto.closeMobileMenu = function closeMobileMenu() {
    if (!this.menuIsEnabled || !this.menuIsOpen) {
      return;
    }
    this.menuIsOpen = false;
    this.mobileMenu.classList.add('nhsuk-header__drop-down--hidden');
    this.$module.style.marginBottom = 0;
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'false');

    // Remove escape key listener to close menu
    document.removeEventListener('keydown', this.handleEscapeKey);
  }

  /**
   * Escape key handler
   *
   * This function is called when the user
   * presses the escape key to close the mobile menu.
   *
   * @param {KeyboardEvent} event - Key press event
   */;
  _proto.onEscapeKey = function onEscapeKey(event) {
    if (event.key === 'Escape') {
      this.closeMobileMenu();
    }
  }

  /**
   * Open the mobile menu
   *
   * Opens the mobile menu and updates accessibility state.
   *
   * The mobile menu is absolutely positioned, so it adds a margin
   * to the bottom of the navigation to prevent it from overlapping
   *
   * Adds event listeners for the close button,
   */;
  _proto.openMobileMenu = function openMobileMenu() {
    if (!this.menuIsEnabled || this.menuIsOpen) {
      return;
    }
    this.menuIsOpen = true;
    this.mobileMenu.classList.remove('nhsuk-header__drop-down--hidden');
    var marginBody = this.mobileMenu.offsetHeight;
    this.$module.style.marginBottom = marginBody + "px";
    this.mobileMenuToggleButton.setAttribute('aria-expanded', 'true');

    // Add escape key listener to close menu
    document.addEventListener('keydown', this.handleEscapeKey);
  }

  /**
   * Handle menu button click
   *
   * Toggles the mobile menu between open and closed
   */;
  _proto.toggleMobileMenu = function toggleMobileMenu() {
    if (!this.menuIsEnabled) {
      return;
    }
    if (this.menuIsOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  /**
   * Update navigation for the available space
   *
   * Moves all items that overflow the available space into the mobile menu
   */;
  _proto.updateNavigation = function updateNavigation() {
    var _this4 = this;
    this.resetNavigation();

    // Check for items that overflow
    var menuItems = this.breakpoints.filter(function (breakpoint) {
      return breakpoint.right > _this4.width;
    });

    // Disable mobile menu if empty
    if (!menuItems.length) {
      this.disableMobileMenu();
      return;
    }
    this.setupMobileMenu();
    this.enableMobileMenu();

    // Subtract space for menu button
    this.width -= this.mobileMenuContainer.offsetWidth;

    // Move items based on available width
    this.breakpoints.forEach(function (breakpoint) {
      if (breakpoint.right > _this4.width) {
        _this4.mobileMenu.insertAdjacentElement('beforeend', breakpoint.element);
      }
    });
  };
  return Header;
}();
module.exports = function (options) {
  if (options === void 0) {
    options = {};
  }
  var $scope = options.scope || document;
  var $module = $scope.querySelector('.nhsuk-navigation');
  new Header($module);
};

/***/ }),

/***/ 551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(848),
  toggleConditionalInput = _require.toggleConditionalInput;

/**
 * Conditionally show content when a radio button is checked
 * Test at http://localhost:3000/nhsuk-frontend/components/radios/conditional.html
 */

module.exports = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? document : _ref$scope;
  // Radio input HTMLElements inside a conditional form group
  var radioInputs = scope.querySelectorAll('.nhsuk-radios--conditional .nhsuk-radios__input');

  /**
   * Update all conditional reveals to match checked state
   */
  var syncAllConditionalReveals = function syncAllConditionalReveals() {
    radioInputs.forEach(function (input) {
      return toggleConditionalInput(input, 'nhsuk-radios__conditional--hidden');
    });
  };

  // When the page is restored after navigating 'back' in some browsers the
  // state of form controls is not restored until *after* the DOMContentLoaded
  // event is fired, so we need to sync after the pageshow event in browsers
  // that support it.
  if ('onpageshow' in window) {
    window.addEventListener('pageshow', syncAllConditionalReveals);
  } else {
    window.addEventListener('DOMContentLoaded', syncAllConditionalReveals);
  }

  // Although we've set up handlers to sync state on the pageshow or
  // DOMContentLoaded event, init could be called after those events have fired,
  // for example if they are added to the page dynamically, so sync now too.
  syncAllConditionalReveals();

  // Attach event handler to radioInputs
  radioInputs.forEach(function (radioButton) {
    radioButton.addEventListener('change', syncAllConditionalReveals);
  });
};

/***/ }),

/***/ 829:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _require = __webpack_require__(848),
  setFocus = _require.setFocus;

/*
 * NHS.UK skip link.
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 */

module.exports = function (options) {
  if (options === void 0) {
    options = {};
  }
  var $scope = options.scope || document;
  var $module = $scope.querySelector('.nhsuk-skip-link');

  // Check for skip link
  if (!$module || !($module instanceof HTMLAnchorElement)) {
    return;
  }
  var linkedElementId = $module.hash.split('#').pop();
  var $linkedElement = linkedElementId ? document.getElementById(linkedElementId) : null;

  // Check for linked element
  if (!$linkedElement) {
    return;
  }

  /**
   * Focus the linked element on click
   *
   * Adds a helper CSS class to hide native focus styles,
   * but removes it on blur to restore native focus styles
   */
  $module.addEventListener('click', function () {
    return setFocus($linkedElement, {
      onBeforeFocus: function onBeforeFocus() {
        $linkedElement.classList.add('nhsuk-skip-link-focused-element');
      },
      onBlur: function onBlur() {
        $linkedElement.classList.remove('nhsuk-skip-link-focused-element');
      }
    });
  });
};

/***/ }),

/***/ 303:
/***/ (function(module) {

var Tabs = /*#__PURE__*/function () {
  function Tabs($module) {
    this.$module = $module;
    this.$tabs = $module.querySelectorAll('.nhsuk-tabs__tab');
    this.keys = {
      down: 40,
      left: 37,
      right: 39,
      up: 38
    };
    this.jsHiddenClass = 'nhsuk-tabs__panel--hidden';
    this.showEvent = new CustomEvent('tab.show');
    this.hideEvent = new CustomEvent('tab.hide');
    if (typeof window.matchMedia === 'function') {
      this.setupResponsiveChecks();
    } else {
      this.setup();
    }
  }
  var _proto = Tabs.prototype;
  _proto.setupResponsiveChecks = function setupResponsiveChecks() {
    // $nhsuk-breakpoints: (
    // mobile: 320px,
    // tablet: 641px,
    // desktop: 769px,
    // large-desktop: 990px
    // );
    this.mql = window.matchMedia('(min-width: 641px)');

    // MediaQueryList.addEventListener isn't supported by Safari < 14 so we need
    // to be able to fall back to the deprecated MediaQueryList.addListener
    if ('addEventListener' in this.mql) {
      this.mql.addEventListener('change', this.checkMode.bind(this));
    } else {
      // addListener is a deprecated function, however addEventListener
      // isn't supported by Safari < 14. We therefore add this in as
      // a fallback for those browsers
      this.mql.addListener(this.checkMode.bind(this));
    }
    this.checkMode();
  };
  _proto.checkMode = function checkMode() {
    if (this.mql.matches) {
      this.setup();
    } else {
      this.teardown();
    }
  };
  _proto.setup = function setup() {
    var _this = this;
    var $module = this.$module;
    var $tabs = this.$tabs;
    var $tabList = $module.querySelector('.nhsuk-tabs__list');
    var $tabListItems = $module.querySelectorAll('.nhsuk-tabs__list-item');
    if (!$tabs || !$tabList || !$tabListItems) {
      return;
    }
    $tabList.setAttribute('role', 'tablist');
    $tabListItems.forEach(function ($item) {
      $item.setAttribute('role', 'presentation');
    });
    $tabs.forEach(function ($tab) {
      // Set HTML attributes
      _this.setAttributes($tab);

      // Save bounded functions to use when removing event listeners during teardown
      // eslint-disable-next-line no-param-reassign
      $tab.boundTabClick = _this.onTabClick.bind(_this);
      // eslint-disable-next-line no-param-reassign
      $tab.boundTabKeydown = _this.onTabKeydown.bind(_this);

      // Handle events
      $tab.addEventListener('click', $tab.boundTabClick, true);
      $tab.addEventListener('keydown', $tab.boundTabKeydown, true);

      // Remove old active panels
      _this.hideTab($tab);
    });

    // Show either the active tab according to the URL's hash or the first tab
    var $activeTab = this.getTab(window.location.hash) || this.$tabs[0];
    this.showTab($activeTab);

    // Handle hashchange events
    $module.boundOnHashChange = this.onHashChange.bind(this);
    window.addEventListener('hashchange', $module.boundOnHashChange, true);
  };
  _proto.teardown = function teardown() {
    var _this2 = this;
    var $module = this.$module;
    var $tabs = this.$tabs;
    var $tabList = $module.querySelector('.nhsuk-tabs__list');
    var $tabListItems = $module.querySelectorAll('.nhsuk-tabs__list-item');
    if (!$tabs || !$tabList || !$tabListItems) {
      return;
    }
    $tabList.removeAttribute('role');
    $tabListItems.forEach(function ($item) {
      $item.removeAttribute('role', 'presentation');
    });
    $tabs.forEach(function ($tab) {
      // Remove events
      $tab.removeEventListener('click', $tab.boundTabClick, true);
      $tab.removeEventListener('keydown', $tab.boundTabKeydown, true);

      // Unset HTML attributes
      _this2.unsetAttributes($tab);
    });

    // Remove hashchange event handler
    window.removeEventListener('hashchange', $module.boundOnHashChange, true);
  };
  _proto.onHashChange = function onHashChange() {
    var hash = window.location.hash;
    var $tabWithHash = this.getTab(hash);
    if (!$tabWithHash) {
      return;
    }

    // Prevent changing the hash
    if (this.changingHash) {
      this.changingHash = false;
      return;
    }

    // Show either the active tab according to the URL's hash or the first tab
    var $previousTab = this.getCurrentTab();
    this.hideTab($previousTab);
    this.showTab($tabWithHash);
    $tabWithHash.focus();
  };
  _proto.hideTab = function hideTab($tab) {
    this.unhighlightTab($tab);
    this.hidePanel($tab);
  };
  _proto.showTab = function showTab($tab) {
    this.highlightTab($tab);
    this.showPanel($tab);
  };
  _proto.getTab = function getTab(hash) {
    return this.$module.querySelector(".nhsuk-tabs__tab[href=\"" + hash + "\"]");
  };
  _proto.setAttributes = function setAttributes($tab) {
    // set tab attributes
    var panelId = Tabs.getHref($tab).slice(1);
    $tab.setAttribute('id', "tab_" + panelId);
    $tab.setAttribute('role', 'tab');
    $tab.setAttribute('aria-controls', panelId);
    $tab.setAttribute('aria-selected', 'false');
    $tab.setAttribute('tabindex', '-1');

    // set panel attributes
    var $panel = this.getPanel($tab);
    $panel.setAttribute('role', 'tabpanel');
    $panel.setAttribute('aria-labelledby', $tab.id);
    $panel.classList.add(this.jsHiddenClass);
  };
  _proto.unsetAttributes = function unsetAttributes($tab) {
    // unset tab attributes
    $tab.removeAttribute('id');
    $tab.removeAttribute('role');
    $tab.removeAttribute('aria-controls');
    $tab.removeAttribute('aria-selected');
    $tab.removeAttribute('tabindex');

    // unset panel attributes
    var $panel = this.getPanel($tab);
    $panel.removeAttribute('role');
    $panel.removeAttribute('aria-labelledby');
    $panel.removeAttribute('tabindex');
    $panel.classList.remove(this.jsHiddenClass);
  };
  _proto.onTabClick = function onTabClick(e) {
    if (!e.target.classList.contains('nhsuk-tabs__tab')) {
      e.stopPropagation();
      e.preventDefault();
    }
    e.preventDefault();
    var $newTab = e.target;
    var $currentTab = this.getCurrentTab();
    this.hideTab($currentTab);
    this.showTab($newTab);
    this.createHistoryEntry($newTab);
  };
  _proto.createHistoryEntry = function createHistoryEntry($tab) {
    var $panel = this.getPanel($tab);

    // Save and restore the id
    // so the page doesn't jump when a user clicks a tab (which changes the hash)
    var id = $panel.id;
    $panel.id = '';
    this.changingHash = true;
    window.location.hash = Tabs.getHref($tab).slice(1);
    $panel.id = id;
  };
  _proto.onTabKeydown = function onTabKeydown(e) {
    switch (e.keyCode) {
      case this.keys.left:
      case this.keys.up:
        this.activatePreviousTab();
        e.preventDefault();
        break;
      case this.keys.right:
      case this.keys.down:
        this.activateNextTab();
        e.preventDefault();
        break;
      default:
    }
  };
  _proto.activateNextTab = function activateNextTab() {
    var currentTab = this.getCurrentTab();
    var nextTabListItem = currentTab.parentNode.nextElementSibling;
    var nextTab;
    if (nextTabListItem) {
      nextTab = nextTabListItem.querySelector('.nhsuk-tabs__tab');
    }
    if (nextTab) {
      this.hideTab(currentTab);
      this.showTab(nextTab);
      nextTab.focus();
      this.createHistoryEntry(nextTab);
    }
  };
  _proto.activatePreviousTab = function activatePreviousTab() {
    var currentTab = this.getCurrentTab();
    var previousTabListItem = currentTab.parentNode.previousElementSibling;
    var previousTab;
    if (previousTabListItem) {
      previousTab = previousTabListItem.querySelector('.nhsuk-tabs__tab');
    }
    if (previousTab) {
      this.hideTab(currentTab);
      this.showTab(previousTab);
      previousTab.focus();
      this.createHistoryEntry(previousTab);
    }
  };
  _proto.getPanel = function getPanel($tab) {
    var $panel = this.$module.querySelector(Tabs.getHref($tab));
    return $panel;
  };
  _proto.showPanel = function showPanel($tab) {
    var $panel = this.getPanel($tab);
    $panel.classList.remove(this.jsHiddenClass);
    $panel.dispatchEvent(this.showEvent);
  };
  _proto.hidePanel = function hidePanel(tab) {
    var $panel = this.getPanel(tab);
    $panel.classList.add(this.jsHiddenClass);
    $panel.dispatchEvent(this.hideEvent);
  };
  _proto.unhighlightTab = function unhighlightTab($tab) {
    $tab.setAttribute('aria-selected', 'false');
    $tab.parentNode.classList.remove('nhsuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '-1');
  };
  _proto.highlightTab = function highlightTab($tab) {
    $tab.setAttribute('aria-selected', 'true');
    $tab.parentNode.classList.add('nhsuk-tabs__list-item--selected');
    $tab.setAttribute('tabindex', '0');
  };
  _proto.getCurrentTab = function getCurrentTab() {
    return this.$module.querySelector('.nhsuk-tabs__list-item--selected .nhsuk-tabs__tab');
  }

  // this is because IE doesn't always return the actual value but a relative full path
  // should be a utility function most prob
  // http://labs.thesedays.com/blog/2010/01/08/getting-the-href-value-with-jquery-in-ie/
  ;
  Tabs.getHref = function getHref($tab) {
    var href = $tab.getAttribute('href');
    var hash = href.slice(href.indexOf('#'), href.length);
    return hash;
  };
  return Tabs;
}();
/**
 * Initialise tabs component
 */
module.exports = function (_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? document : _ref$scope;
  var tabs = scope.querySelectorAll('[data-module="nhsuk-tabs"]');
  tabs.forEach(function (el) {
    new Tabs(el);
  });
};

/***/ }),

/***/ 849:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable import/prefer-default-export */

// Components
var initButton = __webpack_require__(807);
var initCharacterCount = __webpack_require__(997);
var initCheckboxes = __webpack_require__(305);
var initDetails = __webpack_require__(277);
var initErrorSummary = __webpack_require__(673);
var initHeader = __webpack_require__(649);
var initRadios = __webpack_require__(551);
var initSkipLink = __webpack_require__(829);
var initTabs = __webpack_require__(303);
__webpack_require__(621);

/**
 * Use this function to initialise nhsuk-frontend components within a
 * given scope. This function is called by default with the document
 * element, but you can call it again later with a new DOM element
 * containing nhsuk-frontend components which you wish to initialise.
 *
 * @param {HTMLElement} scope
 */
function initAll(scope) {
  initHeader({
    scope: scope
  });
  initSkipLink({
    scope: scope
  });
  initButton({
    scope: scope
  });
  initCharacterCount({
    scope: scope
  });
  initCheckboxes({
    scope: scope
  });
  initDetails({
    scope: scope
  });
  initErrorSummary({
    scope: scope
  });
  initRadios({
    scope: scope
  });
  initTabs({
    scope: scope
  });
}
module.exports = {
  initButton: initButton,
  initCharacterCount: initCharacterCount,
  initCheckboxes: initCheckboxes,
  initDetails: initDetails,
  initErrorSummary: initErrorSummary,
  initHeader: initHeader,
  initRadios: initRadios,
  initSkipLink: initSkipLink,
  initTabs: initTabs,
  initAll: initAll
};

/***/ }),

/***/ 621:
/***/ (function() {

/**
 * IE polyfill for NodeList.forEach()
 */
if (!NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/**
 * IE polyfill for Array.includes()
 */
if (!Array.prototype.includes) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'includes', {
    enumerable: false,
    value: function value(obj) {
      return this.filter(function (el) {
        return el === obj;
      }).length > 0;
    }
  });
}

/**
 * IE polyfill for Element.closest()
 */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    var el = this;
    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/**
 * IE polyfill for CustomEvent
 */
if (typeof window.CustomEvent !== 'function') {
  window.CustomEvent = function (event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  };
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var _require = __webpack_require__(849),
  initAll = _require.initAll;

// Initialise components
document.addEventListener('DOMContentLoaded', function () {
  return initAll(document);
});
/******/ })()
;
//# sourceMappingURL=nhsuk.js.map